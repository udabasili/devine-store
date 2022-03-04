import React from 'react'
import { BsFillFilterSquareFill } from 'react-icons/bs'
import { SortContainer } from './sort.style'

type SortProps = {
  openFilterDrawer: () => void
}

const SortComponent = ({
  openFilterDrawer
}: SortProps) => {
  return (
    <SortContainer>
      <BsFillFilterSquareFill className="filter" onClick={openFilterDrawer}/>
      </SortContainer>
  )
}

export default SortComponent