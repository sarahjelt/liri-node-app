var keysJS = require("./keys.js");
var inquirer = require("inquirer");
var twitter = require("twitter");
var request = require("request");
var spotify = require("node-spotify-api");
var fs = require("fs");

var client = twitterKeys;

//4 keys
// for (var key in twitterKeys) {
//   console.log("A " + key + " band is " + twitterKeys[key] + ".");
// }

var arg = process.argv[2];
var anotherArg = process.argv[3];


//twitter
if (arg === "my-tweets") {
	var params = {
		screen_name: 'head_puppet'
		// count: 1
		};

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			// console.log(tweets);
			for (var i = 19; i >= 0; i--) {
			console.log(tweets[i].text + ", " + tweets[i].created_at);
			}
		}
	});
//spotify
} else if (arg === "spotify-this-song") {
	
//omdb
} else if (arg === "movie-this") {
	var queryUrl = "http://www.omdbapi.com/?t=" + anotherArg + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		if (! error && response.statusCode === 200 && anotherArg !== undefined) {
			console.log(JSON.parse(body).Title);
			console.log(JSON.parse(body).Year);
			console.log(JSON.parse(body).imdbRating);
			console.log(JSON.parse(body).Ratings[1].Value);
			console.log(JSON.parse(body).Country);
			console.log(JSON.parse(body).Language);
			console.log(JSON.parse(body).Plot);
			console.log(JSON.parse(body).Actors);
		}
	})
	if (anotherArg === undefined) {
		queryUrl = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=40e9cece"
		request(queryUrl, function(error, response, body) {
		if (! error && response.statusCode === 200) {
			console.log(JSON.parse(body).Title);
			console.log(JSON.parse(body).Year);
			console.log(JSON.parse(body).imdbRating);
			console.log(JSON.parse(body).Ratings[1].Value);
			console.log(JSON.parse(body).Country);
			console.log(JSON.parse(body).Language);
			console.log(JSON.parse(body).Plot);
			console.log(JSON.parse(body).Actors);
		}
	})
	}
//random.txt
} else if (arg === "do-what-it-says") {

} else {
	console.log("please enter my-tweets, spotify-this-song, movie-this, or do-what-it-says!");
}



//inquirer
// inquirer
// 	.prompt([
// 	{
// 		type: "list",
// 		message: "Choose a command",
// 		choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
// 		name: "choices"
// 	}
// 	])
// 	.then(function(inquirerResponse) {
// 		if (inquirerResponse.choices === "movie-this") {
// 			console.log("\nHey " + inquirerResponse.username);
// 			console.log("Your " + inquirerResponse.choices + " is ready for " + inquirerResponse.checkone + "\n");
// 		}
// 		var params = {screen_name: 'head_puppet'};
// 		twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
// 		if (!error) {
// 		console.log(tweets);
// 		}
// 	});
// });

// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says