'use strict';

const React = require( 'react' );

const e = React.createElement;


module.exports = class Description extends React.Component {

    render() {

        const {

            order

        } = this.props;

        return e(

            'div',

            {
                style: {

                    order,

                    width: '80%',
                    minWidth: '310px',
                    backgroundColor: '#33A0A0',

                    textIndent: 15,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'left',
                    flexFlow: 'column',
                    marginTop: '40px',
                    marginBottom: '40px',
                    borderRadius: '20px',
                },
            },

            getTextParagraph({

                order: 1,

                text: `You've probably heard or read the book "Never Eat Alone", "Never Code Alone" is inspired by the book on the idea of social connection is one of keys to success in life -we all have the power to help and the need to be helped.`
            }),

            getTextParagraph({

                order: 2,

                text: `"Never Code Alone" has its 14th social coding event happening on Sunday at 2 pm to 6 pm, to encourage people to come out and code together rather than coding/learning alone. This event focus on providing a comfortable, friendly and encouraging environment for people to bring whatever they are working on, share knowledge and build relationships.`
            }),

            getTextParagraph({

                order: 3,

                text: `If you are interested and have questions, please let me know or just simply spread the words!`
            })
        );
    }
}


// helper functions
function getTextParagraph({ order, text }) {

    return e(

        'p',

        {
            style: {

                order,

                fontFamily: `'Montserrat', sans-serif`,
                color: 'white',
                textAlign: 'left',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '10px',
                paddingBottom: '10px',
            }
        },

        text
    );
}
