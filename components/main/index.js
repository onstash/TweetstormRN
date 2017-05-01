import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { configureStore } from '../../redux';
import Login from '../login';
import AppStackNavigator from '../app-stack-navigator';

const store = configureStore();

export default Main = () => {
    return (
        <Provider store={ store }>
            <AppStackNavigator />
        </Provider>
    );
}
