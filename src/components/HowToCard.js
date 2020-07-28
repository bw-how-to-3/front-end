import React from 'react'



const HowToCard = (props) => {
    const { title, body } = props.skill   

    return (
        <div className='card'>
            
            <div>
                <h2>Title: {title}</h2>
            </div>
            <div>
                <p>How to: {body}</p>
            </div>

        </div>
    )

}



export default HowToCard