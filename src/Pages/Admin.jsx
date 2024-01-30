
import { Container } from 'react-bootstrap';
import AuthContext from '../context/AuthProvider';
import {AuthService} from "../services/AuthService";

import React, { Component, useEffect,useState } from 'react';



 
 
 
 
const Admin =  () => {
    const [state,setState] = useState([])
   
 
    
   const response = AuthService.getERSystems()
   response.then(function(result){
    const  data = JSON.stringify(result.data)
 
    
   
   console.log(data);
    
    return (
      <div style={{padding: "120px",textAlign: "center"}}>
        <Container>
        <h1>ER</h1>
        
       
        </Container>
      </div>
    );
    })
  }
  export default Admin;