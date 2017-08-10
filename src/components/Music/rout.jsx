import React from 'react';
import Header from './head';
import Player from './page/player';

require('./assets/plugins/jquery.jplayer');

let Root = React.createClass({
    getInitialState(){
        return{}
    },

    componentDidMount(){
        $('#player').jPlayer({
            ready : function (){
                $(this).jPlayer('setMedia', {
                    mp3: 'http://yinyueshiting.baidu.com/data2/music/122674130/122674130.mp3?xcode=2264f7b587154ef843e6e1d8249fc792'
                }).jPlayer('play');
            },
            supplied : 'mp3',
            wmode : 'window',
            useStateClassSkin : true
        });
    },

    componentWillUnMount(){},

    render() {
        return (
            <div data-container='container'>
                <Header/>
                <Player></Player>
            </div>
        )
    }
});

export default Root;