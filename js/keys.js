console.log('this is loaded');
var Twitter = require("twitter");

twitterKeys = new Twitter ({
  consumer_key: 'yFDhSyKsCV82SGrk7MHXHUq6S',
  consumer_secret: 'vb78NuEivAVgkluqGbeZ033p12l7FvP2v6f4kxNv1ssXnNv1GM',
  access_token_key: '923007877966712832-aVD9ozOm3qEWdryfOFYe7Pwezkehelm',
  access_token_secret: '6B70Pt2Q6yrpK612fwtdQ3sx9o3WwZInFp569F6avFcxq',
})

module.exports = twitterKeys;