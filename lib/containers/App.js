import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';

@connect(state => state)
export default class App extends Component {
        render() {
            return (
                <div className="scene">
                    {this.props.counter}
                </div>
            );
        }
    
    }