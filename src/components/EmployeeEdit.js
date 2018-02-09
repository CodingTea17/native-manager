import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    showConfirm: false
  };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress = () => {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFirePress = () => {
    this.setState({ showConfirm: !this.state.showConfirm })
  }

  onAcceptConfirm = () => {
    this.props.employeeDelete(this.props.employee.uid)
  }

  onDeclineConfirm = () => {
    this.setState({ showConfirm: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showConfirm}
          onAccept={this.onAcceptConfirm}
          onDecline={this.onDeclineConfirm}
        >
          {`Are you sure you want fire ${this.props.name}?`}
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) =>{
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
