import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

const Login = ({ goHome }) => {
  return (
    <TouchableOpacity onPress={ goHome }>
      <Text>
        Click to login!
      </Text>
    </TouchableOpacity>
  );
};

export default Login;