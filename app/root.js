/**
 * Created by Leon.Hwa on 17/3/20.
 */
import React,{Component}from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import  thunk from 'redux-thunk'//
import  reducers from  './reducers'
import App from './containers/app'

import Constants from './common/constants';

import MyStorage from './channel/MyStorage'
import AccountHandle from './channel/AccountHandle'
const  createStoreWithWM = applyMiddleware(thunk)(createStore)
const  store = createStoreWithWM(reducers)


export default class  Root extends Component {

   render() {
       global.Common = Constants;
       global.storage = MyStorage;
       global.account = AccountHandle;
       console.log(AccountHandle)
       return (
           <Provider store={store}>
              <App />
           </Provider>
       )
   }
}
