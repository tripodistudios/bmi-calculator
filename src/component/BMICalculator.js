import { HelpBlock, FormGroup, FormControl, Grid, Row, Jumbotron, Button } from 'react-bootstrap';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { calculateBMI } from  '../logic/BMICalculation';
import LiveData from './live-data.js'

export default class BMICalculator extends Component {
    state = {name:'', weight: '', height: '', BMI: ''}
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
                <Jumbotron>
                      <Grid>
                        <h1>BMI TEST</h1>
                        <p>
                          <Button
                            bsStyle="success"
                            bsSize="large"
                            target="_blank"
                            href="https://github.com/tripodistudios/bmi-calculator">
                            {"View Git Repository for this code"}
                          </Button>
                        </p>
                      </Grid>
                </Jumbotron>

                <div className="row">
                <div className="container-fluid col-md-offset-4">
                <FormGroup
                bsClass={"col-md-6"}
                >
                <label htmlFor={'name'}>
                    Name
                </label>
                <FormControl
                  id={'name'}
                  type="text"
                  value={name}
                  placeholder={'Enter Name'}
                  onChange={this.name}
                  />
                <HelpBlock>
                  {"e.g. John Smith"}
                </HelpBlock>
                <label htmlFor={'weight'}>
                    Weight
                </label>
                <FormControl
                  id={'weight'}
                  type="text"
                  value={weight}
                  placeholder={"0"}
                  onChange={this.weight}
                  />
                <HelpBlock>
                  {"Weight in kg's"}
                </HelpBlock>
                <label htmlFor={'height'}>
                    Height
                </label>
                <FormControl
                  id={'height'}
                  type="text"
                  value={height}
                  placeholder={"0"}
                  onChange={this.height}
                  />
                <HelpBlock>
                  {"Height in cm's"}
                </HelpBlock>
              </FormGroup>
            </div>
            </div>
            <LiveData name={name} weight={weight} height={height} BMI={BMI} />
        </div>
        )
    }
}
