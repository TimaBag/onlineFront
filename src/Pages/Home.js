import React, { Component } from 'react';
import { Card, Button, Rate, Tooltip, Carousel, Select } from 'antd';
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
    this.state={}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    console.log(e);
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <div className="home">
        <Carousel afterChange={this.onChange} autoplay>
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

        </div>
        <div className="flex justify-between p-3 flex-wrap">
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
      </div>
    );
  }
}

export default Home;