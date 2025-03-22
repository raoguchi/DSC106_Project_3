# 📊 DSC106 Project 3 Summary: Visualizing MLB Pitching Data

🎯 Objective
The goal of this project was to create an interactive data visualization of MLB pitcher Shota Imanaga's pitch data using D3.js, focusing on pitch type, location, and attributes across different game dates.

📁 Files Used
imanaga.json: Raw pitch-by-pitch data from Baseball Savant for Shota Imanaga (including pitch type, speed, spin rate, and location).

scatterplot.js: D3.js code to render an interactive scatterplot of pitch locations.

index.html: HTML structure for the visualization interface.

style.css: Styling for the webpage elements and tooltip info.

baseball_data.ipynb: Jupyter Notebook used for initial data exploration and/or preprocessing.

README.md: Project description and context.

📌 Features Implemented
1. Interactive Pitch Scatterplot
Built with D3.js and rendered within a 400x400 SVG canvas.

Each pitch is displayed as a colored dot, with color representing pitch type (e.g., FF for Four Seamer).

Tooltip on hover shows:

Effective Speed

Spin Rate

Pitch Type

2. Strike Zone Box
A black rectangle outlines the strike zone using D3 coordinate mapping.

3. Date Filtering Dropdown
Dynamically populated dropdown for selecting a game date.

Filtering the scatterplot to only show pitches from a specific date or "All" by default.

4. Pitch Type Key Table
HTML table showing abbreviations and full names of all pitch types used.

5. Styling
Fonts and layout styled to reflect MLB branding using style.css.

Clean and minimal interface for improved readability and interaction.

🛠 Technologies
D3.js (v7)

HTML/CSS

JavaScript

JSON

Baseball Savant Data

Jupyter Notebook (Python) for initial exploration.

🔗 Resources
Pitch data sourced from BaseballSavant.com