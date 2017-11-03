var keysJS = require("./keys.js");
var inquirer = require("inquirer");
var request = require("request");
var fs = require("fs");

var client = twitterKeys;

var arg = process.argv[2];

//my-tweets: displays last 20 tweets
if (arg === "my-tweets") {
	var params = {
		screen_name: 'head_puppet'
		};

		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			for (var i = 19; i >= 0; i--) {
			console.log(tweets[i].text + ", " + tweets[i].created_at);
			}
		}
	});
//spotify-this-song
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
// movie-this: omdb
} else if (arg === "movie-this") {
	var arg3 = process.argv[3];
	var movieInput = process.argv;
	var anotherArg = process.argv.slice(3).join(" ");
	var queryUrl = "http://www.omdbapi.com/?t=" + anotherArg + "&y=&plot=short&apikey=40e9cece";

	request(queryUrl, function(error, response, body) {
		if (! error && response.statusCode === 200 && arg3 !== undefined) {
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Year of Release: " + JSON.parse(body).Year);
			console.log("iMDb Rating: " + JSON.parse(body).imdbRating);
			console.log("Rotten Tomatoes Score: " + JSON.parse(body).Ratings[1].Value);
			console.log("Country: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot Summary: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
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
// do-what-it-says: accesses information in random.txt
} else if (arg === "do-what-it-says") {

	fs.readFile("../random.txt", "utf8", function(err, data) {

		if (err) {
			return console.log("err");
		}

		var dataArr = data.split(", ");

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
// if no process.argv[2] is entered
} else {
	console.log("please enter my-tweets, spotify-this-song, movie-this, or do-what-it-says!");
}

