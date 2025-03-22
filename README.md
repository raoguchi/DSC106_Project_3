# 📊 DSC106 Project 3 Summary: Visualizing MLB Pitching Data

🎯 Objective
The goal of this project was to create an interactive data visualization of MLB pitcher Shota Imanaga's pitch data using D3.js, focusing on pitch type, location, and attributes across different game dates.

📁 Files Used
 * imanaga.json: Raw pitch-by-pitch data from Baseball Savant for Shota Imanaga (including pitch type, speed, spin rate, and location).

* scatterplot.js: D3.js code to render an interactive scatterplot of pitch locations.

* index.html: HTML structure for the visualization interface.

* style.css: Styling for the webpage elements and tooltip info.

* baseball_data.ipynb: Jupyter Notebook used for initial data exploration and/or preprocessing.

* README.md: Project description and context.


## 📋 Data Preview

<h2>🧾 Sample Pitch DataFrame (Full Scouting Data)</h2>
<div style="overflow-x:auto;">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>pitch_type</th>
      <th>game_date</th>
      <th>release_speed</th>
      <th>release_pos_x</th>
      <th>release_pos_z</th>
      <th>player_name</th>
      <th>batter</th>
      <th>pitcher</th>
      <th>events</th>
      <th>description</th>
      <th>...</th>
      <th>n_thruorder_pitcher</th>
      <th>n_priorpa_thisgame_player_at_bat</th>
      <th>pitcher_days_since_prev_game</th>
      <th>batter_days_since_prev_game</th>
      <th>pitcher_days_until_next_game</th>
      <th>batter_days_until_next_game</th>
      <th>api_break_z_with_gravity</th>
      <th>api_break_x_arm</th>
      <th>api_break_x_batter_in</th>
      <th>arm_angle</th>
    </tr>
  </thead>
  <tbody>
    <tr><th>0</th><td>FF</td><td>2025-03-18</td><td>92.3</td><td>2.63</td><td>5.41</td><td>Imanaga, Shota</td><td>624424</td><td>684007</td><td>field_out</td><td>hit_into_play</td><td>...</td><td>2</td><td>1</td><td>NaN</td><td>NaN</td><td>NaN</td><td>1.0</td><td>1.23</td><td>1.14</td><td>1.14</td><td>NaN</td></tr>
    <tr><th>1</th><td>ST</td><td>2025-03-18</td><td>79.6</td><td>2.96</td><td>5.25</td><td>Imanaga, Shota</td><td>624424</td><td>684007</td><td>NaN</td><td>ball</td><td>...</td><td>2</td><td>1</td><td>NaN</td><td>NaN</td><td>NaN</td><td>1.0</td><td>3.29</td><td>-1.23</td><td>-1.23</td><td>NaN</td></tr>
    <tr><th>2</th><td>FS</td><td>2025-03-18</td><td>83.6</td><td>2.70</td><td>5.30</td><td>Imanaga, Shota</td><td>571771</td><td>684007</td><td>field_out</td><td>hit_into_play</td><td>...</td><td>2</td><td>1</td><td>NaN</td><td>NaN</td><td>NaN</td><td>1.0</td><td>2.80</td><td>1.04</td><td>-1.04</td><td>NaN</td></tr>
    <tr><th>3</th><td>FS</td><td>2025-03-18</td><td>81.9</td><td>2.67</td><td>5.27</td><td>Imanaga, Shota</td><td>571771</td><td>684007</td><td>NaN</td><td>swinging_strike</td><td>...</td><td>2</td><td>1</td><td>NaN</td><td>NaN</td><td>NaN</td><td>1.0</td><td>3.07</td><td>1.30</td><td>-1.30</td><td>NaN</td></tr>
    <tr><th>4</th><td>FF</td><td>2025-03-18</td><td>91.0</td><td>2.66</td><td>5.34</td><td>Imanaga, Shota</td><td>571970</td><td>684007</td><td>walk</td><td>ball</td><td>...</td><td>2</td><td>1</td><td>NaN</td><td>NaN</td><td>NaN</td><td>1.0</td><td>1.35</td><td>0.65</td><td>0.65</td><td>NaN</td></tr>
  </tbody>
</table>
<p>5 rows × 113 columns</p>
</div>

<h2>🎯 Pitch Plot Data (Used in D3.js Visualization)</h2>
<div style="overflow-x:auto;">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>game_date</th>
      <th>pitch_type</th>
      <th>plate_x</th>
      <th>plate_z</th>
      <th>effective_speed</th>
      <th>release_spin_rate</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><th>0</th><td>2025-03-18</td><td>FF</td><td>0.08</td><td>3.00</td><td>91.8</td><td>2572.0</td><td>hit_into_play</td></tr>
    <tr><th>1</th><td>2025-03-18</td><td>ST</td><td>-0.47</td><td>1.29</td><td>79.1</td><td>2540.0</td><td>ball</td></tr>
    <tr><th>2</th><td>2025-03-18</td><td>FS</td><td>-0.17</td><td>2.34</td><td>NaN</td><td>1200.0</td><td>hit_into_play</td></tr>
    <tr><th>3</th><td>2025-03-18</td><td>FS</td><td>0.81</td><td>1.17</td><td>81.2</td><td>1128.0</td><td>swinging_strike</td></tr>
    <tr><th>4</th><td>2025-03-18</td><td>FF</td><td>-0.31</td><td>3.47</td><td>90.0</td><td>2336.0</td><td>ball</td></tr>
    <tr><th>...</th><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><th>2812</th><td>2024-04-01</td><td>FS</td><td>0.53</td><td>1.35</td><td>84.0</td><td>1010.0</td><td>swinging_strike</td></tr>
    <tr><th>2813</th><td>2024-04-01</td><td>FF</td><td>0.15</td><td>3.61</td><td>92.6</td><td>2505.0</td><td>foul</td></tr>
    <tr><th>2814</th><td>2024-04-01</td><td>FF</td><td>-0.06</td><td>2.85</td><td>92.5</td><td>2382.0</td><td>hit_into_play</td></tr>
    <tr><th>2815</th><td>2024-04-01</td><td>FF</td><td>-1.30</td><td>3.26</td><td>93.7</td><td>2552.0</td><td>ball</td></tr>
    <tr><th>2816</th><td>2024-04-01</td><td>FF</td><td>0.21</td><td>2.32</td><td>91.8</td><td>2517.0</td><td>called_strike</td></tr>
  </tbody>
</table>
<p>2817 rows × 7 columns</p>
</div>

***


📌 Features Implemented
1. Interactive Pitch Scatterplot
* Built with D3.js and rendered within a 400x400 SVG canvas.

* Each pitch is displayed as a colored dot, with color representing pitch type (e.g., FF for Four Seamer).

Tooltip on hover shows:

 * Effective Speed

 * Spin Rate

 * Pitch Type

2. Strike Zone Box
* A black rectangle outlines the strike zone using D3 coordinate mapping.

3. Date Filtering Dropdown
* Dynamically populated dropdown for selecting a game date.

* Filtering the scatterplot to only show pitches from a specific date or "All" by default.

4. Pitch Type Key Table
* HTML table showing abbreviations and full names of all pitch types used.

5. Styling
* Fonts and layout styled to reflect MLB branding using style.css.

* Clean and minimal interface for improved readability and interaction.

🛠 Technologies
* D3.js (v7)

* HTML/CSS

* JavaScript

* JSON

* Baseball Savant Data

* Jupyter Notebook (Python) for initial exploration.

🔗 Resources
* Pitch data sourced from BaseballSavant.com