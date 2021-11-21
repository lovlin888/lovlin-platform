import React from 'react'
import About from '../pages/About';
import MainBox from '../components/MainBox'
import Login from '../pages/User/Login'
import Feedback from "../pages/Feedback";
import Exception404 from '../pages/exception/404'

export default [
  {
    path: "/user/login",
    component: Login
  },
  {
    path: "/",
    component: MainBox,
    children: [
      {
        path: "/feedback",
        component: Feedback
      },
      {
        path: "*",
        component: Exception404
      },
    ]
  }
]
