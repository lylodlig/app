import React from 'react'
import './login.css'
import {Button, Form, Icon, Input} from "antd";
import {connect} from 'react-redux'
import {ActionLogin} from './reducer'
import {store} from './../../index'

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        console.log(this.props)
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.login()
            }
        });
    }

    render() {
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <h1>{this.props.isLogin ? "已登陆" : "未登录"}</h1>
                <div>{this.props.isLogin}====</div>
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Form.Item
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </Form.Item>
                    <Form.Item
                        validateStatus={passwordError ? 'error' : ''}
                        help={passwordError || ''}
                    >
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={hasErrors(getFieldsError())}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({name: 'horizontal_login'})(HorizontalLoginForm);


function Login(props) {
    console.log("login")
    console.log(props)

    function login() {
        console.log("调用函数")
        props.history.push({pathname: '/home/:test', query: {name: "sdfhk"}})
    }

    return (
        <div className="body">
            <div className="content shadow">
                <Button className="btn" onClick={login}>143</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isLogin: state.isLogin,
})
const mapDispatchToProps = dispatch => ({
    login: () => dispatch(ActionLogin(true))
})
export default connect(mapStateToProps, mapDispatchToProps)(WrappedHorizontalLoginForm)