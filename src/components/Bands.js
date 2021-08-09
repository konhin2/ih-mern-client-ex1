import React, {useContext} from 'react'
import BandContext from './../context/bands/BandContext'

export default function Bands() {
    const context = useContext(BandContext)
    const {
        band, 
        getBand
    } = context
    return (
        <div>
            <button onClick={() => {getBand()}}>Get Bands</button>
            {
                band.map((elem)=>{
                    return (
                        <div className="box">
                            <img src={elem.imageURL} style= {{width:"200px"}}/>
                            <h4>Band: {elem.name}</h4>
                            <h5>Price: {elem.price}</h5>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
