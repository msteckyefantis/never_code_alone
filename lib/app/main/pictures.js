'use strict';

const React = require( 'react' );

const {

    reduxX: {

        getState,
    }

} = require( '../tools.js' );

const e = React.createElement;

const gridGap = 15;

const maxGridWidth = 600;


module.exports = class Pictures extends React.Component {

    render() {

        const {

            order

        } = this.props;

        const screenWidth = getState({ keys: 'width' });

        const gridWidth = (screenWidth <= maxGridWidth) ? (

            screenWidth

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
                },
            },

            getBoxes()
        );
    }
}

// helper functions
function getBoxes() {

    const boxes = [];

    for( let i = 0; i < 9; i++ ) {

        const box = e(

            'div',

            {
                key: `box${ i }`,

                style: {

                    backgroundColor: 'green'
                }
            }
        );

        boxes.push( box );
    }

    return boxes;
}
