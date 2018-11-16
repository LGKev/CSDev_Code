const pg = require('pg');


const pool = new pg.Pool({
	user: 'marcvucovich',
	host: '127.0.0.1',
	database: 'practicedb',
	//password: '12345',
	port: '5432'
});
/*
pool.query("SELECT NOW()", (err, res) => {
	if(err){
		console.log("Error");
	}
	else{
		console.log("Connected")
	}
pool.end();
});
*/

module.exports.getPlaylistFromDB = function(temp) {
	//If temp is under 30 access our cold table and randomly select a playist
	
	return new Promise(function(resolve, reject) {
		
		if(temp < 30){
			pool.query("SELECT sname FROM temp30 ORDER BY RANDOM() LIMIT 1",function(error, result) {
				if(error){
					reject("ERROR accessing database: ", error);
				}
				else{
					resolve(result.rows[0].sname);	
				}	
			});
		}

		if(temp >= 30 && temp < 70){
			pool.query("SELECT sname FROM temp3070 ORDER BY RANDOM() LIMIT 1",function(error, result) {
				if(error){
					reject("ERROR accessing database: ", error);
				}
				else{
					resolve(result.rows[0].sname);	
				}	
			});
		}

		else{
			pool.query("SELECT sname FROM temp70plus ORDER BY RANDOM() LIMIT 1",function(error, result) {
				if(error){
					reject("ERROR accessing database: ", error);
				}
				else{
					resolve(result.rows[0].sname);	
				}	
			});
		}
	});


}




