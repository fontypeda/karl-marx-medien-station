#!/bin/bash

if [ ! -z $1 ]; then
  OPTIONS=$1;
fi

cities="trier bonnberlin koeln paris manchester bruessel london"

for city in $cities; do
  bash build-city.sh -c $city $OPTIONS
done
