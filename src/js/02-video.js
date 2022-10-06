// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

// const player = new Player('handstick', {
//   // id: 19231868,
//   // width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });
// player.setVolume(0.5);
// //

// const onPlay = function (data) {
//   player.setCurrentTime(time);
//   console.log(player);
// };

// player.on('play', onPlay);
// let time = 0;
// const timeupdate = function (data) {
//   time = data.seconds;
//   console.log(time);
// };

// player.on('timeupdate', timeupdate);
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function (event) {
//   console.log('played the video!');
//   console.log(player);
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.setVolume(0.5);

const onPlay = function (data) {};
const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
player.setCurrentTime(currentTime);
player.on('play', onPlay);
let time = 0;
const timeupdate = function (data) {
  time = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};

player.on('timeupdate', throttle(timeupdate, 1000));
