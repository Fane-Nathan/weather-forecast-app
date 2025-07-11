document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const citySelect = document.getElementById('citySelect');
    const customLatInput = document.getElementById('customLat');
    const customLonInput = document.getElementById('customLon');
    const weatherForm = document.getElementById('weatherForm');
    const resultsContainer = document.getElementById('results-container');
    const submitButton = weatherForm.querySelector('button[type="submit"]');

    const cities = [ { city: "London", country: "United Kingdom", latitude: 51.5074, longitude: -0.1278 }, { city: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522 }, { city: "Berlin", country: "Germany", latitude: 52.5200, longitude: 13.4050 }, { city: "Madrid", country: "Spain", latitude: 40.4168, longitude: -3.7038 }, { city: "Rome", country: "Italy", latitude: 41.9028, longitude: 12.4964 }, { city: "Amsterdam", country: "Netherlands", latitude: 52.3676, longitude: 4.9041 }, { city: "Vienna", country: "Austria", latitude: 48.2082, longitude: 16.3738 }, { city: "Stockholm", country: "Sweden", latitude: 59.3293, longitude: 18.0686 }, { city: "Copenhagen", country: "Denmark", latitude: 55.6761, longitude: 12.5683 }, { city: "Helsinki", country: "Finland", latitude: 60.1699, longitude: 24.9384 }, { city: "Oslo", country: "Norway", latitude: 59.9139, longitude: 10.7522 }, { city: "Warsaw", country: "Poland", latitude: 52.2297, longitude: 21.0122 }, { city: "Prague", country: "Czech Republic", latitude: 50.0755, longitude: 14.4378 }, { city: "Budapest", country: "Hungary", latitude: 47.4979, longitude: 19.0402 }, { city: "Zurich", country: "Switzerland", latitude: 47.3769, longitude: 8.5417 }, { city: "Brussels", country: "Belgium", latitude: 50.8503, longitude: 4.3517 }, { city: "Dublin", country: "Ireland", latitude: 53.3498, longitude: -6.2603 }, { city: "Lisbon", country: "Portugal", latitude: 38.7223, longitude: -9.1393 }, { city: "Athens", country: "Greece", latitude: 37.9838, longitude: 23.7275 }, { city: "Barcelona", country: "Spain", latitude: 41.3851, longitude: 2.1734 } ];

    const getWeatherIcon = (weather) => { const iconMap = { "clear": `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`, "pcloudy": `<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="M22 10a4.5 4.5 0 0 0-8.2-2.5Q12.5 7.5 12 8T9.5 9.5a4.5 4.5 0 0 0 8.2 2.5Z" fill="#f59e0b" stroke="none"></path></svg>`, "mcloudy": `<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`, "cloudy": `<svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`, "lightrain": `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="M16 14v2"></path><path d="M12 16v2"></path><path d="M8 14v2"></path></svg>`, "rain": `<svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="M16 14v2m-4-2v4m-4-2v2"></path></svg>`, "snow": `<svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="M16 14l-2 2-2-2"></path><path d="M12 16V9"></path><path d="M12 9l2-2"></path><path d="M12 9l-2-2"></path><path d="M10 18l-2 2-2-2"></path><path d="M6 20V13"></path><path d="M6 13l2-2"></path><path d="M6 13l-2-2"></path></svg>`, "ts": `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="m13 11-4 6h6l-4 6"></path></svg>`, "tsrain": `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><path d="M12 13v4"></path><path d="m14 13-2 4h4l-2 4"></path></svg>`}; const key = Object.keys(iconMap).find(k => weather.includes(k)) || "cloudy"; return iconMap[key]; };
    const getRainyDayNote = () => { const notes = ["Don't forget an umbrella!", "A perfect day for a museum.", "Cozy indoor activities await."]; return notes[Math.floor(Math.random() * notes.length)]; };
    const getWindDescription = (speed) => { const descriptions = { 1: "Calm", 2: "Light", 3: "Moderate", 4: "Fresh", 5: "Strong", 6: "Gale", 7: "Storm", 8: "Hurricane" }; return descriptions[speed] || "N/A"; };

    const setTheme = (theme) => { document.body.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); themeToggle.checked = theme === 'dark'; };
    themeToggle.addEventListener('change', () => { const newTheme = themeToggle.checked ? 'dark' : 'light'; setTheme(newTheme); });
    const initializeTheme = () => { const savedTheme = localStorage.getItem('theme'); const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; if (savedTheme) { setTheme(savedTheme); } else if (prefersDark) { setTheme('dark'); } else { setTheme('light'); } };
    
    const populateCityDropdown = () => { cities.forEach(city => { const option = document.createElement('option'); option.value = `${city.latitude},${city.longitude}`; option.textContent = `${city.city}, ${city.country}`; citySelect.appendChild(option); }); };
    const fetchWeather = async (lat, lon) => { const apiUrl = `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civillight&output=json`; const response = await fetch(apiUrl); if (!response.ok) throw new Error(`Network response was not ok (status: ${response.status})`); return response.json(); };
    
    const displayForecast = (dataseries) => {
        resultsContainer.innerHTML = '';
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let todayData = null;
        const upcomingData = [];

        dataseries.forEach(day => {
            const dateStr = day.date.toString();
            const jsDate = new Date(`${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}T00:00:00`);
            if (jsDate.getTime() === today.getTime()) {
                todayData = { ...day, jsDate };
            } else if (jsDate > today) {
                upcomingData.push({ ...day, jsDate });
            }
        });

        if (todayData) {
            const isRainy = todayData.weather.includes('rain') || todayData.weather.includes('shower');
            const todayForecastEl = document.createElement('div');
            todayForecastEl.className = 'today-forecast';
            todayForecastEl.innerHTML = `
                <div class="today-card">
                    <div class="today-card-content">
                        <div class="icon">${getWeatherIcon(todayData.weather)}</div>
                        <div class="details">
                            <div class="day">Today</div>
                            <div class="temp">${todayData.temp2m.max}°C</div>
                            <div class="condition">${todayData.weather.replace(/day|night/, '')}</div>
                            ${isRainy ? `<div class="rainy-day-note">${getRainyDayNote()}</div>` : ''}
                        </div>
                    </div>
                    <div class="extra-details">
                        <div>Min: ${todayData.temp2m.min}°C</div>
                        <div>Wind: ${getWindDescription(todayData.wind10m_max)}</div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(todayForecastEl);
        }

        if (upcomingData.length > 0) {
            const upcomingForecastEl = document.createElement('div');
            upcomingForecastEl.className = 'upcoming-forecast';
            const upcomingGrid = document.createElement('div');
            upcomingGrid.className = 'upcoming-grid';

            upcomingData.forEach((day, index) => {
                const isRainy = day.weather.includes('rain') || day.weather.includes('shower');
                const card = document.createElement('div');
                card.className = 'weather-card';
                card.style.animationDelay = `${index * 60}ms`;
                card.innerHTML = `
                    <div class="day">${day.jsDate.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                    <div class="date">${day.jsDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                    <div class="icon">${getWeatherIcon(day.weather)}</div>
                    <div class="temp">${day.temp2m.max}°C</div>
                    <div class="condition">${day.weather.replace(/day|night/, '')}</div>
                    <div class="extra-details">
                        <div>Min: ${day.temp2m.min}°C</div>
                        <div>Wind: ${getWindDescription(day.wind10m_max)}</div>
                    </div>
                    ${isRainy ? `<div class="rainy-day-note">${getRainyDayNote()}</div>` : ''}
                `;
                upcomingGrid.appendChild(card);
            });
            
            upcomingForecastEl.innerHTML = `<h2>Upcoming Days</h2>`;
            upcomingForecastEl.appendChild(upcomingGrid);
            resultsContainer.appendChild(upcomingForecastEl);
        }
    };

    const showLoader = () => { resultsContainer.innerHTML = `<div class="message-container"><div class="loader"></div></div>`; };
    const showError = (message) => { resultsContainer.innerHTML = `<div class="message-container error"><strong>Error:</strong> ${message}</div>`; };
    const showInitialMessage = () => { resultsContainer.innerHTML = `<div class="message-container"><p>Your 7-day forecast will appear here.</p></div>`; };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let lat, lon;
        if (citySelect.value) { [lat, lon] = citySelect.value.split(',').map(Number); } 
        else if (customLatInput.value && customLonInput.value) { lat = parseFloat(customLatInput.value); lon = parseFloat(customLonInput.value); } 
        else { showError("Please select a city or enter valid coordinates."); return; }

        submitButton.disabled = true;
        submitButton.textContent = 'Loading...';
        showLoader();

        try {
            const weatherData = await fetchWeather(lat, lon);
            if (weatherData && weatherData.dataseries) {
                displayForecast(weatherData.dataseries);
            } else {
                showError("Could not retrieve valid forecast data.");
            }
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
            showError("Failed to connect to the weather service. Please try again later.");
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Get Forecast';
        }
    };

    weatherForm.addEventListener('submit', handleFormSubmit);
    citySelect.addEventListener('change', () => { if (citySelect.value) { customLatInput.value = ''; customLonInput.value = ''; } });
    [customLatInput, customLonInput].forEach(input => { input.addEventListener('input', () => { if (customLatInput.value || customLonInput.value) citySelect.value = ''; }); });

    initializeTheme();
    populateCityDropdown();
    showInitialMessage();
});
