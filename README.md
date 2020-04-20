# covid19-app-sullyj42
This repository contains Flask files for Assignment 7 of EC500, Boston University, Spring 2020

Initially, this will mostly contain the folder for the Udemy course detailing the basics of 

Once that course is partially completed, I will add new folders to detail the assignment completion

Once that is done, I will refactor into the proper branches (Map, PostMan Covid)

---
Update: April 20, 2020

Implimented a simple maps utility.

Currently brings up a simple set of screens to show a map and (in the future) select the type of covid data to overlay

Screens: 
-- Map: Display a google map. Allow some user selection of overlaid data (currently implimented date)
-- MapSettings: Change settigns for the map. Currently unused
-- -- May be useful as an intermediate before overlaying more advanced features onto Map
-- Data: More in-depth screen to interface with Covid data available
-- -- Not yet implimented (beginning to explore this in the next step, in seperate repo)

---
Update: April 20, 2020

COVID API will need some wrapping to be useful

Should probably associate countries with current region of interest from map

Then iterate over country and date to get data for that country

If we want data from a range of dates, need to sum the values for display

- This will require us to create a new .json file to associate countries with...
- 1. Their physical location (if inside the map)
- 2. Some sort of ID (Country code?)
- 3. Population will be useful for per-capita estimates
- 3. a. Ignore time varying population for now
- 3. b. Future development could add this feature

