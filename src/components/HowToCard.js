import React, { useContext, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
// import { HowToContext } from "../contexts/HowToContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// import { HowToContext } from '../contexts/HowToContext'

const ButtonStyle = styled.button`
  border: 1px solid #383d3b;
  padding: 3px 5px;
  margin: 5px;
  color: #383d3b;
  border-radius: 2px;
  background-color: #ff934f;
  &:hover {
    background-color: #383d3b;
    color: #ff934f;
  }
`;

const HowToCard = (props) => {
  const { title, body } = props.skill;
  const { push } = useHistory();

  const deleteSkill = () => {
    axiosWithAuth()
      .delete(`/posts/post/${props.skill.postid}`)
      .then((res) => {
        push('/skills-list')
        window.location.reload(false)
        
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <h2>Title: {title}</h2>
      </div>
      <div>
        <p>How to: {body}</p>
      </div>

      <ButtonStyle onClick={() => push(`/update-form/${props.skill.postid}`)}>Edit</ButtonStyle>
      <ButtonStyle onClick={deleteSkill}>Delete</ButtonStyle>
    </div>
  );
};

export default HowToCard;

// import React from 'react'
// import { useHistory, useParams } from 'react-router-dom'
// import axiosWithAuth from '../utils/axiosWithAuth'
// import styled from "styled-components";

// const HowToCard = (props) => {
//     const { title, body } = props.skill  
//     const { push } = useHistory() 
//     // const { postid } = useParams()

//     const deleteSkill = () => {
//         axiosWithAuth()
//         .delete(`/posts/post/${props.skill.postid}`)
//         .then(res => {
//             console.log(res)
//             push('/skills-list')
//             window.location.reload(false)
//         })
//         .catch(error => console.log(error))
//     }

//     return (
//         <div className='card'>
            
//             <div>
//                 <h2>Title: {title}</h2>
//             </div>
//             <div>
//                 <p>How to: {body}</p>
//             </div>
//             <button onClick={() => push(`/update-form/${props.skill.postid}`)}>edit</button>
//             <button onClick={deleteSkill}>delete</button>

//         </div>
//     )

// }



// export default HowToCard