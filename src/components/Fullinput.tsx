import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addTMessage: (title:string) => void
}

export const Fullinput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addTMessage(title)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

