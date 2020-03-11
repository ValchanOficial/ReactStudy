import React, { Component } from 'react';


class MyVideo extends Component {

    constructor(props) {
        super(props);

        this.myVideo = React.createRef();
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
    }

    start() {
        this.myVideo.current.play()
    }

    pause() {
        this.myVideo.current.pause()
    }

    render() {
        return (
            <div>
                <video ref={this.myVideo} width="100" src={this.props.src}/>
                <button onClick={this.start}>Play</button>
                <button onClick={this.pause}>Pause</button>
            </div>
        )
    }
}

export default MyVideo;

//<MyVideo src="https://storage.coverr.co/videos/coverr-sparks-of-bonfire-1573980240958?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzNzEyNjMxfQ.X_l5trakIWiha0qRJeu0k8QEGdxWbQIq-MPg15AswL0"/>
