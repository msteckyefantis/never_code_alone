'use strict'

const React = require( 'react' );

const Main = require( './main/index.js' );

const RESIZE = 'resize';

const e = React.createElement;

const {

    utils: {

        updateDimensions
    }

} = require( './tools.js' );

const { setupReduxX } = require( './reduxx.js' );


// App
module.exports = class App extends React.Component {

    constructor( props ) {

        super( props );

        setupReduxX( this );
    }

    render() {

        return e( Main );
    }

    updateMainDimensions() {

        updateDimensions( this );
    }

    componentDidMount() {

        setTimeout( () => {

            window.addEventListener( RESIZE, this.updateMainDimensions );

            this.updateMainDimensions();

        }, 0 );
    }

    componentWillUnmount() {

        window.removeEventListener( RESIZE,  this.updateMainDimensions );
    }
}
