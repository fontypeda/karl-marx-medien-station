#!/bin/bash

cities="trier bonnberlin koeln paris manchester bruessel london"

for city in $cities; do
  bash build-city.sh $city
done
