import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import 'antd/dist/antd.min.css';
import store from "./redux/store";
import {Provider} from "react-redux";
import {axios} from "./utils/request";

async function bootstrap() {
  // const axiosTranslation = await axios.get('https://www.api.rico.org.cn/translation-api/zh_CN').then(res=>{
  //   return res
  // })
  console.log('新的')
  window.translation = {}
  await import('./local/i18')
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.getElementById('root')
  );
}
bootstrap()
