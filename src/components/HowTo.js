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
