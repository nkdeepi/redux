import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurent } from './Action';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const dispatch = useDispatch();
    const restaurentReducer=useSelector((state)=>state.restReducer)
    const { restaurent } = restaurentReducer
    console.log(restaurent)
    console.log("data in home page",restaurentReducer)

    useEffect(()=>{
    dispatch(listRestaurent())    
    },[])
  return (

    <div>
       {restaurent.map((value)=>
       <>
       
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={value.photograph} style={{height:"200px",width:"200px"}} />
      <Card.Body>
        <Card.Title>{value.name}</Card.Title>
        <Card.Text>
       {value.address}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
       </>
      
        
           
            
            
        
       )}




    </div>
  )
}

export default Home