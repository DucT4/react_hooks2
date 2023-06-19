
import React from 'react';
import ReactDOM from 'react-dom/client';

//Cấu hình router
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallBackDemo from './pages/Hooks/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/Hooks/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRefDemo/UseRefDemo';
import DemoHookRedux from './pages/Hooks/HookRedux/DemoHookRedux';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import UseNavigateDemo from './pages/Hooks/UseNavigateDemo';
import Profile from './pages/Profile';
import ForgotPass from './pages/ForgotPass';
import UseSearchParamDemo from './pages/Hooks/UseSearchParamDemo/UseSearchParamDemo';
//custom history
import {createBrowserHistory} from 'history'
import HOCdemo from './pages/HOCdemo';
import ContainerModal from './HOC/ContainerModal';

export const customNavigate = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={customNavigate}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='use-state-demo' element={<UseStateDemo />}></Route>
          <Route path='use-effect-demo' element={<UseEffectDemo />}></Route>
          <Route path='use-callback-demo' element={<UseCallBackDemo />}></Route>
          <Route path='use-memo-demo' element={<UseMemoDemo />}></Route>
          <Route path='use-ref-demo' element={<UseRefDemo />}></Route>
          <Route path='use-redux-demo' element={<DemoHookRedux />}></Route>
          <Route path='use-navigate-demo' element={<UseNavigateDemo />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='forgot-password' element={<ForgotPass />}></Route>
          <Route path='use-search-params' element={<UseSearchParamDemo />}></Route>
          <Route path='hoc' element={<HOCdemo />}></Route>
          <Route path='detail'>
            <Route path=':id' element={<Detail />}></Route>
          </Route>
        </Route>
      </Routes>
      <ContainerModal/>
    </HistoryRouter>
  
  </Provider>
);


