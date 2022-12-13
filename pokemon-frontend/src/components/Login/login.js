import React,{useState} from 'react'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
import { useNavigate } from 'react-router-dom';


const Login = () => {

const [loginUser, setLoginUser] = useState({
    email: "",
    password:"",
})

const navigate = useNavigate()

const handleChange = (e) =>{
    setLoginUser({...loginUser, [e.target.name]: e.target.value})
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    const loggedIn = await axios.post("http://localhost:3001/api/user/login", loginUser)
   
    if(loggedIn.status === 200){
        localStorage.setItem("token", loggedIn.data.token)
        navigate("/")
    }

}

  return (
    <div className='container'>
<Form onSubmit={handleSubmit} className='p-5 bg-light border my-5 col-lg-6 mx-auto'>

    <h2 className='mb-4'>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={loginUser.email}    
            name="email"
            onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
           type="password" 
           placeholder="Enter Password" 
           value={loginUser.password}    
           name="password"
           onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>

    </div>
  )
}

export default Login