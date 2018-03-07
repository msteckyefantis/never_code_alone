'use strict';

const React = require( 'react' );

const e = React.createElement;

const ReactDOM = require( 'react-dom' );

const App = require( './app/index.js' );

if (process.env.NODE_ENV !== 'production') {

    console.log( 'in dev mode' );
}


document.addEventListener(

    'DOMContentLoaded',

    () => {

        ReactDOM.render(

            e( App ),

            document.getElementById( 'root' )
        );
    }
);
