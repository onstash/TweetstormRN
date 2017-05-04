import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FabricTwitterKit from 'react-native-fabric-twitterkit';

import styles from './styles';

const Login = ({ login }) => {
  return (
    <TouchableOpacity
      onPress={ login }
      style={[styles.socialButton, styles.twitter]}>
      <Icon name="twitter" size={ 18 } color='white' />
      <Text style={ styles.buttonLabel }>
        Click to login!
      </Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch, { goHome }) => {
  return {
    login: () => {
      new Promise((resolve, reject) => {
        return FabricTwitterKit.login((error, response) => {
          console.log(error, response);
          return error ? reject(error): resolve(response);
        });
      }).then(response => {
        console.log('twitter response', response);
        if (!response) {
          return Promise.reject('TwitterFabricKit didn\'t send a token');
        }
        goHome();
      }).catch(error => console.log(error));
    }
  }
}

// export default Login;
export default connect(null, mapDispatchToProps)(Login);