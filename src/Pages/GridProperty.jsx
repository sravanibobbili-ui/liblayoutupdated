import GridLayout from "react-grid-layout";
import styled from "styled-components";
import image from "./occupied.png" 
import image1 from "./initial.png"
import image2 from "./warning.png"
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Draggable from 'react-draggable';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
const API_URL = 'https://libapps.tamucc.edu/api/liblayout/read_Avail_Angular.php?param=ER';




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
      <h1 style = {{textAlign: "center"}} > ER </h1>
        {/* <GridLayout layout = {posts} cols={5}  rowHeight={100} width={1000}> */}
      
        <ReactGridLayout
        rowHeight={30}
        cols= {56}
       
      >


{posts.map((post,i) => (

<div key={i} data-grid={{ x: parseInt(post.X)*1, y: parseInt(post.Y)*1, w: 2 , h: 2, static:true  }}>


{post.status == 0 ? (
            <GridItemContent style={{padding:"2px"}}><img src={image1} title="{{post.host_name}}{{post.position}}(Available)" height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
           ):  <GridItemContent style={{padding:"2px"}}><img src={image} title="{{post.host_name}}{{post.position}}(Inuse)"  height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
          
            }

            {post.status == 2 ? (
           <img src={image2} height="40" width="40" className="image_fluid" alt={post.position} />
           ): null
            }


</div>

))}


        </ReactGridLayout>

      
      {/* </GridLayout> */}
    </Root>
  );
};
export default ER;

