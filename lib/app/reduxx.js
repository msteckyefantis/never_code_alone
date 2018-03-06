'use strict';

const ReduxX = require( 'reduxx' );
// const ReduxX = require( '../../../reduxx/index.js' );


module.exports = ReduxX({

    // obscureStateKeys: true,

    initialState: [

        {
            keys: 'width',

            value: window.innerWidth,
        },

        {
            keys: 'height',

            value: window.innerHeight,
        },
    ]
});
