import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Input, Modal } from 'antd';
import * as actions from '../actions/placesActions';
import * as actionsEvents from '../actions/eventsActions';
import * as actionsCompany from '../actions/companyActions';

class InfoTour extends Component {

  componentDidMount(){
    this.props.onGetPlace();
    this.props.onGetEvent(parseInt(this.props.match.params.eventId));
    this.props.onGetCompany();
  }

  render() {
    console.log(this.props.events)
    if(this.props.events.length !== 0){
      return (
        <div>
          <Card className="mt-2" title="О компаний" bordered={false}>
            <h2>CAMPIT</h2>
            <p>Компания Campit занимается организацией пеших походов, 
            экскурсионных выездов по туристическим направлениям г.Алматы и Алматинской области,
            а также организацией других различных мероприятий. 
            Мы открываем новые места и новый Казахстан!</p>
            <p>Наша цель - Развитие туризма в Казахстане. 
    Мы призываем каждого вести активный и здоровый образ жизни!</p>
          </Card>
          <Card className="mt-2" title="О туре" bordered={false}>
            <h2>{this.props.events[0].name}</h2>
            {this.props.events[0].description}
            <h2>Местоположения</h2>
            <div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff81af1008b5dd72d30b3d4ed8e9a9dd0bfb369ac20acab481c14adb89b696d8&amp;source=constructor" width="100%" height="340" frameBorder="0"></iframe>
            </div>
            <Row gutter={24}>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Button className="mt-2" type="primary"><Link to='/book'>Забронировать</Link></Button>
              </Col>
            </Row>
          </Card>
        </div>
      );
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
  company : state.company.companyList
})

const mapDispatchToProps = {
  onGetPlace : actions.getPlaces,
  onGetEvent : actionsEvents.getEvents,
  onGetCompany : actionsCompany.getCompany,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoTour);