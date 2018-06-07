import React, { Component } from 'react';
import { Card, Button, Rate, Tooltip, Carousel, Select, Row, Col, DatePicker, Modal } from 'antd';

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

  render() {
    return (
      <div className="home">
        <Carousel autoplay>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />
            <div className="overlay" />
            <div className="under_img">
              <h1>OnlineBooking</h1>
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />
            <div className="overlay" />
            <div className="under_img">
              <h1>OnlineBooking</h1>
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />
            <div className="overlay" />
            <div className="under_img">
              <h1>OnlineBooking</h1>
              <span className="subtitle mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
            </div>
          </div>
          <div className="flex item-cnt justify-center">
            <img style={{height : 400}} alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />
            <div className="overlay" />
            <div className="under_img">
              <h1>OnlineBooking</h1>
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
          <Row gutter={24} className="mb-1">
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />}
              >
                <Meta
                  description={<p>Трудности, Путешествие, Познание себя, Преодоление и Победы над собой.Трудности, Путешествие, Познание себя, Преодоление и Победы над собой</p>}
                  title={<a href="#">«Аксайская Кругосветка», 5 дней</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />}
              >
                <Meta
                  description="Трудности, Путешествие, Познание себя, Преодоление и Победы над собой"
                  title={<a href="#">Большое Алматинское озеро</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="https://parafly.kz/wp-content/uploads/2017/07/Parafly.jpg" />}
              >
                <Meta
                  description="Подарите себе и близким незабываемое приключение"
                  title={<a href="#">Полеты на параплане в Алматы</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />}
              >
                <Meta
                  description="Трудности, Путешествие, Познание себя, Преодоление и Победы над собой"
                  title={<a href="#">«Аксайская Кругосветка», 5 дней</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />}
              >
                <Meta
                  description="Трудности, Путешествие, Познание себя, Преодоление и Победы над собой"
                  title={<a href="#">Большое Алматинское озеро</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  description="www.instagram.com"
                  title={<a href="#">Tour of Kazakhstan</a>}
                /> 
                <div className="flex item-cnt justify-between mt-2">
                  <a className="logIn_p" onClick={this.showModal}>ИНФОРМАЦИЯ</a>
                  <Button type="primary">ЗАБРОНИРОВАТЬ</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        {this.state.visible && this.renderInfoModal()}
      </div>
    );
  }
}

export default Home;