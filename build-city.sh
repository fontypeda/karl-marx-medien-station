#!/bin/bash

## Automatic compilation of media stations

if [ -z $1 ]; then
  echo "You have to pass at least one argument!"
  exit 1
fi

while [ ! -z $1 ]; do
  city=$1
  figlet "Building $city"

  figlet "Preparing data..."
  # Copy the style variable
  cp data/common-vars-$city.scss src/common-vars.scss

  # read and write the data
  cd data/
  python3 write-biographies.py
  python3 write-biography-selection.py $city
  python3 write-letters.py $city
  python3 write-city-portrait.py $city
  python3 write-sources.py $city

  figlet "Copying zoom-images and xml"
  echo "Removing current content"
  rm -rf ../src/assets/archive/*
  echo $(pwd)
  echo "Copying xml..."
  ls "archive/cities/"$city"/"*xml
  cp "archive/cities/"$city"/"*xml ../src/assets/archive/
  echo "Copying file directories..."
  cp -R "archive/cities/"$city"/"*_files ../src/assets/archive/
  figlet "Compiling to localhost..."
  # Compile to localhost for testing
  cd ../
  ng build --prod \
    --output-path="/var/www/html/km-medien/"$city \
    --base-href="/km-medien/"$city"/"
  shift 1

done
