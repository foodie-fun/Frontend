import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

changeHandler = e => {
    this.setState({
    credentials: {...this.state.credentials, [e.target.name]: e.target.value}
    })
}

login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => {
        this.props.history.push('/home')
    })
}

    render() {
        if ( this.props.isLoggingIn) {
            return <p>LOGGING IN...</p>
        }
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h3>Welcome To FoodieFun!</h3>
                    <Form onSubmit={this.login} inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="username" className="mr-sm-2">Username</Label>
                            <Input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Username"
                                value={this.state.credentials.username}
                                onChange={this.changeHandler}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="password" className="mr-sm-2">Password</Label>
                            <Input 
                                type="password" 
                                name="password" 
                                value={this.state.credentials.password}
                                onChange={this.changeHandler} 
                                id="password" 
                                placeholder="Password"
                                required
                            />
                        </FormGroup>
                        {/* <Button>Register Account</Button> */}
                        <div className="createAccount">
                            <Button type="submit">Login</Button>
                        </div>
                    </Form>
                </div>
            </div>
            // <>
            //     <form onSubmit={this.login} >
            //         <input 
            //             type='text' 
            //             name='username'                       
            //             value={this.state.credentials.username}
            //             placeholder='username'
            //             onChange={this.changeHandler}
            //         />
            //         <input 
            //             type='password' 
            //             name='password'
            //             value={this.state.credentials.password}
            //             placeholder='password'
            //             onChange={this.changeHandler}
            //         />
            //         <button>Log In</button>
            //     </form>
            // </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
})

export default connect(mapStateToProps, { login })(Login);