'use strict';

const React = require( 'react' );

const Pictures = require( './pictures' );

const e = React.createElement;


module.exports = class Main extends React.Component {

    render() {

        return e(

            'div',

            {
                style: {

                    order: 1,

                    width: '100%',

                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexFlow: 'column',
                },
            },

            e(
                Pictures,

                {
                    order: 1
                }
            )
        );
    }
}
