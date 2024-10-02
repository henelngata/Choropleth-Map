# US Educational Attainment Choropleth Map

## Project Overview

This project is a choropleth map visualization of educational attainment in the United States. It displays the percentage of adults age 25 and older with a bachelor's degree or higher for each county, based on data from 2010-2014.

The map is built using HTML, CSS, JavaScript, and the D3.js library, fulfilling the requirements of the FreeCodeCamp Data Visualization Certification.

## Features

- Interactive choropleth map of the United States
- Color-coded counties based on educational attainment percentages
- Tooltip displaying detailed information for each county on hover
- Legend explaining the color scale
- Responsive design for various screen sizes

## Data Sources

The project uses two main data sources:

1. US Education Data: https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json
2. US County Data: https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json

## Project Structure

- `index.html`: The main HTML file that structures the web page
- `styles.css`: CSS file for styling the choropleth map and page layout
- `script.js`: JavaScript file containing the D3.js code to create the choropleth map

## How to Run

1. Clone this repository to your local machine.
2. Due to CORS restrictions, you'll need to serve the files from a local web server. You can use one of the following methods:
   - Python 3: Run `python -m http.server` in the project directory
   - Python 2: Run `python -m SimpleHTTPServer` in the project directory
   - Use a local development server of your choice (e.g., Live Server extension for VS Code)
3. Open a web browser and navigate to `http://localhost:8000` (or the appropriate port for your server).

## User Stories

This project fulfills the following user stories:

1. The choropleth has a title with `id="title"`.
2. The choropleth has a description element with `id="description"`.
3. The choropleth uses counties with `class="county"` to represent the data.
4. There are at least 4 different fill colors used for the counties.
5. Each county has `data-fips` and `data-education` properties containing their corresponding fips and education values.
6. The choropleth has a county for each provided data point.
7. The counties have `data-fips` and `data-education` values that match the sample data.
8. The choropleth has a legend with `id="legend"`.
9. There are at least 4 different fill colors used for the legend.
10. You can mouse over an area and see a tooltip with `id="tooltip"` which displays more information about the area.
11. The tooltip has a `data-education` property that corresponds to the data-education of the active area.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- D3.js (version 7)
- TopoJSON

## Testing

This project includes the FreeCodeCamp test suite. To run the tests:

1. Open the project in a web browser.
2. Select the "FreeCodeCamp" dropdown menu in the top left corner.
3. Click "Data Visualization Projects" to run the test suite.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Data provided by FreeCodeCamp
- Inspired by the FreeCodeCamp Data Visualization Certification project
