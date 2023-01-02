class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    const tempSymbol = '\u00B0C';
    const degSymbol = '\u00B0';
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.string.textContent = `Temperature: ${weather.main.temp} ${tempSymbol}`;
    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} ${tempSymbol}`;
    this.dewpoint.textContent = `Wind Direction: ${weather.wind.deg} ${degSymbol}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} meters/sec`;
  }
}
