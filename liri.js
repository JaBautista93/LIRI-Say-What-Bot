require("dotenv").config();
var Spotify = require('node-spotify-api');


//-------------------VARIABLES----------------------------------------------------

//Loading modules
//var spotify = require('spotify');
var request = require('request');
var fs = require('fs');
var keys = require("./keys");
var inputCommand = process.argv[2];
var commandParam = process.argv[3];
var defaultMovie = "Robocop";
var defaultSong = "Smooth Criminal";

var tmdbKey = 'e6170ea7'


// // SPOTIFY KEY VARIABLES
// var spotifykeys = keys.spotifykeys;

//var spotify = new Spotify(keys.spotify);





//-----------------------FUNCTIONS-----------------------------------------------

//This function processes the input commands, allows the user to swtich through commandsa & break without running them all
function processCommands(command, commandParam) {

	//console.log(commandParam);

	switch (command) {

		case 'concert-this':
			// If user has not specified an event, use default
			if (commandParam === underfined) {
				commandParam = defaultEvent;
			}
			concertThis(commandParam);
			break;

		case 'spotify-this-song':
			//If user has not specified a song , use default
			if (commandParam === undefined) {
				commandParam = defaultSong;
			}
			spotifyThis(commandParam);
			break;

		case 'movie-this':
			//If user has not specified a movie Name , use default
			if (commandParam === undefined) {
				commandParam = defaultMovie;
			}
			movieThis(commandParam);
			break;

		case 'do-what-it-says':
			doWhatItSays();
			break;
		default:
			console.log("Invalid command. Please type any of the following commnds: concert-this spotify-this-song movie-this or do-what-it-says");
	}
}

// Make it so liri.js can take in one of the following commands: concert-this
function concertThis() {
	if (Event === "") {
		Events = "Coheed and Cambria";
	}

	vvar Events = new BandsInTownEvents();

	//set options for instance
	//app_id and artists are required
	Events.setParams({
		"app_id": "myappname", //can be anything
		"artists": [ //accepts string for single artist or an array of artist names
			"Wilco",
			"Yeah Yeah Yeahs"
		]
	});

	//get your events with success and error callbacks
	Events.getEvents(function (events) {
		for (var i = 0; i < events.length; i++) {
			console.log(events[i].venue.city + ", " + events[i].venue.region);
		}
	}, function (errors) {
		console.log(errors);
	});
	var Events = data.events[0];
	console.log("------Name of the venue-----");
	console.log();

	console.log("------Venue location-----");
	console.log();

	console.log("------Date of the Event -----");
	console.log(); 



			// //setParams - set a group of parameters as an object
			// //these will merge with the currently set params
			// bitGet.setParams(obj);

			// //setParam - set a new single parameter as key, value pair
			// Events.setParam(key, value);

			// //getParams - get the currently set parameters
			// var params = Events.getParams();
			// console.log(params);

			// //unsetParam - unset a parameter that you previously set by key
			// Events.unsetParam(key);

	// node liri.js concert-this <artist/band name here>

	


	function spotifyThis(song) {

		//If user has not specified a song , default to "Thriller" 
		if (song === "") {
			song = "Thriller";
		}
		//this comes from NPM Site
		var spotify = new Spotify({
			id: '541acfa47074408cb4a1c636cf0b5ead',
			secret: '2d61c12521254f6589701d9aff7653f9',
		});

		spotify.search({
			type: 'track',
			query: song
		}, function (err, data) {
			if (err) {
				return console.log('Error occurred: ' + err);
			}

			console.log(data);
		});

		// var data = data.tracks.items[0];
		console.log("------Artists-----");
		console.log(data.tracks.artists);


		console.log("------Song Name-----");
		console.log(song);

		console.log("-------Preview Link-----");
		console.log(data.tracks.External_URL);

		console.log("-------Album-----");
		console.log(data.tracks.album);
	}

	function movieThis(movieName) {

		console.log(movieName);

		request("http://www.omdbapi.com/?apikey=" + tmdbKey + "&t=" + movieName, function (error, response, body) {

			// If there were no errors and the response code was 200 (i.e. the request was successful)...
			if (!error && response.statusCode === 200) {

				//console.log(JSON.parse(body));

				//Get the Movie ID
				//var movieID = JSON.parse(body).results[0].id;
				//console.log(movieID);

				//Create new query using the movie ID
				var queryURL = "http://www.omdbapi.com/?apikey=" + tmdbKey + "&t=" + movieName + "&append_to_response=credits,releases";

				request(queryURL, function (error, response, body) {
					var movieObj = JSON.parse(body);

					console.log("--------Title of the movie-----------");
					console.log(movieObj.Title);

					console.log("--------Year the movie came out -----------");
					console.log(movieObj.Year);

					console.log("--------Rating-----------");
					console.log(movieObj.Ratings);

					console.log("--------Genre-----------");
					console.log(movieObj.Genre);

					console.log("--------Languages-----------");
					console.log(movieObj.Language);

					console.log("--------Plot----------------");
					console.log(movieObj.Plot);

					console.log("--------Actors-----------");
					console.log(movieObj.Actors);

				})
			}
			// 		else {
			// 	console.log(error);
			// }
		});
	}

	function doWhatItSays() {
		fs.readFile('random.txt', 'utf8', function (err, data) {

			if (err) {
				return console.log(err);
			}

			var dataArr = data.split(',');

			processCommands(dataArr[0], dataArr[1]);
		});
	}



	//-------------------------MAIN PROCESS-------------------------------------------

	processCommands(inputCommand, commandParam);