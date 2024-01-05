#!/bin/bash
cd "$(dirname "$0")"

IMAGES_DIR="./Img"

echo "import { StaticImageData } from \"next/image\";

type Images = Record<string, Readonly<StaticImageData>>;

export const images = {" > Images.ts

for IMAGE_PATH in $IMAGES_DIR/*
do
  if [ -f "$IMAGE_PATH" ]; then
    FILENAME=$(basename -- "$IMAGE_PATH")
    FILENAME_NO_EXT="${FILENAME%.*}"

    echo "  \"$FILENAME_NO_EXT\": require(\"./Img/$FILENAME\")," >> Images.ts
  fi
done

echo "} satisfies Images;" >> Images.ts
