// import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useDashboard } from "../../../contexts/DashboardContext";
import { db } from "../../../firebase/Firebase";
import { Frame } from "../../../elements/Dashboard";


 
const Dashboard: React.FC = () => {
  const { currentUser, userDocumentRef } = useAuth()
  
  const { userData, setUserData } = useDashboard()
  const { registers } = userData
  // const { page, setPage, userData, setUserData } = useDashboard()

  function addRegister (schema: object) {
    registers.push(schema)
    userDocumentRef.
  }
  
  useEffect(() => {
  if (!userData) {
    db.collection(`users`).doc(currentUser.uid).get()
    .then(res => {
      const retrievedData = res.data()
      setUserData(retrievedData)
    })
    .catch(err => {
      console.log(err);
    })
  }
  }, [currentUser.uid, setUserData, userData])

  return (
      <Frame>
        <h1>Bienvenido al dashboard de Platubi</h1>
      </Frame>
  );
}
 
export default Dashboard;

// {
//   operation: 'add',
//   symbol: 'ARS',
//   value: 10000,
//   date: '12-1-2021 13:48',
//   favorite: false,
//   show: true
// }

// useEffect(() => {
//   db.collection(`users/${currentUser.uid}`).get()
//   .then(res => {
//     setUserData(res.docs)
//     console.log(userData);
    
//   })
// }, [])

// <h1>Bienvenido al dashboard de Platubi</h1>
// {userData && !userData.registers ? <h1>No hay registros</h1> : userData.registers.map( (element: any) => {
//     return (
//       <>
//         <h2>{element.operation}</h2>
//         <h2>{element.symbol}</h2>
//         <h2>{element.value}</h2>
//       </>
//     )
//   })
// }
// 
// <button onClick={addReg}>Añadir registro</button>


