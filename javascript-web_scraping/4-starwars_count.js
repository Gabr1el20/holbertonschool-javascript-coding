#!/usr/bin/node
const request = require('request');
const apiMovie = process.argv[2];
const apiWedge = 'https://swapi-api.hbtn.io/api/people/18/';
request.get(apiMovie, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  request.get(apiWedge, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    const data = JSON.parse(body);
    console.log(data.films.length);
  });
});
