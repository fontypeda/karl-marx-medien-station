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
  # Overwrite the house value
  city_color=$(grep "primary-color" data/common-vars-london.scss | head -n 1 | cut -d":" -f2 | cut -d";" -f1)
  python3 utils/rewrite-house.py "$city_color"
  # read and write the data
  cd data/
  python3 write-biographies.py
  python3 write-biography-selection.py $city
  python3 write-letters.py $city
  python3 write-city-portrait.py $city
  python3 write-sources.py $city

  figlet "Copying images"
  rm -rf ../src/assets/archive/*
  cp "archive/cities/"$city"/transformed/"*jpg ../src/assets/archive/
  figlet "Compiling to localhost..."
  # Compile to localhost for testing
  cd ../
  ng build --prod \
    --output-path="/var/www/html/km-medien/"$city \
    --base-href="/km-medien/"$city"/"
  shift 1

done

# Remove changes to data in vars
git checkout src/app/vars/*
