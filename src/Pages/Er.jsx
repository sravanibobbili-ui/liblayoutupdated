import GridLayout from "react-grid-layout";
import styled from "styled-components";
import image from "./occupied.png" 
import image1 from "./initial.png"
import image2 from "./warning.png"
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Draggable from 'react-draggable';
const API_URL = 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php?param=ER';

 const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 20, y: 0, w: 0.3, h: 0.3 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];



const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

 const ER = () => {
    const [posts, setPosts] = useState([]);
    const [values,setValues] = useState([]);
    const dataarray = [];
    // Define the function that fetches the data from API
    const fetchData = async () => {
      const { data } = await axios.get(API_URL);
      setPosts(data.data);
      console.log(data.data);
    
    // for (let i = 0; i < data.data.length; i++) {
    //     let intx = parseInt(data.data[i].X);
    //     let inty = parseInt(data.data[i].Y);
        
  
    //     let tempar = { i: data.data[i].position, x: intx, y: inty, w: 0.3, h: 0.3 };
    //     console.log(tempar);
    //     dataarray.push(tempar);
      
        
    //   }
    //   setValues(dataarray.tempar);
    //   console.log(posts);
  
    };
    
    // console.log(values);
  
  
    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
      fetchData();
    }, []);
    
  return (
    <Root style = {{padding:"40px"}}>
      <h1 style = {{textAlign: "center", margin: "60px"}} > ER </h1>
        {/* <GridLayout layout = {posts} cols={5}  rowHeight={100} width={1000}> */}
        <DivStyles>
         {posts.map((post,i) => (
           <Draggable key={i} defaultPosition={{ x: 0, y: 0 }} disabled>
           <div key={i} className="post" >
       
         
            {post.status == 0 ? (
            <GridItemContent style={{padding:"2px"}}><img src={image1} title="{{post.host_name}}{{post.position}}(Available)" height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
           ):  <GridItemContent style={{padding:"2px"}}><img src={image} title="{{post.host_name}}{{post.position}}(Inuse)"  height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
          
            }
            
            
          
            
            {post.status == 2 ? (
           <img src={image2} height="40" width="40" className="image_fluid" alt={post.position} />
           ): null
            }
            
        
          
           
          
            
           </div>
           </Draggable>
         ))
         }
      </DivStyles>
      {/* </GridLayout> */}
    </Root>
  );
};
export default ER;
const DivStyles = styled.div`
display: grid;
//  grid-template-columns: repeat(5, minmax(300px,  1fr) );
  grid-template-columns: repeat( 5,1fr);
//  grid-template-columns: subgrid;
grid-template-rows: repeat(2, minmax(10px, 5fr));
grid-gap: 10px
grid-column-gap: 0px;
grid-row-gap: 0px;
grid-auto-rows: 45px;
// grid-auto-flow: dense;
//  display: flex;
// flex-wrap: wrap;
//  .div { grid-area: 4 / 4 / 5 / 5; }
// width: 90%;
  // min-width: 300px;
  // flex-grow: 1;
  // background-color: teal;
  // color: white;
  // text-align: center;
  // padding: 30px 5px;
  // border: 5px solid white;
    
}`;
