'use strict';

const React = require( 'react' );

const e = React.createElement;


module.exports = class Title extends React.Component {

    render() {

        const {

            order

        } = this.props;

        return e(

            'div',

            {
                style: {

                    order,

                    width: '100%',
                    height: 150,
                    backgroundColor: 'teal',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexFlow: 'column',
                },
            },

            e(
                'h1',

                {
                    style: {

                        fontFamily: 'Fredoka One, cursive',
                        order: 1,
                        color: 'white',
                        textAlign: 'center',
                    }
                },

                'Never Code Alone'
            )
        );
    }
}
