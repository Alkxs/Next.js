'use client'

import Link from 'next/link'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' sticky='top' expand='sm' collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} href='/'>
          Next image gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav>
            <Nav.Link as={Link} href='/static'>
              Static
            </Nav.Link>
            <Nav.Link as={Link} href='/dynamic'>
              Dynamic
            </Nav.Link>
            <Nav.Link as={Link} href='/isr'>
              ISR
            </Nav.Link>
            <Nav.Link as={Link} href='/topics/zurich'>
              Dynamic routes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar
