//get ntemp from word.js string
var msg = require('./testtemp.js');
var temperature = msg.tempr();
var s_temp = temperature.split(' ').slice(1,2);
var n_temp = Number(s_temp);
//console.log(n_temp);

var pl = require('./temp_to_playlist.js')
pl.getPlaylistFromDB(n_temp)
.then(function(result){
	response.render(result, {
		weather: WeatherText, error = null: playlist: result
	})
	
})
.catch(function(error){
	console.log(error)
})

/*render = function(result){
	 response.render(result);

*/

