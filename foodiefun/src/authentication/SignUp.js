import React, { Component } from 'react';
import { connect } from "react-redux";
import { signUp } from "../actions";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class SignUp extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });
    };

    submitHandler = (e,userInfo) => {
        e.preventDefault();
        this.props.signUp(userInfo)
        this.setState({
            userInfo: {
                username: '',
                password: ''
            }
        })
        this.props.history.push('/login')
    }


    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h3>Welcome To FoodieFun!</h3>
                    <Form onSubmit={e => this.submitHandler(e, this.state.userInfo)} inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="username" className="mr-sm-2">Username</Label>
                            <Input 
                                type="text" 
                                name="username" 
                                id="username" 
                                placeholder="Register A Username"
                                value={this.state.userInfo.username}
                                onChange={this.changeHandler}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="password" className="mr-sm-2">Password</Label>
                            <Input 
                                type="password" 
                                name="password" 
                                value={this.state.userInfo.password}
                                onChange={this.changeHandler} 
                                id="password" 
                                placeholder="Register A Password"
                                required
                            />
                        </FormGroup>
                        {/* <Button>Register Account</Button> */}
                        <div className="createAccount">
                            <Button type="submit">Register Account</Button>
                        </div>
                    </Form>
                </div>
                {/* <div>
                                <form onSubmit={e => this.submitHandler(e, this.state.userInfo)}>
                                <input 
                                        type='text' 
                                        name='username'                       
                                        value={this.state.userInfo.username}
                                        placeholder='Set Up A Username'
                                        onChange={this.changeHandler}
                                    />
                                    <input 
                                        type='password' 
                                        name='password'
                                        value={this.state.userInfo.password}
                                        placeholder='Set Up A Password'
                                        onChange={this.changeHandler}
                                    />
                                    <button>Register Account</button>
                                </form>
                            </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    signedUp: state.signedUp,
})

export default connect(mapStateToProps, { signUp })(SignUp);
