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
			concertThis();
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
// function concertThis(){
// 	if 
// }

// var Events = new BandsInTownEvents();

//set options for instance
//app_id and artists are required
// Events.setParams({
// "app_id":"myappname", //can be anything
// "artists":[ //accepts string for single artist or an array of artist names
// 	"Wilco",
// 	"Yeah Yeah Yeahs"
// ]
// });

//get your events with success and error callbacks
// Events.getEvents(function( events ){
//   for(var i = 0; i < events.length; i++){
//     console.log( events[i].venue.city + ", " + events[i].venue.region );
//   }
// },function( errors ){
//   console.log(errors);
// });
// node liri.js concert-this <artist/band name here>


function spotifyThis(song) {

	//If user has not specified a song , default to "Thriller" imagine dragons
	if (song === "") {
		song = "Thriller";
	}
	//this comes from NPM Site
	var Spotify = require('node-spotify-api');

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
		// console.log("------Artists-----");
		// for (i = 0; i < song.artists.length; i++) {
		// 	console.log(song.artists[i].name);
		// }

		// console.log("------Song Name-----");
		// console.log(song.name);

		// console.log("-------Preview Link-----");
		// console.log(song.preview_url);

		// console.log("-------Album-----");
		// console.log(song.album.name);

	}

function movieThis(movieName) {

	console.log(movieName);

	request("https://api.themoviedb.org/3/search/movie?api_key=" + tmdbKey + "&query=" + movieName, function (error, response, body) {

		// If there were no errors and the response code was 200 (i.e. the request was successful)...
		if (!error && response.statusCode === 200) {

			//console.log(JSON.parse(body));

			//Get the Movie ID
			var movieID = JSON.parse(body).results[0].id;
			//console.log(movieID);

			//Create new query using the movie ID
			var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + tmdbKey + "&append_to_response=credits,releases";

			request(queryURL, function (error, response, body) {
				var movieObj = JSON.parse(body);

				console.log("--------Title-----------");
				console.log(movieObj.original_title);

				console.log("--------Year -----------");
				console.log(movieObj.release_date.substring(0, 4));

				console.log("--------Rating-----------");
				console.log(movieObj.releases.countries[0].certification);

				console.log("--------Country Produced-----------");
				for (i = 0, j = movieObj.production_countries.length; i < j; i++) {
					console.log(movieObj.production_countries[i].name);
				}
				console.log("--------Languages-----------");
				for (i = 0, j = movieObj.spoken_languages.length; i < j; i++) {
					console.log(movieObj.spoken_languages[i].name);
				}
				console.log("--------Plot----------------");
				console.log(movieObj.overview);

				console.log("--------Actors-----------");
				for (i = 0, j = movieObj.credits.cast.length; i < j; i++) {
					console.log(movieObj.credits.cast[i].name);
				}

			});


		} else {
			console.log(error);
		}

	});
}

// function doWhatItSays() {
// 	fs.readFile('random.txt', 'utf8', function (err, data) {

// 		if (err) {
// 			return console.log(err);
// 		}

// 		var dataArr = data.split(',');

// 		processCommands(dataArr[0], dataArr[1]);
// 	});
// }



//-------------------------MAIN PROCESS-------------------------------------------

processCommands(inputCommand, commandParam);