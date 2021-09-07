// Code YouTubeDebugger Component Here
import React, {Component} from 'react';
export default class YoutTubeDebugger extends  Component{
    constructor(){
        super();
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

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12,
            }
        })

    }

    handleResolution = ()=> {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.settings.video,
                resolution: '720p'
              }
            }
        });
        // this.setState({
        //     settings: {
        //         ...this.state.settings,
        //         video: {
        //             ...this.state.settings.video,
        //             resolution: '720p' 
        //         }
        //     }
        // })
    }

    render(){
        return (
            <div>
                <button className="bitrate" onClick={this.handleClick}>Bitrate</button>

                <button className="resolution" onClick={this.handleResolution}>Resolution</button>
            </div>
        )
    }
}