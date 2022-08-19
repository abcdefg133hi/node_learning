let url = 'http://mylogger.io/log';
function log(message)
{
    //send an HTTP request
    console.log(message);
}

//from private to public
module.exports.log = log;
