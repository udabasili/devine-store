import Link from 'next/link'
import React from 'react'
import { FooterContainer, FooterLink, FooterList } from './footer.style'

const Footer = () => {
  return (
      <FooterContainer>
          <FooterList>
              <Link href="/" passHref>
                  <FooterLink>
                    Home
                  </FooterLink>
              </Link>
              <Link href="" passHref>
                  <FooterLink>
                    Contact
                  </FooterLink>
              </Link>
              <Link href="" passHref>
                  <FooterLink>
                    About
                  </FooterLink>
              </Link>
              <Link href="" passHref>
                  <FooterLink>
                    Products
                  </FooterLink>
              </Link>
              <Link href="" passHref>
                  <FooterLink>
                    Category
                  </FooterLink>
              </Link>
          </FooterList>
          <p className="copyright">
                &copy; Copyright 2022 by Udendu .
            </p>
      </FooterContainer>
   
  )
}

export default Footer