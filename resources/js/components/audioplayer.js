import Plyr from 'plyr';

document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        document.querySelectorAll('.audioplayer audio').forEach(el => {
            new Plyr(el, { controls: ['play', 'progress', 'current-time', 'mute', 'volume'] });
        });
    }
});
