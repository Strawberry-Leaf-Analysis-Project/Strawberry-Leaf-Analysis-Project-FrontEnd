import React from 'react'
import { useLocation } from "react-router";
function ViewBoard() {
  const {state} = useLocation()
  return (
    <div>{state.date}</div>
  )
}

export default ViewBoard