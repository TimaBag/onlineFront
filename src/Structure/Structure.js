import React,{Component} from 'react';
import MainComponent from '../Pages/Main';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    
  }

  render(){
    return(
      <div>
        <Layout className="layout">
          <Header><HeaderComponent/></Header>
          <Content><MainComponent/></Content>
          <Footer><FooterComponent/></Footer>
        </Layout>
      </div>
    )
  }
}

export default App;