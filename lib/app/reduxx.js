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


        /* state values for testing purposes
        {
            keys: 'monkey',

            value: 'xxx',
        },

        {
            keys: [

                'monkey',
                'favortieFood'
            ],

            value: { test: 'yes' },
        },
        */
    ]
});
