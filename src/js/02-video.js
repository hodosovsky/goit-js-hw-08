// import Player from '@vimeo/player';
import Player from '@vimeo/player';

// const player = new Player('handstick', {
//   id: 19231868,

//   width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (event) {
  console.log('played the video!');
  console.log(player);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setVolume(0.5);

console.log(player);

const onPlay = function (data) {
  player.setCurrentTime(time);
};

player.on('play', onPlay);
let time = 0;
const timeupdate = function (data) {
  time = data.seconds;
  console.log(time);
};

player.on('timeupdate', timeupdate);
