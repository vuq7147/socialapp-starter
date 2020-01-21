import React from "react";
import DisplayName from '../displayName'
import BlueService from '../../blueService';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.client = new BlueService();
        this.state = {
            data: {},
        };
    }

    getNewMessage() {
        return this.client.getMessage().then(result => {
            console.log(result.data)
              this.setState({
            data: result.data
              })
        })
    }

    componentDidMount() {
        this.getNewMessage();
    }

    render() {
        <DisplayName />
        if (this.state.data.message) {
            return (
                <div>
                    <div>
                        message: {this.state.data.message.text}
                    </div>
                    <div>
                        username: {this.state.data.message.username}
                    </div>
                    <div>
                        date: {this.state.data.message.createdAt}
                    </div>
                </div>
            )} 
        else {
            return (
                <div>
                    
                </div>
            )}
    }

}



export default Message;