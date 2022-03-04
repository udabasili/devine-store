import React from 'react'
import CustomHead from '@/components/Head/Head'
import Navigation from '@/components/Navigation/Navigation'
import { Container } from './mainlayout.style'
import Footer from '../Footer/Footer'
import useOutsideComponent from '@/hooks/useOutsideComponent'

type MainLayoutProps = {
  title: string
  description: string
  children: React.ReactNode
}
export default function MainLayout({
  title,
  description,
  children,
}: MainLayoutProps) {

  const { ref } = useOutsideComponent()
  return (
    <>
      <CustomHead title={title} description={description}/>
      <main ref={ref}>
        <Navigation />
        <Container>
          {children}

        </Container>
        <Footer/>
      </main>
    </>
  )
}
