#!/bin/bash

DIR_SOURCE="docs/skills"
RANGE_SIDEBAR="32 55"

LIST_FILES=$(find "$DIR_SOURCE" -type f -name "*.md" | sort)
LIST_FILES_ARRAY=($LIST_FILES)

echo "List of files:"
for FILE in "${LIST_FILES_ARRAY[@]}"; do
    # Get ID from sidebar_position from the file using sed instead of grep -P
    ID=$(cat "$FILE" | awk '/sidebar_position/{print $2}' | sed 's/,$//')
    
    if [ -n "$ID" ]; then
        # Check if ID is in the range 32-55
        if [[ $ID -ge 32 && $ID -le 55 ]]; then
            # Move the file to the new directory
            # NEW_DIR="${DIR_SOURCE}/moved"
            # mkdir -p "$NEW_DIR"
            # mv "$FILE" "$NEW_DIR/"
            echo "$FILE with $ID"
            mv "$FILE" "${DIR_SOURCE}/instructor/"
        fi
    else
        echo "No sidebar position found: $FILE"
    fi
done