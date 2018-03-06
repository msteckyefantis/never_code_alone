'use strict';

const express = require( 'express' );
const path = require( 'path' );
const app = express();

const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpack = require( 'webpack' );
const webpackConfig = require( './webpack.config.js' );

const compiler = webpack( webpackConfig );

app.use( express.static( __dirname + '/www' ) );

app.use(

    webpackDevMiddleware(

        compiler,

        {

            hot: true,
            filename: 'bundle.js',
            publicPath: '/',
            stats: {

                colors: true,
            },

            historyApiFallback: true,
        }
    )
);

app.get( '*' , function (request, response) {

    response.sendFile( path.resolve( __dirname, 'www/index.html' ) )
})

const server = app.listen(

    6009,

    function() {

        const host = server.address().address;
        const port = server.address().port;
        console.log( 'Never Code Alone Website listening at http://%s:%s', host, port );
    }
);
