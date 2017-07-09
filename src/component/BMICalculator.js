import React, { Component } from 'react';
import { render } from 'react-dom'

export default class BMICalculator extends Component {
    state = {weight: '', height: '', BMI: ''}

    isNumber = (number) => {
        return !!number.match(/^[0-9]+$/)///[0-9]+/);
    }

    calculateBMI = (weight, height) => {
        console.log(this.isNumber(weight));
        console.log(this.isNumber(height));
        if(this.isNumber(weight) && this.isNumber(height)) {
            height = height / 100;
            return weight / (height * height);
        } else {
            return "Ensure Height and Weight are Numbers"
        }
    }

    // checkCalulator = () => {
    //     console.log(this.state.weight);
    //     //console.log(this.state.height);
    // }

    weight = (e) => {
        let weightValue = e.target.value;
        let BMI = this.calculateBMI(weightValue, this.state.height);
        this.setState({weight: weightValue, BMI: BMI})
    }

    height = (e) => {
        let heightValue = e.target.value;
        let BMI = this.calculateBMI(this.state.weight, heightValue);
        this.setState({height: heightValue, BMI: BMI})
    }

    render() {
        const {weight, height, BMI} = this.state
        console.log(BMI);

        return (
            <div>
            <label htmlFor={'weight'}>
            Weight
            </label>
            <input
            id={'weight'}
            type={'text'}
            value={weight}
            placeholder={'Placeholder'}
            onChange={this.weight}
            />
            <label htmlFor={'height'}>
            Height
            </label>
            <input
            id={'height'}
            type={'text'}
            value={height}
            placeholder={'Placeholder'}
            onChange={this.height}
            />
            <br />
            <br />
            {weight ? (
              <p>weight: {weight} kg</p>
            ) : (
              <p>weight: -- kg</p>
            )}
            {height ? (
              <p>height: {height} cm</p>
            ) : (
              <p>height: -- cm</p>
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
