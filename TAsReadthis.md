<!-- So here is the results of my homework -->

<!-- First check was OMDB Movie API -->
Johns-MBP:LIRI-Say-What-Bot jbautista$ node liri.js movie-this robocop
this is loaded
robocop
--------Title-----------
RoboCop
--------Year -----------
1987
--------Rating-----------
[ { Source: 'Internet Movie Database', Value: '7.5/10' },
  { Source: 'Rotten Tomatoes', Value: '89%' },
  { Source: 'Metacritic', Value: '67/100' } ]
--------Genre-----------
Action, Crime, Sci-Fi, Thriller
--------Languages-----------
English
--------Plot----------------
In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.
--------Actors-----------
Peter Weller, Nancy Allen, Dan O'Herlihy, Ronny Cox
Johns-MBP:LIRI-Say-What-Bot jbautista$ node liri.js movie-this robocop
this is loaded
robocop
--------Title-----------
RoboCop
--------Year -----------
1987
--------Rating-----------
[ { Source: 'Internet Movie Database', Value: '7.5/10' },
  { Source: 'Rotten Tomatoes', Value: '89%' },
  { Source: 'Metacritic', Value: '67/100' } ]
--------Genre-----------
Action, Crime, Sci-Fi, Thriller
--------Languages-----------
English
--------Plot----------------
In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.
--------Actors-----------
Peter Weller, Nancy Allen, Dan O'Herlihy, Ronny Cox
Johns-MBP:LIRI-Say-What-Bot jbautista$

<!-- Spotify API -->
Johns-MBP:LIRI-Say-What-Bot jbautista$ node liri.js spotify-this-song thiller
this is loaded
------Artists-----
undefined
------Song Name-----
thiller
-------Preview Link-----
undefined
-------Album-----
undefined
{ tracks:
   { href: 'https://api.spotify.com/v1/search?query=thiller&type=track&offset=0&limit=20',
     items: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
     limit: 20,
     next: null,
     offset: 0,
     previous: null,
     total: 6 } }
Johns-MBP:LIRI-Say-What-Bot jbautista$

<!-- Bandstown API -->