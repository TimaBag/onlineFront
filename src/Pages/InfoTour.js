import React,{Component} from 'react';
import { Row, Col, Card, Button, Input } from 'antd';

const Search = Input.Search;

class InfoTour extends Component{
  constructor(props){
    super(props);
  }
  

  render(){
    return(
      <div className="px-3 mt-3">
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Card title="Полеты на параплане в Алматы" bordered={false}>
              <img alt="example" src="https://parafly.kz/wp-content/uploads/2017/07/Parafly.jpg" />
              <p className="mt-1">Несмотря на тот факт, что я хожу в горы уже 2,5 года, есть еще множество неизведанных мною маршрутов, и БАП был одним из таких до недавнего времени. 26 мая…на часах 5:30 утра, а значит пора собираться в путь! Уже через час я была на месте, где всю группу встречал очень дружелюбный гид – Егор. Дождавшись всех, мы поехали на очень комфортабельном микро-автобусе к подножию горы. </p>
              <p>Стоит отметить преимущества транспорта: удобные сидения, а также большое расстояние между ними, открываются окна (что можно отметить далеко не во всех спринтерах). Доехали быстро и с удобством. Перед началом маршрута был проведен доступный инструктаж, что немаловажно. Также поразило, что гид знал всю группу в лицо и поименно. Еще у него было «лишнее» снаряжение, которым он радушно с нами поделился, за что огромное спасибо! </p>
              <p>Во время пешей части, Егор нашел подход к каждому туристу, выбрал оптимальный темп, отвечал на все вопросы, возникающие по ходу движения. Была создана очень дружелюбная позитивная атмосфера, а что самое главное, было чувство полной безопасности. Выражаю свою благодарность «Горному клубу» за проведенный хайк! Все было на высшем уровне!</p>
            </Card>
            <Card title="Полеты на параплане в Алматы" bordered={true} className="tout_comp_list mt-2">
              <Row gutter={24} className="flex item-cnt">
                <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{borderRight : "1px solid black"}}>
                  <h3 style={{textAlign : "center"}}>Campit</h3>
                  <div className="comp_logo">
                    <img src="http://campit.kz/static/logo.png" />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={15} lg={15} xl={15} style={{borderRight : "1px solid black"}}>
                  <div className="flex justify-around">
                    <div>
                      <div className="flex">
                        <span className="">Дата: 04 июня</span>
                      </div>
                      <div className="flex mt-1">
                        <span className="">Время: 13:53</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex">
                        <span className="">Группа: 20 человек</span>
                      </div>
                      <div className="flex mt-1">
                        <span className="">Осталось: 8</span>
                      </div>
                    </div>
                    <div className="flex flex-column item-cnt">
                      <h3>20000 kzt</h3>
                      <span>Цена за одного человека</span>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="flex item-cnt" style={{height : "100px"}}>
                  <Button type="primary" style={{margin : "0 auto",display : "block"}}>Выбрать</Button>
                </Col>
              </Row>
            </Card>
            <Card title="Полеты на параплане в Алматы" bordered={true} className="tout_comp_list mt-2 mb-2">
              <Row gutter={24} className="flex item-cnt">
                <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{borderRight : "1px solid black"}}>
                  <h3 style={{textAlign : "center"}}>Campit</h3>
                  <div className="comp_logo">
                    <img src="http://campit.kz/static/logo.png" />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={15} lg={15} xl={15} style={{borderRight : "1px solid black"}}>
                  <div className="flex justify-around">
                    <div>
                      <div className="flex">
                        <span className="">Дата: 04 июня</span>
                      </div>
                      <div className="flex mt-1">
                        <span className="">Время: 13:53</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex">
                        <span className="">Группа: 20 человек</span>
                      </div>
                      <div className="flex mt-1">
                        <span className="">Осталось: 8</span>
                      </div>
                    </div>
                    <div className="flex flex-column item-cnt">
                      <h3>20000 kzt</h3>
                      <span>Цена за одного человека</span>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="flex item-cnt" style={{height : "100px"}}>
                  <Button type="primary" style={{margin : "0 auto",display : "block"}}>Выбрать</Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card bordered={false}>
              <Button type="primary" className="book_btn mt-1">ЗАБРОНИРОВАТЬ</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default InfoTour;