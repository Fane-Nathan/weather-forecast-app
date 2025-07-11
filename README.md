# European Weather Forecast

A simple and elegant web application that provides a 7-day weather forecast for major European cities. Users can either select a city from a curated list or enter custom latitude and longitude coordinates to get up-to-date weather information.

This project was built with modern web technologies and demonstrates proficiency in HTML, CSS, and JavaScript for creating a responsive, interactive, and user-friendly experience.

**Live Demo:** [https://fane-nathan.github.io/weather-forecast-app/](https://fane-nathan.github.io/weather-forecast-app/)

## Features

*   **7-Day Forecast**: Get a full week's weather forecast to plan your trips effectively.
*   **City Selection**: Easily select from a dropdown of major European cities.
*   **Custom Coordinates**: Flexibility to get weather data for any location by entering its latitude and longitude.
*   **Today's Weather at a Glance**: A special card highlights the current day's weather, including max/min temperatures and wind conditions.
*   **Dark/Light Theme**: A theme toggler that respects user's system preference and saves their choice in local storage.
*   **Responsive Design**: The layout is fully responsive and looks great on desktops, tablets, and mobile devices.
*   **Dynamic UI**: The interface provides clear loading and error states for a smooth user experience.
*   **Interactive Elements**: Hover effects on the forecast cards reveal more details.

## How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Fane-Nathan/weather-forecast-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd weather-forecast-app
    ```
3.  **Open the `index.html` file in your web browser.**
    You can do this by right-clicking the file and selecting "Open with..." or by using a live server extension in your code editor.

## Technologies Used

*   **HTML5**: For the structure and content of the web page.
*   **CSS3**: For styling, layout, and responsiveness.
    *   **CSS Variables**: Used extensively for easy theming (dark/light modes).
    *   **CSS Grid & Flexbox**: For creating a modern, responsive layout.
*   **Vanilla JavaScript**: For all the business logic, DOM manipulation, and interactivity.
    *   **Fetch API**: For making asynchronous calls to the weather service.
    *   **Async/Await**: For handling asynchronous operations in a clean and readable way.
*   **7Timer! API**: The free weather API used to source the forecast data.
