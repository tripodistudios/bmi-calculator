import { HelpBlock, FormGroup, FormControl, Grid, Row, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class LiveData extends Component {

    existsCheck = (value) => {
        if(value) {
            return value;
        } else {
            return "--";
        }
    }

    render() {
        const {name, weight, height, BMI} = this.props;
        return (
            <div className="row">
                <div className="container-fluid col-md-offset-4">
                    <div className="table-responsive col-md-6">
                        <table className="table text-left">
                            <thead>
                              <tr>
                                <th>Title</th>
                                <th>Data</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Name</td>
                                <td>{this.existsCheck(name)}</td>
                              </tr>
                              <tr>
                                <td>Weight (kg)</td>
                                <td>{this.existsCheck(weight)}</td>
                              </tr>
                              <tr>
                                <td>Height (cm)</td>
                                <td>{this.existsCheck(height)}</td>
                              </tr>
                              <tr className="active">
                                <td>BMI Index</td>
                                <td>{this.existsCheck(BMI)}</td>
                              </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
