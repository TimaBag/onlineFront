import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button, Input, Form } from 'antd';
import Login from './Login';
import Registration from './Registration';

import logo from '../logo_dark.png';

const FormItem = Form.Item;

class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      visibleLog : false,
      visibleReg : false
    }
    this.showModalLogin = this.showModalLogin.bind(this);
    this.showModalReg = this.showModalReg.bind(this);
  }
  componentDidMount() {
    
  }

  showModalLogin(){
    this.setState({
      visibleLog : true
    })
  }

  showModalReg(){
    this.setState({
      visibleReg : true
    })
  }

  handleLogin(submitlogin){
    console.log(submitlogin);
    this.setState({
      visibleLog: false,
    });
  }
  handleLoginCancel(cancelLogin){
    console.log(cancelLogin);
    this.setState({
      visibleLog: false,
    });
  }

  handleReg(submitReg){
    this.setState({
      visibleReg: false,
    });
  }
  handleRegCancel(cancelReg){
    this.setState({
      visibleReg: false,
    });
  }

  render(){
    return(
      <div className="flex justify-between item-cnt">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Туры</Menu.Item>
            <Menu.Item key="2">Новости</Menu.Item>
            <Menu.Item key="3">Компаний</Menu.Item>  
          </Menu>
        </div>
        <div className="logIn flex flex-direct">
          <div>
            <p className="logIn_p">БРОНИРУЙ</p>
            <p className="logIn_p">БЫСТРО И УДОБНО</p>
          </div>
          <div className="flex jus">
            <div
              onClick={this.showModalReg} 
              className="logIn_btn"
            >Регистрироваться</div>
            <div
              onClick={this.showModalLogin} 
              className="logIn_btn ml-1"
            >Войти</div>
          </div>
        </div>
        {
          this.state.visibleLog 
          && 
          <Login 
            showLog={this.state.visibleLog}
            loginSubmit = { (submitLogin) => this.handleLogin(submitLogin)}
            loginCancel = { (cancelLogin) => this.handleLoginCancel(cancelLogin)}
          />
        }
        {
          this.state.visibleReg 
          && 
          <Registration 
            showReg={this.state.visibleReg}
            regSubmit = { (submitReg) => this.handleReg(submitReg)}
            regCancel = { (cancelReg) => this.handleRegCancel(cancelReg)}
          />
        }
      </div>
    )
  }
}

export default Header;