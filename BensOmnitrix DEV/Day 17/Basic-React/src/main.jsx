import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: "_blank"
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",
    target: "_blank"
  },
  "Click me to visit google"
)

createRoot(document.getElementById('root')).render(
    reactElement
)
