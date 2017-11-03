var keysJS = require("./keys.js");
var inquirer = require("inquirer");
// var twitter = require("twitter");
var request = require("request");
// var Spotify = require("node-spotify-api");
var fs = require("fs");

var client = twitterKeys;

//4 keys
// for (var key in twitterKeys) {
//   console.log("A " + key + " band is " + twitterKeys[key] + ".");
// }

var arg = process.argv[2];


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
	var oneWordSong = process.argv[3];
	var songInput = process.argv;
	var multiWordSong = process.argv.slice(3).join(" ");
	var noSong = "The Sign";

	if (oneWordSong !== undefined) {
		spotify.search({ type: 'track', query: multiWordSong }, function(err, data) {
				if (err) {
				return console.log('Error occurred: ' + err);
				}

			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Song Title: " + data.tracks.items[0].name);
			console.log("Preview URL: " + data.tracks.items[0].preview_url);
			console.log("Album: " + data.tracks.items[0].album.name);
		});
	} else {
		spotify.search({ type: 'track', query: noSong }, function(err, data) {
				if (err) {
				return console.log('Error occurred: ' + err);
				}

			console.log("Artist: " + data.tracks.items[8].artists[0].name);
			console.log("Song Title: " + data.tracks.items[8].name);
			console.log("Preview URL: " + data.tracks.items[8].preview_url);
			console.log("Album: " + data.tracks.items[8].album.name);
		});
	}

//omdb
} else if (arg === "movie-this") {
	var arg3 = process.argv[3];
	var movieInput = process.argv;
	var anotherArg = process.argv.slice(3).join(" ");
	var queryUrl = "http://www.omdbapi.com/?t=" + anotherArg + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		if (! error && response.statusCode === 200 && arg3 !== undefined) {
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
	if (arg3 === undefined) {
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

	fs.readFile("../random.txt", "utf8", function(err, data) {

		if (err) {
			return console.log("err");
		}

		var dataArr = data.split(", ");

		for (var i = 0; i < dataArr.length; i++) {
			console.log(dataArr[i]);
		}

		arg = dataArr[0];
		var bsb = dataArr[1];

		spotify.search({ type: 'track', query: bsb }, function(err, data) {
				if (err) {
				return console.log('Error occurred: ' + err);
				}

			console.log("Artist: " + data.tracks.items[0].artists[0].name);
			console.log("Song Title: " + data.tracks.items[0].name);
			console.log("Preview URL: " + data.tracks.items[0].preview_url);
			console.log("Album: " + data.tracks.items[0].album.name);
		})

	})

} else {
	console.log("please enter my-tweets, spotify-this-song, movie-this, or do-what-it-says!");
}

//do-what-it-says


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