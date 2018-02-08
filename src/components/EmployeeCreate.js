import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Bob"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>

        <CardSection>
        </CardSection>
        
        <CardSection>
          <Button>
            Add Employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
