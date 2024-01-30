import React from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';
 
const Header = () => {
  return (
   <header>
       <Navbar collapseOnSelect expand="lg" bg='primary' variant='dark' style={{paddingTop:"0px",paddingBottom:"0px"}}>
       <Container>
       <Navbar.Brand>
       <Nav.Link href="/" style={{color:'white', fontSize:'16px',padding:"1.5em"}}>LibLayout</Nav.Link>
       </Navbar.Brand>
       <Navbar.Brand>
       <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
         <Nav id="basic-navbar-nav navbar navbar-dark bg-primary">
     
        
        <Nav.Link href="/Er" style={{color:'white', fontSize:'16px',padding:"1.5em"}}>ER</Nav.Link>
         <Nav.Link href="/Cli" style={{color:'white', fontSize:'16px',padding:"1.5em"}}>CLI</Nav.Link>
         <Nav.Link href="/Admin" style={{color:'white', fontSize:'16px',padding:"1.5em"}}>ADMIN</Nav.Link>
         <Nav.Link href="/Cail" style={{color:'white', fontSize:'16px',padding:"1.5em"}}>CAIL</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar.Brand>
        
       </Container>
       
   
        </Navbar>
    </header>
     

  );
}

export default Header;
