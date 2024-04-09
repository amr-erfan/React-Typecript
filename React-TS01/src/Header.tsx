import React, { ReactElement } from 'react'
type headerProps={
    title?: string
}
const Header = ({title}:headerProps):ReactElement => {
  return (
<h1>{title}</h1>
  )
}

export default Header