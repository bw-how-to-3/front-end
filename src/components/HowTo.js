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