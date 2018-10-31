
var data = [
            ['x', 'Auston Matthews', 'Mitch Marner',],
            ['FPPG', 6, 4.82],
            ['salary', 7900, 6700],
            ['dollar per fantasy point', 1316, 1390]
           ];

var playerArr = [
  {
    "Name": "Auston Matthews",
    "FPPG": 6,
    "Salary": 7900
  },
  {
    "Name": "John Tavares",
    "FPPG": 5.5,
    "Salary": 7700
  },
  {
    "Name": "Morgan Rielly",
    "FPPG": 5.5,
    "Salary": 6200
  },
  {
    "Name": "Alex Stalock",
    "FPPG": 4.1,
    "Salary": 7900
  },
  {
    "Name": "Zach Parise",
    "FPPG": 5.1,
    "Salary": 6500
  },
  {
    "Name": "Anders Nilsson",
    "FPPG": 4.33,
    "Salary": 7300
  },
  {
    "Name": "Elias Pettersson",
    "FPPG": 4.83,
    "Salary": 5700
  },
  {
    "Name": "Mitchell Marner",
    "FPPG": 4.82,
    "Salary": 6700
  },
  {
    "Name": "Andrew Hammond",
    "FPPG": 0,
    "Salary": 6500
  },
  {
    "Name": "Johnny Gaudreau",
    "FPPG": 4.59,
    "Salary": 6900
  },
  {
    "Name": "Ryan Suter",
    "FPPG": 4.05,
    "Salary": 5500
  },
  {
    "Name": "Alexander Edler",
    "FPPG": 4,
    "Salary": 5000
  },
  {
    "Name": "Matthew Tkachuk",
    "FPPG": 4,
    "Salary": 5900
  },
  {
    "Name": "Mark Giordano",
    "FPPG": 3.96,
    "Salary": 5900
  },
  {
    "Name": "Mikael Granlund",
    "FPPG": 3.95,
    "Salary": 6100
  },
  {
    "Name": "Jason Zucker",
    "FPPG": 3.85,
    "Salary": 5700
  },
  {
    "Name": "Eric Staal",
    "FPPG": 3.7,
    "Salary": 6400
  },
  {
    "Name": "Bo Horvat",
    "FPPG": 3.62,
    "Salary": 5000
  },
  {
    "Name": "Sean Monahan",
    "FPPG": 3.61,
    "Salary": 6000
  },
  {
    "Name": "Kasperi Kapanen",
    "FPPG": 3.59,
    "Salary": 5400
  },
  {
    "Name": "Elias Lindholm",
    "FPPG": 3.54,
    "Salary": 4800
  },
  {
    "Name": "Darren Archibald",
    "FPPG": 3.5,
    "Salary": 2800
  },
  {
    "Name": "Matt Dumba",
    "FPPG": 3.2,
    "Salary": 4700
  },
  {
    "Name": "Travis Hamonic",
    "FPPG": 3.17,
    "Salary": 4000
  },
  {
    "Name": "Brock Boeser",
    "FPPG": 2.7,
    "Salary": 4900
  },
  {
    "Name": "Mikko Koivu",
    "FPPG": 2.61,
    "Salary": 4600
  },
  {
    "Name": "Mikael Backlund",
    "FPPG": 2.46,
    "Salary": 4300
  },
  {
    "Name": "Nazem Kadri",
    "FPPG": 2.46,
    "Salary": 6200
  },
  {
    "Name": "David Rittich",
    "FPPG": 4.4,
    "Salary": 6700
  },
  {
    "Name": "Patrick Marleau",
    "FPPG": 2.41,
    "Salary": 4600
  },
  {
    "Name": "Ron Hainsey",
    "FPPG": 2.41,
    "Salary": 3700
  },
  {
    "Name": "Devan Dubnyk",
    "FPPG": 6.95,
    "Salary": 8100
  },
  {
    "Name": "Sven Baertschi",
    "FPPG": 2.4,
    "Salary": 4200
  },
  {
    "Name": "Christopher Tanev",
    "FPPG": 2.35,
    "Salary": 3600
  },
  {
    "Name": "Jared Spurgeon",
    "FPPG": 2.35,
    "Salary": 4300
  },
  {
    "Name": "Jonas Brodin",
    "FPPG": 2.25,
    "Salary": 3400
  },
  {
    "Name": "Michael Frolik",
    "FPPG": 2.25,
    "Salary": 3800
  },
  {
    "Name": "Charlie Coyle",
    "FPPG": 2.2,
    "Salary": 3900
  },
  {
    "Name": "Jake Gardiner",
    "FPPG": 2.18,
    "Salary": 4500
  },
  {
    "Name": "Frederik Andersen",
    "FPPG": 5.02,
    "Salary": 8400
  },
  {
    "Name": "Zach Hyman",
    "FPPG": 2.18,
    "Salary": 4100
  },
  {
    "Name": "James Neal",
    "FPPG": 2.09,
    "Salary": 4300
  },
  {
    "Name": "Garret Sparks",
    "FPPG": 5.3,
    "Salary": 8300
  },
  {
    "Name": "Brandon Sutter",
    "FPPG": 2.08,
    "Salary": 3200
  },
  {
    "Name": "Austin Czarnik",
    "FPPG": 2.06,
    "Salary": 3900
  },
  {
    "Name": "Jake Virtanen",
    "FPPG": 1.96,
    "Salary": 3200
  },
  {
    "Name": "Brendan Leipsic",
    "FPPG": 1.92,
    "Salary": 3700
  },
  {
    "Name": "Jacob Markstrom",
    "FPPG": 4.3,
    "Salary": 7300
  },
  {
    "Name": "Noah Hanifin",
    "FPPG": 1.91,
    "Salary": 3900
  },
  {
    "Name": "Eric Fehr",
    "FPPG": 1.9,
    "Salary": 2900
  },
  {
    "Name": "Juuso Valimaki",
    "FPPG": 1.9,
    "Salary": 2800
  },
  {
    "Name": "T.J. Brodie",
    "FPPG": 1.86,
    "Salary": 3600
  },
  {
    "Name": "Rasmus Andersson",
    "FPPG": 1.83,
    "Salary": 3200
  },
  {
    "Name": "Connor Brown",
    "FPPG": 1.82,
    "Salary": 3500
  },
  {
    "Name": "Michael Stone",
    "FPPG": 1.8,
    "Salary": 3100
  },
  {
    "Name": "Par Lindholm",
    "FPPG": 1.77,
    "Salary": 3500
  },
  {
    "Name": "Alex Biega",
    "FPPG": 1.75,
    "Salary": 2900
  },
  {
    "Name": "Ben Hutton",
    "FPPG": 1.75,
    "Salary": 3500
  },
  {
    "Name": "Jon Gillies",
    "FPPG": 0,
    "Salary": 6500
  },
  {
    "Name": "Nikita Zaitsev",
    "FPPG": 1.73,
    "Salary": 3300
  },
  {
    "Name": "Nikolay Goldobin",
    "FPPG": 1.71,
    "Salary": 3400
  },
  {
    "Name": "Tyler Motte",
    "FPPG": 1.65,
    "Salary": 2700
  },
  {
    "Name": "Sam Bennett",
    "FPPG": 1.64,
    "Salary": 4000
  },
  {
    "Name": "Troy Stecher",
    "FPPG": 1.58,
    "Salary": 3000
  },
  {
    "Name": "Markus Granlund",
    "FPPG": 1.52,
    "Salary": 2800
  },
  {
    "Name": "Antoine Roussel",
    "FPPG": 1.5,
    "Salary": 2800
  },
  {
    "Name": "Kasimir Kaskisuo",
    "FPPG": 0,
    "Salary": 6500
  },
  {
    "Name": "Dalton Prout",
    "FPPG": 1.5,
    "Salary": 2500
  },
  {
    "Name": "Garnet Hathaway",
    "FPPG": 1.5,
    "Salary": 2900
  },
  {
    "Name": "Tyler Ennis",
    "FPPG": 1.5,
    "Salary": 3000
  },
  {
    "Name": "Josh Leivo",
    "FPPG": 1.46,
    "Salary": 2900
  },
  {
    "Name": "Derrick Pouliot",
    "FPPG": 1.42,
    "Salary": 3800
  },
  {
    "Name": "Nino Niederreiter",
    "FPPG": 1.4,
    "Salary": 4400
  },
  {
    "Name": "Joel Eriksson Ek",
    "FPPG": 1.38,
    "Salary": 3600
  },
  {
    "Name": "Marcus Foligno",
    "FPPG": 1.35,
    "Salary": 2700
  },
  {
    "Name": "Nick Seeler",
    "FPPG": 1.35,
    "Salary": 2800
  },
  {
    "Name": "Mark Jankowski",
    "FPPG": 1.31,
    "Salary": 2600
  },
  {
    "Name": "Jay Beagle",
    "FPPG": 1.3,
    "Salary": 2500
  },
  {
    "Name": "Erik Gudbranson",
    "FPPG": 1.29,
    "Salary": 2800
  },
  {
    "Name": "Loui Eriksson",
    "FPPG": 1.25,
    "Salary": 3300
  },
  {
    "Name": "Dillon Dube",
    "FPPG": 1.2,
    "Salary": 3100
  },
  {
    "Name": "Tim Schaller",
    "FPPG": 1.2,
    "Salary": 2600
  },
  {
    "Name": "Travis Dermott",
    "FPPG": 1.17,
    "Salary": 2700
  },
  {
    "Name": "Derek Ryan",
    "FPPG": 1.1,
    "Salary": 2800
  },
  {
    "Name": "Greg Pateryn",
    "FPPG": 1,
    "Salary": 2700
  },
  {
    "Name": "Igor Ozhiganov",
    "FPPG": 1,
    "Salary": 2500
  },
  {
    "Name": "Matt Read",
    "FPPG": 1,
    "Salary": 2600
  },
  {
    "Name": "Mike Smith",
    "FPPG": 2.5,
    "Salary": 6900
  },
  {
    "Name": "Adam Gaudette",
    "FPPG": 0.83,
    "Salary": 2700
  },
  {
    "Name": "Andreas Johnsson",
    "FPPG": 0.83,
    "Salary": 3000
  },
  {
    "Name": "Martin Marincin",
    "FPPG": 0.75,
    "Salary": 2600
  },
  {
    "Name": "Jordan Greenway",
    "FPPG": 0.72,
    "Salary": 2500
  },
  {
    "Name": "J.T. Brown",
    "FPPG": 0.69,
    "Salary": 2500
  },
  {
    "Name": "Frederik Gauthier",
    "FPPG": 0.5,
    "Salary": 2800
  },
  {
    "Name": "Matt Hendricks",
    "FPPG": 0.5,
    "Salary": 2500
  },
  {
    "Name": "Michael Del Zotto",
    "FPPG": 0.5,
    "Salary": 2700
  },
  {
    "Name": "Alan Quine",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Andreas Borgman",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Andrew Mangiapane",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Ashton Sautner",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Brendan Gaunce",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Calle Rosen",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Carl Grundstrom",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Curtis Lazar",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Dmitry Sokolov",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Guillaume Brisebois",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Jeremy Bracco",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Josh Jooris",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Justin Holl",
    "FPPG": 0,
    "Salary": 2900
  },
  {
    "Name": "Justin Kloos",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Kyle Rau",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Luke Kunin",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Matt Bartkowski",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Mike Liambas",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Morgan Klimchuk",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Nate Prosser",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Oliver Kylington",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Olli Juolevi",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Pierre Engvall",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Thatcher Demko",
    "FPPG": 0,
    "Salary": 6500
  },
  {
    "Name": "Reid Boucher",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Rinat Valiev",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Ryan Lomberg",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Ryan Murphy",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Sam Gagner",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Semyon Der-Arguchintsev",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Spencer Foo",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Tanner Kero",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "Tyler Graovac",
    "FPPG": 0,
    "Salary": 2500
  },
  {
    "Name": "William Nylander",
    "FPPG": 0,
    "Salary": 5100
  },
  {
    "Name": "Yasin Ehliz",
    "FPPG": 0,
    "Salary": 2500
  }
]
/*
sleep should be color #D81159
eat should be color #8F2D56
code should be color #218380
relax should be color #FBB13C
other should be color #726DA8
*/
