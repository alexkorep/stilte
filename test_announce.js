var DHT = require('bittorrent-dht')

var infoHash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';
var port = 23134;

var dht = new DHT();
var hash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';

dht.on('ready', function () {
    var hash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';
    dht.lookup(hash, function() {
        console.log('Lookup finished')
        dht.announce(hash, port, function(error){
            console.log('Announced: ' + infoHash + ' on port ' + port + ', error: ' + error);
        });
    });
})

dht.on('peer', function (addr, hash, from) {
  console.log('found potential peer ' + addr + ' through ' + from + ', hash: ' + hash)
})