import React, {ChangeEvent, useState} from 'react';

export const Fullinput = () => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => {
            }}>+
            </button>
        </div>
    );
};
