import React from 'react';
import Style from './list.scss';
import ReactDOM from 'react-dom';

const List = React.createClass({

    getInitialState(){
        return {
            status : []
        }
    },

    componentDidMount(){},

    render () {
        const datas = [1, 2, 3];
        const listItems = datas.map((number) =>
            <li className={Style['item']} key={number} onClick={this.__switch} ref='item'>
                <a className={Style['pic' + number]}></a>
            </li>
        );

        return (
            <ul className={Style['content']}>
                {listItems}
            </ul>
        )
    },

    __switch(e) {
        e.preventDefault();
        e.stopPropagation();
        let n = 1;
        n = this.numADD(n, 4);
        const targetItem = ReactDOM.findDOMNode(this.refs.item);
        // targetItem.css({
        //     'z-index' : n
        // });
    },

    numADD(s, e) {
        return s = (s++ > e) ? s : 1;
    }
});

export default List;