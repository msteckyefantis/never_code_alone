'use strict';

const React = require( 'react' );

const {

    reduxX: {

        getState,
    }

} = require( '../tools.js' );

const e = React.createElement;

const gridGap = 8;

const maxGridWidth = 600;


module.exports = class Pictures extends React.Component {

    render() {

        const {

            order

        } = this.props;

        const screenWidth = getState({ keys: 'width' });

        const regularGridWidth = screenWidth * 0.95

        const gridWidth = (regularGridWidth <= maxGridWidth) ? (

            regularGridWidth

        ) : maxGridWidth;

        const pictureWidth = (gridWidth - (2 * gridGap))/3;

        const gridTemplateColumns = (

            `${ pictureWidth }px ${ pictureWidth }px ${ pictureWidth }px`
        );

        return e(

            'div',

            {
                style: {

                    order,

                    width: gridWidth,
                    height: (pictureWidth * 3) + (gridGap * 2),

                    display: 'grid',
                    gridTemplateColumns,
                    gridGap,

                    marginTop: '40px',
                    marginBottom: '10px',
                },
            },

            getBoxes({ pictureWidth })
        );
    }
}


// helper functions
const pictureKeys = Object.freeze([

    'e',
    's1',
    'a',
    's2',
    'c',
    's3',
    'd',
    's4',
    'b',
]);

function getBoxes({ pictureWidth }) {

    const boxes = [];

    pictureKeys.forEach( ( key, index ) => {

        const src = (

            `https://s3.amazonaws.com/nevercodealone.ca/pictures/${ key }.jpg`
        );

        const box = e(

            'img',

            {
                key: `image${ index }`,

                src,

                style: {

                    width: pictureWidth,
                    height: pictureWidth,
                    borderRadius: 5,
                }
            }
        );

        boxes.push( box );
    });

    return boxes;
}
