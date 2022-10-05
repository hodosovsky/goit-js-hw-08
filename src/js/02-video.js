import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
console.log(iframePlayer);
