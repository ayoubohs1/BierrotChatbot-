'use strict';
if(process.env.NODE_ENV === 'production'){
    module.exports = {
        FB: {
            pageAccessToken: process.env.pageAccessToken,
            VerifyToken: process.env.VerifyToken
        },
        TMDB: process.env.TMDB
    }
} else {
    console.log("Can't use .env");
    module.exports = require('./development.json');
}