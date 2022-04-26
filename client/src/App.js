import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const { Title } = Typography;

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} >CHAT BOT APP&nbsp;<Icon type="robot" /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
      {/* <Home></Home> */}
      {/* <Signup></Signup>
      <Chatbot /> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singup" element={<Signup />} />
          <Route path="chatbot" element={<Chatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>


      </div>
    </div>
  )
}

export default App
