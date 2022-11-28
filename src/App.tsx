import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Fullinput} from "./components/Fullinput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')

    const addTMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addTMessage(title)
        setTitle('')
    }
    return (
        <div className="App">

            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callBack={callBackButtonHandler}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
