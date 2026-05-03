const fs = require("fs");

const file = process.argv[2];

if (!file) {
    console.error("❌ No file provided");
    process.exit(1);
}

const originalContent = fs.readFileSync(file, "utf8");
let content = originalContent;

/**
 * -------------------------------------------------
 * RULE 1 — dispatch( queueNotification / setSomething )
 * -------------------------------------------------
 */
// content = content.replace(
//     /dispatch\s*\(\s*\n\s*([a-zA-Z0-9_]+)\s*\(/g,
//     "dispatch($1("
// );

/**
 * -------------------------------------------------
 * RULE 2 — notification class inline
 * -------------------------------------------------
 */
// content = content.replace(
//     /dispatch\(queueNotification\(\s*\n\s*new\s+/g,
//     "dispatch(queueNotification(new "
// );

/**
 * -------------------------------------------------
 * RULE 3 — updateSomethingState single line
 * -------------------------------------------------
 */
content = content.replace(
    /dispatch\s*\(\s*(update[A-Za-z0-9]+State)\s*\(\s*([A-Za-z0-9_.]+)\s*\)\s*\)/gs,
    (_, fn, value) => `dispatch(${fn}(${value}))`
);

/**
 * -------------------------------------------------
 * RULE 4 — localStorage.setItem single line
 * -------------------------------------------------
 */
content = content.replace(
    /localStorage\.setItem\s*\(\s*\n\s*([^\n,]+),\s*\n\s*([^\n]+)\s*\);/gs,
    (_, key, val) => `localStorage.setItem(${key.trim()}, ${val.trim()});`
);

/**
 * -------------------------------------------------
 * RULE 5 — useAppSelector multiline collapse
 * -------------------------------------------------
 */
content = content.replace(
    /const\s+([A-Za-z0-9_]+)\s*=\s*useAppSelector\s*\(\s*\n\s*([A-Za-z0-9_]+)\s*\n\s*\);/gs,
    (_, name, selector) => `const ${name} = useAppSelector(${selector});`
);

content = content.replace(
    /useAppSelector\s*\(\s*\n\s*([A-Za-z0-9_]+)\s*\n\s*\)/gs,
    "useAppSelector($1)"
);

/**
 * -------------------------------------------------
 * RULE 6 — fix prettier split dispatch(queueNotification(
 * -------------------------------------------------
 */
// content = content.replace(
//     /dispatch\(queueNotification\(\s+/g,
//     "dispatch(queueNotification("
// );

/**
 * -------------------------------------------------
 * RULE 7 — remove extra bracket newlines
 * -------------------------------------------------
 */
// content = content.replace(
//     /\)\s*\n\s*\);/g,
//     "));"
// );

/**
 * -------------------------------------------------
 * RULE 8 — FIX dispatch closing bracket indentation
 * robust version
 * -------------------------------------------------
 */
// content = content.replace(
//     /^(\s*)dispatch\([\s\S]*?\)\);/gm,
//     (block, dispatchIndent) => {
//         return block.replace(
//             /\n\s*\)\);(\s*)$/,
//             `\n${dispatchIndent}));$1`
//         );
//     }
// );

/**
 * -------------------------------------------------
 * WRITE ONLY IF CHANGED
 * -------------------------------------------------
 */
if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log("✔ Post-format changes applied:", file);
} else {
    console.log("✔ No post-format changes needed");
}
