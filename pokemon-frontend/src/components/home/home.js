import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Home = () => {
const [data, setData] = useState([])

let token = localStorage.getItem("token");
useEffect(()=>{
        getPokemons();
    },[]);


    const getPokemons = async () =>{
        const pokemons = await axios("http://localhost:3001/api/pokemon/pokemons", {headers:{
            'token':token
        }}) 
        setData(pokemons.data.pokemons)

    }

    return (
    <div className='container'>
{
data.map((e, ind)=>{
    return (
    <Card className="m-2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.images.large} />
      <Card.Body>
        <Card.Title><strong>{e.name}</strong></Card.Title>
        <div>
        <Card.Text>
          <h6>Attcks:</h6>
        </Card.Text>
        <p>
        {    e.attacks.map((name)=>{
                 return name.name + ", "
             })
        }
        </p>
        </div>

        <div>
        <Card.Text>
          <h6>Abilities:</h6>
        </Card.Text>
        <p>
        {    e.abilities.map((name)=>{
                 return name.name + ", "
             })
        }
        </p>
        </div>
      </Card.Body>
    </Card>)

})
}

    </div>
  )
}

export default Home