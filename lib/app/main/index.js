'use strict';

const React = require( 'react' );

const Title = require( './title' );

const Pictures = require( './pictures' );

const Description = require( './description' );

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
                Title,

                {
                    order: 1
                }
            ),

            e(
                Pictures,

                {
                    order: 2
                }
            ),

            e(
                Description,

                {
                    order: 3
                }
            )
        );
    }
}
