import { Header2, Header3 } from 'global.style'
import React from 'react'
import { FilterContainer } from './filter.style'

type FilterProps = {
    title: string,
    children: React.ReactNode
}
const Filter = (props: FilterProps) => {

    const {title, children} = props

    return (
        <FilterContainer>
            <div className="u-margin-bottom-small">
                <Header3>
                    {title}
                </Header3>
            </div>
            {children}
        </FilterContainer>
    )
}

export default Filter