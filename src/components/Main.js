import React, { useState } from 'react'
import Questions from './Questions'
import Que0 from './Que0'
import Que1 from './Que1'
import './style.css'


const Main = () => {

    const changeQues = () => {
        setinitialQue(<Que1 />)

    }


    const [initialQue, setinitialQue] = useState(<Que0 />)

    return (
        <div>
            {initialQue}
            <button onClick={changeQues}>Next Question</button>





        </div>
    )
}

export default Main