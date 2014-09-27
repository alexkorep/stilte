var DHT    = require('bittorrent-dht')
var magnet = require('magnet-uri')
var util = require('util')

//var uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157'
var uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477158'
var parsed = magnet(uri)

console.log(parsed.infoHash) // 'e3811b9539cacff680e418124272177c47477157'

var dht = new DHT()
//console.log("dht:", util.inspect(dht));

dht.listen(20000, function () {
  console.log('now listening')
})

dht.on('ready', function () {
  // DHT is ready to use (i.e. the routing table contains at least K nodes, discovered
  // via the bootstrap nodes)

  // find peers for the given torrent info hash
  var hash = '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33';
  dht.lookup(hash);
  //dht.lookup(parsed.infoHash)
})

dht.on('peer', function (addr, hash, from) {
  console.log('found potential peer ' + addr + ' through ' + from + ', hash: ' + hash)
})
