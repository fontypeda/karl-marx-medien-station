#!/bin/bash

## Automatic compilation of media stations
BUILD_LOCAL_HOST=0
BUILD_ZIP_FILE=0

TMP_DIR="/tmp/km-medien/"

while getopts ":lzc:" opt; do
  case $opt in
    l)
      BUILD_LOCAL_HOST=1
      ;;
    z)
      BUILD_ZIP_FILE=1
      ;;
    c)
      city=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done

if [ -z $city ]; then
  echo "Error: The -c option must be set"
  echo "Usage: "
  echo "bash build-city -c london"
  echo "Exiting..."
  exit 1
fi

# if [ -z $1 ]; then
#   echo "You have to pass at least one argument!"
#   exit 1
# fi

echo $BUILD_LOCAL_HOST
echo $BUILD_ZIP_FILE

if [ ! -d zipfiles ]; then
  mkdir zipfiles
fi


figlet "Building $city"

figlet "Preparing data..."
# Copy the style variable
cp data/common-vars-$city.scss src/common-vars.scss
# Overwrite the house value
city_color=$(grep "primary-color" src/common-vars.scss | head -n 1 | cut -d"#" -f2 | cut -d";" -f1)
echo $city_color
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

cd ../

# Compile to localhost for testing (if -l option set)
if [ $BUILD_LOCAL_HOST -eq 1 ]; then
  figlet "Compiling to localhost..."
  ng build --prod \
    --output-path="/var/www/html/km-medien/"$city \
    --base-href="/km-medien/"$city"/"
fi

# zip file (if -z option set)
if [ $BUILD_ZIP_FILE -eq 1 ]; then
  figlet "Compiling for zip file..."
  if [ ! -d $TMP_DIR ]; then
    mkdir $TMP_DIR
  fi
  if [ -f $TMP_DIR"/"$city".zip" ]; then
    rm $TMP_DIR"/"$city".zip"
  fi
  
  ng build --prod \
    --output-path=$TMP_DIR"/"$city
  cp autorun.brs $TMP_DIR"/"$city"/"
  cd $TMP_DIR"/"$city
  zip -r "../"$city".zip" .
  cd -
  cp $TMP_DIR"/"$city".zip" zipfiles/
fi
