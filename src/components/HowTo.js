<<<<<<< HEAD
// import React from 'react'
// import { useHistory } from 'react-router-dom'
// import HowToCard from './HowToCard'

// const HowTo = () => {
//     const { push } = useHistory()
//     const [skill, setSkill] = useState(null)

//     const deleteSkill = () => {
//         axiosWithAuth()
//         .delete(``)
//         .then(res => {
//             console.log(res)
//             push('/skills-list')
//         })
//         .catch(error => console.log(error))
//     }



//     return (
//         <div>
//             <HowToCard skill={skill}/>
//             <button onClick={() => push(`/update-form/${skill.id}`, skill)}>edit</button>
//             <button onClick={deleteSkill}>delete</button>
//         </div>
//     )
// }
=======
// import React, { useContext, useState } from "react";
// import axiosWithAuth from "../utils/axiosWithAuth";
// import { HowToContext } from "../contexts/HowToContext";
// import { Route, useHistory } from "react-router-dom";
// import HowToCard from "../components/HowToCard";

// const HowTo = (props) => {
//   const { push } = useHistory();

//   const deleteSkill = () => {
//     axiosWithAuth()
//       .delete(``)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <HowToCard skill={skill} />
//       <button onClick={() => push("/update-how-to")}>edit</button>
//       <button onChange={deleteSkill}>delete</button>
//     </div>
//   );
// };

// export default HowTo;
>>>>>>> cb89c6b90358d024a90def17f02664c1ffab5c9c
