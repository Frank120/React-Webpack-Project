import React from 'react';
import Header from './head';
import Progress from './progress';

require('./assets/plugins/jquery.jplayer');

let Root = React.createClass({
    getInitialState(){
        return{
            progress : '-'
        }
    },

    componentDidMount(){
        $('#player').jPlayer({
            ready : function (){
                $(this).jPlayer('setMedia', {
                    mp3: 'http://96.f.1ting.com/598ad75b/049c370f01f9010a3cc65558c02cfd8f/zzzzzmp3/2017hAug/09X/09a_Hetu/01.mp3'
                }).jPlayer('play');
            },
            supplied : 'mp3',
            wmode : 'window',
            useStateClassSkin : true
        });

        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.setState({
                progress : e.jPlayer.status.currentPercentAbsolute
            });
        });
    },

    componentWillUnMount(){
        $('#player').unbind($.jPlayer.event.timeupdate);
    },

    render() {
        return (
            <div data-container='container'>
                <Header/>
                <Progress progress={this.state.progress}></Progress>
            </div>
        )
    }
});

export default Root;