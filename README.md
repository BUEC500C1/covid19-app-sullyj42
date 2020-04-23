# covid19-app-sullyj42

# Application Demo
-- https://youtube.com/watch?v=9BPFAY0EvhM&t=0m42s

# Summary
This repository contains React-Native files for Assignment 7 of EC500, Boston University, Spring 2020

---
Update: April 20, 2020
# Maps

Implimented a simple maps utility.

Currently brings up a simple set of screens to show a map and (in the future) select the type of covid data to overlay

Screens: 
-- Map: Display a google map. Allow some user selection of overlaid data (currently implimented date)
-- MapSettings: Change settigns for the map. Currently unused
-- -- May be useful as an intermediate before overlaying more advanced features onto Map
-- Data: More in-depth screen to interface with Covid data available
-- -- Not yet implimented (beginning to explore this in the next step, in seperate repo)

---
# COVID

Application was developed during the 2020 COVID-19 Pandemic. As such, Covid provided an interesting use-case, with significant data available. 

## Data resources
Covid data was obtained through the (XX) API, which in turn wraps around the John Hopkins AWS resource. 

Map data was obtained through react-native-maps, calling Google Maps under the hood

Flag data was obtained from the web resource (XX)

Country population and population density was scaled by 

## Known bugs
There are a number of different JSON files referenced which could (should) be combined.

- Currently using as the key-parameter for most lookups, which does not always take (See United States in Video)
- The XX API provides country-names, which are somewhat ambigious. 
-- There is a request to return country-name / abbreviation pairings, this dictionary should be implimented


# Update 4/21/20

Pulling information from various JSON files, was able to hobble together a decent app.

Plenty of things that could be improved upon
-- Provide multiple possible country names to match to
-- See "United States of America" debacle in the video
-- -- Also note, US does not show up in the Map

-- Impliment filters for the Map screen (currently a huge amount of data on the screen)

-- Actually use the data-filter on the map screen

-- Allow data normalization by certain fields (population density, etc) to tease out correlations

And so on
