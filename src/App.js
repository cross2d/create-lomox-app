import Lomox from './lomox';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
        this.initWindow()

    }

    initWindow(){
        //设置App窗口大小
        Lomox.Dialog.initWndWH(600,480);
        //设置App可拖拽区域

    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to LomoX & React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
