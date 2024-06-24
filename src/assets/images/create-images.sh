#!/bin/bash
cd "$(dirname "$0")"

IMAGES_DIR="./Img"

# Zapisz nagłówek do pliku Images.ts
echo "import { StaticImageData } from \"next/image\";" > Images.ts

# Dodaj importy dla wszystkich obrazów
for IMAGE_PATH in $IMAGES_DIR/*
do
  if [ -f "$IMAGE_PATH" ]; then
    FILENAME=$(basename -- "$IMAGE_PATH")
    FILENAME_NO_EXT="${FILENAME%.*}"

    echo "import $FILENAME_NO_EXT from \"./Img/$FILENAME\";" >> Images.ts
  fi
done

# Dodaj typ i eksport do pliku Images.ts
echo "
type Images = Record<string, Readonly<StaticImageData>>;

export const images: Images = {" >> Images.ts

# Dodaj obiekty do eksportu
for IMAGE_PATH in $IMAGES_DIR/*
do
  if [ -f "$IMAGE_PATH" ]; then
    FILENAME=$(basename -- "$IMAGE_PATH")
    FILENAME_NO_EXT="${FILENAME%.*}"

    echo "  \"$FILENAME_NO_EXT\": $FILENAME_NO_EXT," >> Images.ts
  fi
done

# Zakończ eksport
echo "};" >> Images.ts
