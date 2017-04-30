import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Tweet from '../tweet';

const store = createStore(() => {});

export default Main = () => {
    return (
        <Provider store={ store }>
            <Tweet/>
        </Provider>
    );
}
