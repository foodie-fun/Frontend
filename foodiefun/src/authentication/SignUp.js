import React, { Component } from 'react';
import { connect } from "react-redux";
import { signUp } from "../actions";

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
            <div>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    signedUp: state.signedUp,
})

export default connect(mapStateToProps, { signUp })(SignUp);