import React from 'react';
import Style from './music.scss';

let Progress = React.createClass({
    getDefaultProps(){
        return {
            barColor : '#2f9842'
        }
    },

    changeProgress(e){
        let progressBar = this.refs.progerssBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
    },

    render() {
        return (
            <div className={Style['components-progress']} ref='progerssBar' onClick={this.changeProgress}>
                <div className={Style['progress']}
                 style={{width:`${this.props.progress}%`, background: this.props.barColor}}></div>
                {/* { this.props.progress }s */}
            </div>
        )
    }
});

export default Progress;