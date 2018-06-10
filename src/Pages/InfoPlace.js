import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Input, Modal } from 'antd';
import * as actions from '../actions/placesActions';
import * as actionsEvents from '../actions/eventsActions';

class InfoPlace extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
    
  }
  
  componentDidMount(){
    this.props.onGetPlace();
    this.props.onGetEvent(parseInt(this.props.match.params.placeId));
  }

  renderEvents(event,index,placeId){
    return(
      <Card key={index} bordered={true} className="tout_comp_list mt-2 mb-2">
        <Row gutter={24} className="flex item-cnt">
          <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{borderRight : "1px solid black"}}>
            <div className="comp_logo">
              <img src="http://campit.kz/static/logo.png"/>
            </div>
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{borderRight : "1px solid black"}}>
            <Row>
              <Col span={12}>
                <h3 style={{textAlign : "center"}}>{event.company_name}</h3>
              </Col>
              <Col span={12}>
                <div>
                  <span className="">Дата/Период: {event.date}</span>
                </div>
                <div className=" mt-1">
                  <span className="">Стоимость: {event.price} тенге</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={4} lg={4} xl={4} className="flex item-cnt justify-center flex-column" style={{height : "100px"}}>
            <Button type="primary"><Link to={"/tour/"+placeId}>Выбрать</Link></Button>
          </Col>
        </Row>
      </Card>
    )
  }

  render(){
    console.log(this.props.events);
    const placeId = this.props.match.params.placeId;
    if(this.props.places.length !== 0){
      const place = this.props.places.filter((place) => place.id === parseInt(this.props.match.params.placeId))[0];
      
      return(
        <div className="px-3 mt-3">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <Card title={place.name} bordered={false}>
                {place.info}
              </Card>
              <h2 className="my-2">Стоимость полетов</h2>
              {this.props.events.map((event,index) => this.renderEvents(event,index,placeId))}
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Card bordered={false}>
                <Button type="primary" className="book_btn mt-1">ЗАБРОНИРОВАТЬ</Button>
              </Card>
            </Col>
          </Row>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  places : state.place.placesList,
  events : state.event.eventsList,
})

const mapDispatchToProps = {
  onGetPlace : actions.getPlaces,
  onGetEvent : actionsEvents.getEvents,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoPlace);