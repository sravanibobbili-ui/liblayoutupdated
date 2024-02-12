import React from 'react';
import Form from 'react-bootstrap/Form';
import {Row,Col,Container,Button,Card} from 'react-bootstrap';
import { useState } from 'react';
import { FaSearchPlus, FaSearchMinus} from 'react-icons/fa';

const Dialog = () => {
    const [isLayout,setisLayout]= useState(false);
    const [isZoom,setisZoom]= useState(false);
    const [isAsset,setisAsset]= useState(false);
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
   
  return (
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
                            <input  style={{marginRight: '5px'}} type="checkbox" checked={isLayout} onChange={handleLayoutChange}/>
                             Edit Layout</label>
                          <button style={{backgroundColor: isLayout?'red':'gray'}} disabled={!isLayout}>Save</button>
                          </Form.Group>
                          <Form.Group style ={{marginRight: '10px'}} >
                         <label style ={{marginRight: '10px',margin: '10px'}}>
                            <input  style={{marginRight: '5px'}} type="checkbox" checked={isAsset} onChange={handleAssetChange}/>
                             Edit Asset</label>
                          <button style={{backgroundColor: isAsset?'red':'gray'}} disabled={!isAsset}>Save</button>
                          </Form.Group>
                       
                      
                         <Form.Group style ={{marginRight: '10px'}}>
                         <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-checkbox"
                                  label="Out Of Service ER"
                                />
                         </Form.Group>
                         <Form.Group style ={{marginRight: '10px'}}>
                         <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-checkbox"
                                  label="Out Of Service Cl1"
                                />
                         </Form.Group>


                    </Form>
                    </Card.Body>

                </Card>
                </Col>
            </Row>
            
        </Container>
        
    </div>
  );
}

export default Dialog;





