import React, { Component } from 'react';
import { render } from 'react-dom';
import { calculateBMI } from  '../logic/BMICalculation';

export default class BMICalculator extends Component {
    state = {weight: '', height: '', BMI: ''}

    name = (e) => {
        let enteredName = e.target.value;
        this.setState({name: enteredName})
    }

    weight = (e) => {
        let weightValue = e.target.value;
        let BMI = calculateBMI(weightValue, this.state.height);
        this.setState({weight: weightValue, BMI: BMI})
    }

    height = (e) => {
        let heightValue = e.target.value;
        let BMI = calculateBMI(this.state.weight, heightValue);
        this.setState({height: heightValue, BMI: BMI})
    }

    render() {
        const {name, weight, height, BMI} = this.state

        return (
            <div>
                <label htmlFor={'Name'}>
                    Name
                </label>
                <input
                    id={'name'}
                    type={'text'}
                    value={name}
                    placeholder={'Enter First Name'}
                    onChange={this.name}
                />
                <br />
                <br />

                <label htmlFor={'weight'}>
                    Weight
                </label>
                <input
                    id={'weight'}
                    type={'text'}
                    value={weight}
                    placeholder={'Enter Weight in KG'}
                    onChange={this.weight}
                />
                <label htmlFor={'height'}>
                    Height
                </label>
                <input
                    id={'height'}
                    type={'text'}
                    value={height}
                    placeholder={'Enter Height in CM\'s'}
                    onChange={this.height}
                />
                <br />
                <br />
            {name ? (
              <p>Name: {name}</p>
            ) : (
              <p>Name: Please Enter Your Name.</p>
            )}
                {weight ? (
              <p>Weight: {weight} kg</p>
            ) : (
              <p>Weight: -- kg</p>
            )}
            {height ? (
              <p>Height: {height} cm</p>
            ) : (
              <p>Height: -- cm</p>
            )}
            {BMI ? (
              <p>BMI Index: {BMI}</p>
            ) : (
              <p>BMI Index: -- </p>
            )}
        </div>
        )
    }
}
