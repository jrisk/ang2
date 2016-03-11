var https = require('https');
 
function getCall() {
    //initialize options values, the value of the method can be changed to 
    //POST to make https post calls
    var userAccessToken = 0 //
    var appAccessToken = 0 //
    var options = {
        host :  'graph.facebook.com',
        port : 443,
        path : '/debug_token?input_token=' + userAccessToken + '&access_token=' + appAccessToken,
        method : 'GET'
    }
 
    //making the https get call
    var getReq = https.request(options, function(res) {
        console.log("\nstatus code: ", res.statusCode);
        res.on('data', function(data) {
            console.log( JSON.parse(data) );
        });
    });
 
    //end the request
    getReq.end();
    getReq.on('error', function(err){
        console.log("Error: ", err);
    }); 
}
 
getCall();