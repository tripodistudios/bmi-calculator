//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { HelpBlock, FormGroup, FormControl, Grid, Row, Jumbotron, Button } from 'react-bootstrap';

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

                <br />
                <br />


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
                  {"Please Enter Full Name"}
                </HelpBlock>

                <br/>

                <label htmlFor={'weight'}>
                    Weight
                </label>
                <FormControl
                  id={'weight'}
                  type="text"
                  value={weight}
                  placeholder={'Enter Weight'}
                  onChange={this.weight}
                  />
                <HelpBlock>
                  {"Please Enter Weight in KG's"}
                </HelpBlock>

                <br/>

                <label htmlFor={'height'}>
                    Height
                </label>
                <FormControl
                  id={'height'}
                  type="text"
                  value={height}
                  placeholder={'Enter Height in CM\'s'}
                  onChange={this.height}
                  />
                <HelpBlock>
                  {"Please Enter Height in CM's"}
                </HelpBlock>

                <br/>
                <br/>

                  {name ? (
                    <p>Name: {name}</p>
                  ) : (
                    <p>Name: -- </p>
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
              </FormGroup>
              {/*<Button type="submit">Submit</Button>*/}
            </div>
            </div>
        </div>
        )
    }
}
