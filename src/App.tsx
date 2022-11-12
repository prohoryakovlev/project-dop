import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = (subsriber: string) => {
        console.log(subsriber)
    }

    return (

        <div className="App">
            {/*<button>*/}
            {/*    MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button>*/}
            {/*    MyYouTubeChanel-2*/}
            {/*</button>*/}
            <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("In Vasya", 21, "Live in Minsk")}/>
            <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")}/>
            <Button name={"MyYouTubeChanel-3"} callBack={() => Button3Foo("Im stupid Button")}/>
            <Button name={"MyYouTubeChanel-3"} callBack={() => Button3Foo("Im stupid Button")}/>
            {/*<Button name={"Delete"}/>*/}

        </div>

    );
}

export default App;
