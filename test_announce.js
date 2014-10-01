var DHT = require('bittorrent-dht')

var dht = new DHT();
console.log('Starting...');

dht.on('ready', function () {
    console.log('Ready, running lookup...');

    var hash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';
    var port = 23134;

    dht.lookup(hash, function() {

        console.log('Lookup finished. Announcing peer with hash ' + hash)
        dht.announce(hash, port, function(error){
            console.log('Announced: ' + hash + ' on port ' + port + ', error: ' + error);
        });
    });
})

dht.on('peer', function (addr, hash, from) {
  console.log('found potential peer ' + addr + ' through ' + from + ', hash: ' + hash)
})
