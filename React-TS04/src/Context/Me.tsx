import React from 'react'
import { useContext } from 'react'
import { dataContext } from './dataContext'

const Me = () => {
  const myContext=useContext(dataContext);
  return (
  <h1> my name is {myContext.name} and my address is {myContext.address} and my age is {myContext.age}  </h1>
  )
}

export default Me