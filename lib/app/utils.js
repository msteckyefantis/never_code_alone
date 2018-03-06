'use strict';

const reduxX = require( './reduxx.js' );


const updateDimensions = Object.freeze(

    () => {

        const width = document.body.clientWidth;
        const height = document.body.clientHeight;

        reduxX.setState(

            {
                keys: 'height',
                value: height
            },

            {
                keys: 'width',
                value: width
            }
        );
    }
);


module.exports = Object.freeze(


    Object.assign(

        {},

        // moreUtils,

        {
            updateDimensions
        }
    )
);
