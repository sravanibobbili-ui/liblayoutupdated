// import React from 'react';
// import Er from './Er';
// import Cl2 from './Cl2';
// import Dialog from './Dialog';
// const Admin = () => {
//   return (
//     <div>
//       <Er/>
//       <Cl2/> 
//       <Dialog/>
//     </div>
//   );
// }

// export default Admin;
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import image from "./occupied.png" 
import image1 from "./initial.png"
import image2 from "./warning.png"
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import Draggable from 'react-draggable';
import Form from 'react-bootstrap/Form';
import {Row,Col,Container,Button,Card} from 'react-bootstrap';
import { FaSearchPlus, FaSearchMinus} from 'react-icons/fa';
import RGL, { WidthProvider } from "react-grid-layout";
import Dialog from './Dialog';

const ResponsiveReactGridLayout = WidthProvider(RGL);

const API_URL = 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php?param=ER';
const API_URL_1 = 'https://libapps.tamucc.edu/api-staging/liblayout/read_Avail_Angular.php?param=Cl1';


const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

 const Admin = () => {
    const [posts, setPosts] = useState([]);
    const [values,setValues] = useState([]);
    const [gets,setGets] =useState([])
    const [isLayout,setisLayout]= useState(false);
    const [isZoom,setisZoom]= useState(false);
    const [isAsset,setisAsset]= useState(false);
    const [isRadioSwitchEnabled, setIsRadioSwitchEnabled] = useState(false);
    const [position, setPosition] = useState({x:0,y:0});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const handleLayoutChange = () =>
    {
        setisLayout(!isLayout);
        
    };
  
    const handleAssetChange = () =>
    {
        setisAsset(!isAsset);
    };
    const handleZoomChange = () =>
    {
        setisZoom(!isZoom);
    };
    const handleRadioSwitchChange = (event) => {
        setIsRadioSwitchEnabled(event.target.checked);
      };
    
    // Define the function that fetches the data from API
    const fetchData = async () => {
      const { data } = await axios.get(API_URL);
      setPosts(data.data);
      setGets(data.data);
      console.log(data.data);
    
    
    };
    
  
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData_cl1 = async () => {
        const { data } = await axios.get(API_URL_1);
        setValues(data.data);
        console.log(data.data);
      
      
      };
      
    
      useEffect(() => {
        fetchData_cl1();
      }, []);
      
      const handleDrag = (post) =>(e, ui) => {
        const{ x,y } =ui;
        setPosition({x,y});
        console.log('Position X:', ui.x);
        console.log('Position Y:', ui.y);
        console.log('Host Name:', post.host_name);
         setCurrentPost(post);
      };
    
      const updateLayoutDatabase = (e) =>
      {
        e.preventDefault();
        if (currentPost) {
          console.log('Current Post:', currentPost);
          // Perform any action you want with the current post data
      }
        console.log('Position X:', position.x);
        console.log('Position Y: ', position.y);
        console.log('Host Name:', currentPost.host_name);
        alert(" layout changed")
      }
  return (
    <Root style = {{padding:"40px"}}>
      <h1 style = {{textAlign: "center", margin: "60px"}} > ER </h1>
        {/* <GridLayout layout = {posts} cols={5}  rowHeight={100} width={1000}> */}
        <ResponsiveReactGridLayout
        rowHeight={30}
        cols= {56}
        // draggableHandle=".react-grid-dragHandleExample" // Specify the handle for dragging
        // isResizable={isLayout}
        // isDroppable={isLayout}
        // isDraggable= {isLayout}
      >
        
            
         {posts.map((post,i) => (
          
          <div key={i} data-grid={{ x: parseInt(post.X)*1, y: parseInt(post.Y)*1, w: 2 , h: 2, static:true  }}>
           <Draggable key={i} defaultPosition={{ x: 0, y:0 }} disabled={!isLayout} onStop={handleDrag(post)} >
          
       <div>
            {post.status == 0 ? (
               
            <GridItemContent style={{padding:"2px",fontSize:"0.8em"}}><img src={image1} title={`${post.host_name}${post.position}(Available)`} height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
           ):  <GridItemContent style={{padding:"2px",fontSize:"0.8em"}}><img src={image} title={`${post.host_name}${post.position}(Inuse)`} height="40" width="40" className="image_fluid" />{post.position}</GridItemContent>
           
           
        }
         {post.status == 2 ?  (
           <img src={image2} height="40" width="40" className="image_fluid" alt={post.position} />
           ): null
            }
            </div>
          </Draggable>
          </div>
   
          
         ))
         
         }
        
        
          </ResponsiveReactGridLayout>
         {gets.map((get,i) => (
           
          <div key={i} className="post" >
       
         
           {!isRadioSwitchEnabled? (
           null
           ):   <GridItemContent style={{padding:"2px"}}><img src={image2} title="{{get.host_name}}{{get.position}}(Available)" height="40" width="40" className="image_fluid" />{get.position}</GridItemContent>
            }
            
            
            
            
            
           
           
          
            
           </div>
         
         ))
         }
         
     
      {/* </GridLayout> */}
      <h1 style = {{textAlign: "center", margin: "60px"}} > CL1 </h1>
      <ResponsiveReactGridLayout
        rowHeight={50}
        cols= {24}
       
      >
         {values.map((value,i) => (
          <div key={i} data-grid={{ x: parseInt(value.X)*1, y: parseInt(value.Y)*1, w: 1 , h: 2, static:true  }}>
          <Draggable key={i} defaultPosition={{ x: 0, y: 0 }} disabled={!isLayout}  onStop={handleDrag}>
            <div>
           {value.status == 0 ? (
            <GridItemContent style={{padding:"2px",fontSize:"0.8em"}}><img src={image1} title="{{value.host_name}}{{value.position}}(Available)" height="40" width="40" className="image_fluid" />{value.position}</GridItemContent>
           ):  <GridItemContent style={{padding:"2px",fontSize:"0.8em"}}><img src={image} title="{{value.host_name}}{{value.position}}(Inuse)"  height="40" width="40" className="image_fluid" />{value.position}</GridItemContent>
          
            }
            
            
            
            {value.status == 2 ? (
           <img src={image2} height="40" width="40" className="image_fluid" alt={value.position} />
           ): null
            }
            
            
           
           
            </div>
          </Draggable>
            
           </div>
          
         ))
         }
       </ResponsiveReactGridLayout>
      <div
    style= {{position: 'fixed', top: '100px', height: '220px',left: '39px', fontSize: '16px', backgroundColor: (250, 250, 250), borderadius:'50px', width: '300px',padding:"10px"}}>
      <Container>
            <Row>
                <Col>
                <Card>
                 <Card.Body>
                    <Form>
                    <Form.Group style ={{marginRight: '10px'}} >
                         <label style ={{marginRight: '10px',margin: '10px'}}>
                            <input  style={{marginRight: '5px'}} type="checkbox" checked={isZoom} onChange={handleZoomChange}/>
                             Edit Zoom</label>
                         {isZoom ?(
                            <>
                            <FaSearchPlus style={{marginRight:'5px',fontSize:'20px',color: 'red'}}/>
                            <FaSearchMinus style={{marginRight:'5px',fontSize:'20px',color: 'red'}}/>
                            </>
                         ): (
                            <>
                            <FaSearchPlus style={{marginRight:'5px',fontSize:'20px',color: 'grey'}}/>
                            <FaSearchMinus style={{marginRight:'5px',fontSize:'20px',color: 'grey'}}/>
                            </>
                         )}
                          </Form.Group>
                         <Form.Group style ={{marginRight: '10px'}} >
                         <label style ={{marginRight: '10px',margin: '10px'}}>
                            <input  style={{marginRight: '5px'}} type="checkbox" checked={isLayout}  onChange={handleLayoutChange} />
                             Edit Layout</label>
                          <button style={{backgroundColor: isLayout?'red':'gray'}} disabled={!isLayout} onClick={updateLayoutDatabase} >Save</button>
                          
                          </Form.Group>
                          <Form.Group style ={{marginRight: '10px'}} >
                         <label style ={{marginRight: '10px',margin: '10px'}}>
                            <input  style={{marginRight: '5px'}} type="checkbox" checked={isAsset} onChange={handleAssetChange}/>
                             Edit Asset</label>
                          <button style={{backgroundColor: isAsset?'red':'gray'}} disabled={!isAsset}>Save</button>
                          </Form.Group>
                       
                      
                         <Form.Group style ={{marginRight: '10px'}}>
                        
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Out Of Service Er"
          onChange={handleRadioSwitchChange}
          checked={isRadioSwitchEnabled}
        />
       
      
                         </Form.Group>
                         <Form.Group style ={{marginRight: '10px'}}>
                         <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-checkbox"
                                  label="Out Of Service Cl1"
                                />
                         </Form.Group>

                         <div>
        
      </div>
                    </Form>
                    </Card.Body>

                </Card>
                </Col>
            </Row>
            
        </Container>
        
    </div>
    </Root>

  );
};
export default Admin;


















