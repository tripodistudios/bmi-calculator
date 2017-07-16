import React, { Component } from 'react';
import BMICalculator from './component/BMICalculator'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BMICalculator />
            </div>
        );
    }
}

export default App;
