class Weather {
  constructor(city, state) {
    this.apikey = 'ceab29c70e6741e18ad0febeb02fb22e';
    this.city = city;
    this.state = state;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apikey}&units=metric`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
