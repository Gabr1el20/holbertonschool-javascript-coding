#!/usr/bin/node
const request = require('request');
const apiUrl = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(apiUrl, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const movie = JSON.parse(body);
  movie.characters.forEach(character => {
    request.get(character, (err, response, body) => {
      if (err) {
        console.log(err);
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  });
});
