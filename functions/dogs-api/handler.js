"use strict";

const fecth = require("node-fetch");

module.exports.hello = async event => {
  const res = await fetch(
    "https://dog.ceo/api/breeds/image/random/3"
  ).then(res => res.json());

  console.log("hola");

  return {
    statusCode: 200,
    body: JSON.stringify(res, null, 2)
  };
};
