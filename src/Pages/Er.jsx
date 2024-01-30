import {useState, useEffect} from 'react';
import { AuthService } from "../services/AuthService";

function Er() {
  const [users, setUsers] = useState([]);
 const id =0;
  // 👇️ notice that this function is no longer async
  useEffect(() => {
    // ✅ define the async function here
    async function getUsers() {
      const response = await AuthService.getERSystems();
      console.log(response.data.data);
      setUsers(response.data.users);

     
   
    }

    // 👇️ call the function here
    getUsers();
  }, []);

  
  return (
    <div>
      {users?.map((item) => (
        <p>{item}</p>
      ))}
      </div>
  );
}

export default Er;