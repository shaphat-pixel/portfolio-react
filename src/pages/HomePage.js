import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import InputGroup from 'react-bootstrap/InputGroup';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from 'react-twitter-embed'


const HomePage = () => {
    const history = useHistory();


    const [homeClick, setHomeClick] = useState()
    const [communitiesClick, setCommunitiesClick] = useState()
    const [notificationsClick, setNotificationsClick] = useState()
    const [contactClick, setContactClick] = useState()
    const [profileClick, setProfileClick] = useState()
    const [hashClick, setHashClick] = useState()



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    const activeHome = () => {
        setHomeClick(true)
        setCommunitiesClick(false)
        setNotificationsClick(false)
        setContactClick(false)
        setProfileClick(false)
        setHashClick(false)
    }

    const activeCommunities = () => {
        setCommunitiesClick(true)
        setHomeClick(false)
        setNotificationsClick(false)
        setContactClick(false)
        setProfileClick(false)
        setHashClick(false)
        history.push("/projects")
        }

    const activeNotifications = () => {
        setNotificationsClick(true)
        setCommunitiesClick(false)
        setHomeClick(false)
        setContactClick(false)
        setProfileClick(false)
        setHashClick(false)
        history.push("/articles")

    }

    const activeContact = () => {
        setContactClick(true)
        setCommunitiesClick(false)
        setHomeClick(false)
        setNotificationsClick(false)
        setProfileClick(false)
        setHashClick(false)
        handleShow()

    }

    const activeProfile = () => {
        setProfileClick(true)
        setCommunitiesClick(false)
        setHomeClick(false)
        setNotificationsClick(false)
        setContactClick(false)
        setHashClick(false)
        history.push("/my-profile")
        
    }

    const activeHash = () => {
        setHashClick(true)
        setCommunitiesClick(false)
        setHomeClick(false)
        setNotificationsClick(false)
        setContactClick(false)
        setProfileClick(false)
        history.push("/twitter-builds")

    }

   

    useEffect(() => {
        
        
        
       }, []);
    
  return (
   
        <div className="">

       
           <Container  fluid className="margin">
            

            
            <Navbar bg="">
                
            <Row className="name" > <Col ><Navbar.Brand >Shaphat</Navbar.Brand></Col></Row>
                <div>
                <Row  className="">
                    <Col xs={20}>
                        <div className="">
                        <Form >
                        <InputGroup className="mb-3">
                    <input placeholder="   search"/>
        
      </InputGroup>
                        </Form>
                        </div>
                    </Col>
                
                
                </Row>
                </div>
            </Navbar> 
            <Row className="margin" >   
                <Col xs={2}>
                    <div onClick={activeHome} className="ripple nav-button"><a href="#"> { homeClick == true? <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"/> : <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"/>}</a>  Home </div><br/><br/>
                    <div onClick={activeProfile} className="ripple nav-button"><a href="#">{profileClick==true? <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/266/266033.png"/>: <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/266/266134.png"/>}</a> My Profile </div><br/><br/>
                    <div onClick={activeCommunities} className="ripple nav-button"><a href="#"> { communitiesClick ==true? <img width ="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/4121/4121044.png"/>: <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/4122/4122832.png"/>}</a> Projects</div><br/><br/>
                    <div onClick={activeHash} className="ripple nav-button"><a href="#"> { hashClick ==true? <img width ="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/1946/1946421.png"/>: <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/1946/1946473.png"/>}</a> Twitter builds</div><br/><br/>
                    <div onClick={activeNotifications} className="ripple nav-button"><a href="#">{notificationsClick==true? <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png"/>: <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/2529/2529521.png"/>}</a> Articles </div><br/><br/>
                    <div onClick={activeContact} className="ripple nav-button"><a href="#">{contactClick==true? <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/3059/3059474.png"/>: <img width="30px" height="30px" src="https://cdn-icons-png.flaticon.com/512/2907/2907765.png"/>}</a> Contact me </div><br/><br/>
                </Col>
                <Col className="border" xs={7}>
                  third grid
                </Col>
                <Col className="trends">third col</Col>
            </Row>
           </Container>


           <>

<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Write to me</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          autoFocus
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Enter message here</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Send
    </Button>
  </Modal.Footer>
</Modal>
</>

       
        </div>
  );
};
export default HomePage;
