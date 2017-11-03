// console.log('this is loaded');
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");


twitterKeys = new Twitter ({
  consumer_key: 'yFDhSyKsCV82SGrk7MHXHUq6S',
  consumer_secret: 'vb78NuEivAVgkluqGbeZ033p12l7FvP2v6f4kxNv1ssXnNv1GM',
  access_token_key: '923007877966712832-aVD9ozOm3qEWdryfOFYe7Pwezkehelm',
  access_token_secret: '6B70Pt2Q6yrpK612fwtdQ3sx9o3WwZInFp569F6avFcxq',
})

spotify = new Spotify({
	id: '50d5b4bc89dd4fc09e931b1d8e22d607',
	secret: '50c3120e141e4dd29682f36b9df2c6c1'
	});

module.exports = twitterKeys;
module.exports = spotify;
