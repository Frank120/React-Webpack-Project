import React from 'react';
import Header from './head';
import Progress from './progress';

require('./assets/plugins/jquery.jplayer');

let duration = null;
let Root = React.createClass({
    getInitialState(){
        return{
            progress : ''
        }
    },

    componentDidMount(){
        $('#player').jPlayer({
            ready : function (){
                $(this).jPlayer('setMedia', {
                    mp3: 'http://www.baidu190.com/api/str/y2002.php/160680/1112489.m4a'
                }).jPlayer('play');
            },
            supplied : 'mp3',
            wmode : 'window',
            useStateClassSkin : true
        });

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
        //console.log(document.querySelector("audio").currentTime = result | 0);
    },

    render() {
        return (
            <div data-container='container'>
                <Header/>
                <Progress progress={this.state.progress}
                          onProgressChange={this.progressChangeHandler}
                          barColor = '#ff0000'
                ></Progress>
            </div>
        )
    }
});

export default Root;