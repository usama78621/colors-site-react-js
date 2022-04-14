import React, { FC, useState } from 'react'
import Values from 'values.js'
interface prorp{
    setList:React.Dispatch<React.SetStateAction<Values[]>>
}

const HexColor:FC<prorp> = ({setList}) => {
    const [color, setColor] = useState("")
    const [error, setError] = useState(false);
    const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10)
            setList(colors)
          } catch (error) {
            setError(true)
            console.log(error)
          }
        }
    return (
        <section className='container'>
            <h1 className='title'>Get a Hex Color as your favorite</h1>
            <form className='from' onSubmit={handleClick}>
                <input type="text" value={color} placeholder='#3A7BD5'
                className={`${error ? 'error' : null}`}
                onChange={(e) => setColor(e.target.value)} />
                <button className='btn'>Submit</button>
            </form>
        </section>
    )
}

export default HexColor