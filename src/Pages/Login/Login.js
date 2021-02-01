import React from 'react';
import Button from "react-bootstrap/Button";
class Login extends React.Component {

    render() {
        return <div>
            <h1  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="m-2 float">Welcome</h1>
            <Button className="m-1" variant="success">Login With Google</Button>
            <Button className="m-1" variant="primary">Login With Facebook</Button>
            <Button className="m-1" variant="secondary">Login as Guest</Button>
        </div>
    }

}
export default Login;