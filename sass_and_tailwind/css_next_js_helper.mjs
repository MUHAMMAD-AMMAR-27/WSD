import chokidar from 'chokidar';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const watchDir = path.join(__dirname, './dist/assets');
const outputFile = path.join(__dirname, '../app/src/index.css');

// Debounce timer to avoid rapid fire copying
let debounceTimer = null;
let lastCopied = '';

async function copyViteCSS() {
    try {
        const files = await fs.readdir(watchDir);
        const cssFile = files.find(file => /^vite-.*\.css$/.test(file));

        if (!cssFile) {
            console.warn('⚠️ No vite-*.css file found yet, will retry...');
            setTimeout(copyViteCSS, 300); // Retry in 300ms
            return;
        }

        if (cssFile === lastCopied) {
            return; // No need to copy same file again
        }

        const sourcePath = path.join(watchDir, cssFile);
        await fs.copyFile(sourcePath, outputFile);
        lastCopied = cssFile;

        console.log(`✅ Copied ${cssFile} → main.css`);
    } catch (err) {
        console.error('❌ Error copying CSS file:', err.message);
        setTimeout(copyViteCSS, 500); // Retry after 0.5s
    }
}

const watcher = chokidar.watch(watchDir, {
    persistent: true,
    ignoreInitial: false,
    awaitWriteFinish: {
        stabilityThreshold: 300,
        pollInterval: 100,
    },
});

watcher
    .on('all', (event, filePath) => {
        if (/vite-.*\.css$/.test(path.basename(filePath))) {
            console.log(`📦 Detected ${event} on ${filePath}`);

            // Debounce to avoid firing multiple times
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                copyViteCSS();
            }, 500);
        }
    })
    .on('error', err => {
        console.error('🚨 Watcher error:', err.message);
    });

console.log(`👀 Watching for changes in ${watchDir}`);
