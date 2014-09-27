var DHT = require('bittorrent-dht')

var infoHash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';
var port = 23134;

var dht = new DHT();
dht.announce(infoHash, port, function(error){
    console.log('Announced: ' + infoHash + ' on port ' + port + ', error: ' + error);
});
