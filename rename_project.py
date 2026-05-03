import os
import re

ROOT_DIR = "."  # change if needed

# Patterns for different naming styles
patterns = [
    (re.compile(r"WSD"), "WSD"),           # PascalCase
    (re.compile(r"wsd"), "wsd"),           # camelCase
    (re.compile(r"wsd"), "wsd"),          # snake_case
    (re.compile(r"WSD"), "WSD"),          # UPPER_SNAKE
    (re.compile(r"wsd"), "wsd"),           # lowercase
    (re.compile(r"WSD"), "WSD"),           # uppercase
]

# ---- Replace content inside files ----
def replace_in_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        new_content = content
        for pattern, replacement in patterns:
            new_content = pattern.sub(replacement, new_content)

        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated content: {file_path}")

    except Exception as e:
        print(f"Skipped (error): {file_path} -> {e}")


# ---- Rename files/folders ----
def rename_path(path):
    dir_name, base_name = os.path.split(path)
    new_name = base_name

    for pattern, replacement in patterns:
        new_name = pattern.sub(replacement, new_name)

    if new_name != base_name:
        new_path = os.path.join(dir_name, new_name)
        os.rename(path, new_path)
        print(f"Renamed: {path} -> {new_path}")
        return new_path

    return path


# ---- Walk project ----
def process_project(root):
    # First replace content
    for root_dir, dirs, files in os.walk(root):
        for file in files:
            file_path = os.path.join(root_dir, file)
            replace_in_file(file_path)

    # Then rename (bottom-up to avoid path issues)
    for root_dir, dirs, files in os.walk(root, topdown=False):
        for name in files:
            rename_path(os.path.join(root_dir, name))
        for name in dirs:
            rename_path(os.path.join(root_dir, name))


if __name__ == "__main__":
    process_project(ROOT_DIR)
    print("\nDone 🚀")
