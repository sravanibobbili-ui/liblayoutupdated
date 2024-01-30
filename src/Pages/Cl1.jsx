import React from 'react';

import AuthContext from '../context/AuthProvider';
import {AuthService} from "../services/AuthService";

const Cl1 =  () => {
  AuthService.getCl1Systems()
  .then((response)=> 
  {
    (JSON.stringify(response))
    
  })

  
  
  return (
    <div>
      <h1>Cl1 </h1>
    </div>
  );
}


export default Cl1;
