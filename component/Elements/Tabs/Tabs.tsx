import React from 'react'
import Tab from './Tab'
import { TabList } from './tab.style'

type TabsProps = {
    tabs: {
        label: string
        link: string
        icon: React.ReactElement
    }[]

}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <TabList>
        {
            tabs.map((tab, index) => (
                <Tab key={index} {...tab}/>
            ))
        }
    </TabList>
  )
}

export default Tabs