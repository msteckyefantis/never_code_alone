'use strict';

const webpack = require( 'webpack' );

const isProductionMode = (process.NODE_ENV === 'production');

if( isProductionMode ) {

    console.log( 'webpacking in production mode' );
}


module.exports = {

    mode: isProductionMode ? 'production' : 'development',

	context: __dirname + "/lib",

    entry: "./index",

    output: {

    	path: __dirname + "/www",
		filename: "bundle.js"
	},

    plugins: [

        isProductionMode ? new webpack.optimize.UglifyJsPlugin() : ()=>{},

        new webpack.DefinePlugin({

            'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV ),
        })
    ]
};
