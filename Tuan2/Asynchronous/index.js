"use strict";

function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Lỗi! (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const city = data.city;
      const country = data.country;

      console.log(`You are in ${city}, ${country}`);
    })
    .catch((err) => {
      console.error(`Error: ${err.message}`);
    });
}

whereAmI(52.508, 13.381);
