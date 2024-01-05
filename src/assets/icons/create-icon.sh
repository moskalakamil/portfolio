#!/bin/bash
cd "$(dirname "$0")"


IFS=$'\n'
paths=($(find . -name "*.svg"))
unset IFS

echo "" > Icon.tsx

echo "import React from 'react';" >> Icon.tsx



for i in "${paths[@]}"
do
   file_name=$(basename "$i" .svg)  # Extract only the file name without the path and ".svg" extension
   file_name_lowercase=$(echo "$file_name" | sed -r 's/(^|-)(\w)/\U\2/g; s/-//g')  # Convert to lowercase and remove hyphens
   echo "import $file_name_lowercase from  '$i'" >> Icon.tsx
done

echo "" >> Icon.tsx
echo "const ICONS = {" >> Icon.tsx

for i in "${paths[@]}"
do
   file_name=$(basename "$i" .svg)  # Extract only the file name without the path and ".svg" extension
   file_name_lowercase=$(echo "$file_name" | sed -r 's/(^|-)(\w)/\U\2/g; s/-//g')  # Convert to lowercase and remove hyphens
   echo "$file_name_lowercase," >> Icon.tsx
done

echo "}" >> Icon.tsx

echo "
export type IconType = keyof typeof ICONS;

" >> Icon.tsx

echo "
interface IconProps {
    name: IconType;
    className?: string;
    color?: string;
    width?: string | number;
    height?: string | number;
    onClick?: () => void;
}
" >> Icon.tsx



echo "
const AppIcon = ({name, ...props}: IconProps) => {
    const CurrentIcon = ICONS[name]
    return <CurrentIcon {...props} />
}

export const Icon = React.memo(AppIcon);
" >> Icon.tsx
