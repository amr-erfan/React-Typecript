import React, { ReactElement } from 'react'

type sectionProps={
    title?: string,
    children: React.ReactNode,
}
const Section = ({title,children}:sectionProps):ReactElement => {
  return (
   <>
   <h2>{title}</h2>
   <p>{children}</p>
   
   </>
  )
}

export default Section