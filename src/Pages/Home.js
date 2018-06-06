import React, { Component } from 'react';
import { Card, Button, Rate, Tooltip } from 'antd';
const { Meta } = Card;

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
    this.state={}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e);
  }

  render() {
    return (
      <div className="home flex justify-between p-3 flex-wrap">
        <Tooltip placement="right" title={text}>
          <Card
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="http://gorny-club.kz/wp-content/uploads/2017/04/2016_0101_000020_005-1150x550.jpg" />}
          >
            <Meta
              description="www.instagram.com"
              title="«Аксайская Кругосветка», 5 дней"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="http://elitefon.ru/images/201211/elitefon.ru_7389.jpg" />}
          >
            <Meta
              description="www.instagram.com"
              title="Большое Алматинское озеро"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            className="mt-2"
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            className="mt-2"
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            className="mt-2"
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Card
            className="mt-2"
            hoverable
            style={{ width: "22%" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              description="www.instagram.com"
              title="Tour of Kazakhstan"
            /> 
            <Rate className="mt-1" />
          </Card>
        </Tooltip>
      </div>
    );
  }
}

export default Home;