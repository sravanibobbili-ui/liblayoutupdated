import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from "./initial.png"
import image1 from "./occupied.png" 
import image2 from "./warning.png"
import { Container, Row,Col  } from 'react-bootstrap';
// The REST API endpoint
const API_URL = 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php?param=CL1';

const Cl2 = () => {
  const [posts, setPosts] = useState([]);
 const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data.data);
    console.log(data.data);
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper" style ={{fontSize: "14px"}}>
      <Container>
      <h1 style = {{textAlign: "center"}} > ER </h1>
      
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post) => (
            <div className="post">
          <Row xs={5} md={4} lg={6} style ={{ margin: "5px",display:"grid"}}>
         
             {post.status == 0 ? (
           <Col xs={8}> <img src={image} height="40" width="40" className="image_fluid" alt={post.position}/><Col xs={6}>{post.position}</Col> </Col>
           
            ): <Col><img src={image1} height="40" width="40" className="image_fluid" alt={post.position} /><Col>{post.position}</Col></Col>
            
             }
             
             </Row>
             <Row xs={5} md={4} lg={6}>
             
             {post.status == 2 ? (
            <img src={image2} height="40" width="40" className="image_fluid" alt={post.position} />
            ): null
             }
             </Row>
         
           
            
            
           
            </div>
          ))}
          
        </div>
     
      ) : (
        <p className="loading">Loading... </p>
      )}
      
  </Container>
    </div>
  );
};

export default Cl2;
