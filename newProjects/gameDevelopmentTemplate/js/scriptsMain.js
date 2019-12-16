// housekeeping
var canvas = document.getElementById('layerStarfield'),
    c = canvas.getContext('2d');

var canvas2 = document.getElementById('layerPlayer'),
    c2 = canvas2.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;

$(window).resize(function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
});


// particle array setup
var particles = [];
var particles2 = [];

//counter init
var counter = 0;
// play switch setup
var playing = false;
var playing2 = false;

