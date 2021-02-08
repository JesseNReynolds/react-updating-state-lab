// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    render() {
        return (
            <div>
                <button
                className='bitrate'
                onClick={() => this.bitrate()}>
                    bitrate
                </button>

                <button
                className='resolution'
                onClick={() => this.resolution()}>
                    resolution
                </button>
            </div>
        )
    }

    bitrate() {
        console.log(this)
        this.setState({
            settings: {
            ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolution() {
        console.log(this)
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

}

