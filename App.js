import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import RouteDrawer from './RouteDrawer'; // Dùng cái bạn vừa sửa

export default function App() {
  return (
    <Provider store={Store}>
      <RouteDrawer />
    </Provider>
  );
}
