'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import "./search.less"
import Logo from '../assets/demo.png'
import '../../common/index'
import largeNumber from 'large-number';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./text.js').then((Text) =>{
            this.setState({
                Text: Text.default
            })
        } );

    }
    render() {
        // const funcA = a();
        const { Text } = this.state;
        const resultNum = largeNumber("9999", "1")
        return <div className="search-text">
            搜索{resultNum}文字的内容1112223444555
            <img src={Logo} onClick={this.loadComponent.bind(this)}/>
            { Text && <Text/> }
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);