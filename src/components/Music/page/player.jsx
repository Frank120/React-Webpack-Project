import React from 'react';
import Progress from '../progress';

let duration = null;

let Player = React.createClass({
    getInitialState(){
        return{
            progress : 0,
            
        }
    },

    componentDidMount(){
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress : e.jPlayer.status.currentPercentAbsolute
            });
        });
    },

    componentWillUnMount(){
         $('#player').unbind($.jPlayer.event.timeupdate);
    },

    progressChangeHandler(progress){
        let result = duration*progress;
        $('#player').jPlayer('play', result | 0);
    },

    render(){
        return (
            <div>
                 <Progress progress={this.state.progress}
                          onProgressChange={this.progressChangeHandler}
                          barColor = '#ff0000'
                ></Progress> 
            </div>
        )
    }
});

export default Player;