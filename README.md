
This is a basic weather dashboard  that provide the weather related data for different cities across the world .The main content area is divided into four sections, each displaying specific weather metrics: temperature, weather condition, humidity, and wind speed. Each section includes an icon representing the weather metric, followed by the corresponding data fetched from the OpenWeatherMap API.

To enhance user experience, loading indicators are displayed while the application retrieves weather data, ensuring users are aware of ongoing data fetching processes. Additionally, default images are provided for weather conditions when specific images are unavailable.

When user enters the city name , data for respective city is fetch from Api  and is displayed on the screen.The city name changes dynamically with the data and the weather image also   change based on specific weather condition. Initially,it displays data for London . when data for particular city is fetched from Api , a message is displayed  on console for successful fetching  along with  data .

If city name is invalid or the search bar is empty,it displays error message with N/A for the values to be fetched.
