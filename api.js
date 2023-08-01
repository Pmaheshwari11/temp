exports.url = function (cityName) {
  var api =
    "https://api.weatherapi.com/v1/forecast.json?key=801d4e8982204c3fb9d72846231005&q=" +
    cityName +
    "&aqi=no";
  return api;
};
