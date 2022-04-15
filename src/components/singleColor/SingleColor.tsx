import React, { useState } from 'react'
import Values from 'values.js'
import Color from '../color/Color'
import HexColor from '../hexColor/HexColor'
import '../../App.scss'



const SingleColor= () => {
    const [list, setList] = useState(new Values('#f15025').all(10))
  return (
      <>
       <HexColor setList={setList}/>
   <section className='colors'>
    {
        list.map((color,index)=>{
            const hexColor = color.hex
            return(
                <Color key={index} {...color} index={index} hexColor={hexColor} />
            )
        })
    }
   </section>
   </>
  )
}

export default SingleColor