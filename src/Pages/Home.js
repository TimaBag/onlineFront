import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Rate, Tooltip, Carousel, Select, Row, Col, DatePicker, Modal } from 'antd';
import * as actions from '../actions/placesActions';

const { RangePicker } = DatePicker;
const { Meta } = Card;
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

const text =  
  <Card style={{ width : 300 }}>
    <p>Один полный (выходной) день недели, будет посвящен Восхождению! Каждый в проекте будет покорять свою внутреннюю Вершину!
     Для многих это будет Эко- тур путешествие по нашим прекрасным и красивейшим горным пейзажам; для кого то Ретрит- Медитация на пути к истинному себе;</p>
    <div className="comps_logo flex mt-1">
      <div className="comp_logo ml-1" />
      <div className="comp_logo ml-1" />
      <div className="comp_logo ml-1" />
    </div>
  </Card>;

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      visible : false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount(){
    this.props.onGetPlace();
  }

  showModal(){
    this.setState({
      visible: true,
    });
  }
  handleOk(e){
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel(e){
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleClick(e){
    console.log(e);
  }

  onChange(e) {
    console.log(e);
  }

  renderInfoModal(){
    return(
      <Modal
        title="«Аксайская Кругосветка», 5 дней"
        footer={[
          <Button type="primary" onClick={this.handleOk}>
            Закрыть
          </Button>,
        ]}
        visible={this.state.visible}
        onCancel={this.handleCancel}
      >
        <img alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />
        <p>Поход «Аксайская Кругосветка» — авторский треккинг-маршрут по Заилийскому Алатау от Горного Клуба Алматы, он пролегает через несколько природных зон: густые леса, альпийские луга, зоны ледников и моренных отложений.
        Для более комфортного прохождения, предлагаем Вам пройти его за 5 дней, примерно по 8-10 км ходьбы в день.</p> 
        <p>Гиды будут с Вами на протяжении всего похода, проследят за безопасностью, помогут преодолеть трудности, поделятся советами. А также, подсобят в приготовлении пищи и вкусного горного чая.</p>
        <p>В походе может участвовать любой здоровый человек, в средней физической форме, старше 18 лет. Ждём желающих окунуться в романтику походной жизни, испытать себя, зарядиться энергией вдали от городского шума. Специального снаряжения не понадобится.</p>
      </Modal>
    )
  }

  renderPlace(place,index){
    return(
      <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8} className="mb-1">
        <Card
          hoverable
          cover={<img alt="example" src={place.image_url} />}
        >
          <Meta
            description={place.description}
            title={<Link to="/">{place.name}</Link>}
          /> 
          <div className="flex item-cnt justify-between mt-2">
            <Link to={"/info/"+place.id} className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</Link>
            <Button type="primary"><Link to="/book">ЗАБРОНИРОВАТЬ</Link></Button>
          </div>
        </Card>
      </Col>
    )
  }

  render() {
    console.log(this.props.places)
    return (
      <div className="home">
        <Carousel autoplay className="mt-2">
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />
            <div className="overlay" />
            <div className="under_img"> 
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />
            <div className="overlay" />
            <div className="under_img"> 
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />
            <div className="overlay" />
            <div className="under_img"> 
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />
            <div className="overlay" />
            <div className="under_img"> 
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
        </Carousel>
        <div className="filter p-3">
          <Select
            showSearch
            style={{ width: 300 }}
            placeholder="Выбрать город"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>

          <Select
            className="ml-3"
            showSearch
            style={{ width: 300 }}
            placeholder="Выбрать категорию"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>

          <RangePicker onChange={this.onChange} className="ml-3" placeholder={["Начало тура","Конец тура"]} />
        </div>
        <div className="flex justify-between px-3 flex-wrap pb-2">
          <Row gutter={24}>
            {this.props.places.map((place,index) => this.renderPlace(place,index))}
            
          </Row>
        </div>
        {this.state.visible && this.renderInfoModal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places : state.place.placesList,
})

const mapDispatchToProps = {
  onGetPlace : actions.getPlaces,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);