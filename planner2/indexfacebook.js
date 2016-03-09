var https = require('https');
 
function getCall() {
    //initialize options values, the value of the method can be changed to POST to make https post calls
    var userAccessToken = 'CAAKoIMGu5SAyfOyVhugi7cZAaZA1kHzjrdLvtPlndoKzMJ8xZBtR3YV2iX39FSnhxK1lvtfYXO5FvcbK4MVGJphxeYDZC7HJ5FCmhOr2Ys8ZBG9qYNRSfFGuzoeRgwZBdliKvoW6YPl41b8i3dfrTpR98gFAm6qag9vYM2yD0aEv47fnWQWF1SoXRs6PFFrFu5XOe';
    var appAccessToken = '24562343562751562|hPEXIpDl0CXt0tNJ';
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