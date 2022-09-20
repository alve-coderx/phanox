import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextContainer from './TextContainer';
import Messages from './Messages';
import InfoBar from './InfoBar';
import Input from './Input';
import { useLocation } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Container } from "react-bootstrap";
import { useRef } from "react";

const ENDPOINT = 'https://phanox.herokuapp.com';

let socket;

const Chat = () => {
  const location = useLocation()
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {


        const { name, room } = queryString.parse(location.search);
      socket = io.connect(ENDPOINT);
      setRoom(room);
      setName(name)
      
      socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      socket.on('message', message => {

      setMessages(messages => [ ...messages, message ]);

    });

    

    socket.on("roomData", ({ users }) => {

      setUsers(users);

    });
  },[ENDPOINT,location.search]);
  




  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <React.StrictMode>
    <Navbar/>
    <Container className="bg-light ">
        <InfoBar room={room} />
      <div className="bg-light  p-5">
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </Container>
    <Footer/>
    </React.StrictMode>
  );
}

export default Chat;
