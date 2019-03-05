const {google} = require('googleapis');
const SCOPES = ["https://www.googleapis.com/auth/firebase.messaging"];

function getAccessToken() {
    return new Promise(function (resolve, reject) {
        var key = require('./service-account.json');
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}

getAccessToken().then((accessToken) => {
    console.log(accessToken);
    process.exit(0)
}).catch((err) => {
    console.log('Something went wrong here', err);
    process.exit(1)
});