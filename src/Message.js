import { render } from '@testing-library/react'
import React, { Component } from 'react'
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Please subscribe to my channel'
        }
    }

    changemessage() {
        this.setState({
            message: 'you have successfully subscribed'
        })

    }
    render() {
        return ( <
            div > <
            h2 > { this.state.message } < /h2> <
            button onClick = {
                () => this.changemessage()
            } > Subscribe Now < /button> < /
            div >
        )
    }
}
export default Message;