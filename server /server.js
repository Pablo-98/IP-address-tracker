
// we need one line of code that that loads anything in the dotenv file
require('dotenv').config();

export default GeoApp ({
    apiKey: process.env.GEO_KEY
})( )