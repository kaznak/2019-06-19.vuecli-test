
module.exports = {
    devServer : {
        https : true,
        http2 : true,
        headers: {
            'Access-Control-Allow-Origin': '*' // Allow CORS
        }
    }
};
