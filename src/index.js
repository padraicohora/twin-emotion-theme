import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/bootstrap-overrides.scss"
import 'tailwindcss/dist/base.min.css'
import {Buttons} from './styles/components/Buttons'
import App from './containers/App'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)