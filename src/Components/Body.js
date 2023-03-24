import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, InputGroup, Form, Button, Card } from "react-bootstrap";
import { GetData } from './Data/DataServices';
import "../App.css";


export default function Body() {
const [weatherData, weatherDataSet] = useState('');
const [cityLocation, setCityLocation] = useState('');
const [currentTemp, setCurrentTemp] = useState('');
const [maxTemp, setMaxTemp] = useState('');
const [minTemp, setMinTemp] = useState('');
const [description, setDescription] = useState('');
const [iconImage, setIconImage] = useState('');

//Tues
const [cityLocation1, setCityLocation1] = useState("");
const [currentTemp1, setCurrentTemp1] = useState("");
const [maxTemp1, setMaxTemp1] = useState("");
const [minTemp1, setMinTemp1] = useState("");
const [description1, setDescription1] = useState("");

const [iconImage1, setIconImage1] = useState("");

//Wed
const [cityLocation2, setCityLocation2] = useState("");
const [currentTemp2, setCurrentTemp2] = useState("");
const [minTemp2, setMinTemp2] = useState("");
const [maxTemp2, setMaxTemp2] = useState("");
const [description2, setDescription2] = useState("");
const [iconImage2, setIconImage2] = useState("");

//Thur
const [cityLocation3, setCityLocation3] = useState("");
const [currentTemp3, setCurrentTemp3] = useState("");
const [minTemp3, setMinTemp3] = useState("");
const [maxTemp3, setMaxTemp3] = useState("");
const [description3, setDescription3] = useState("");

const [iconImage3, setIconImage3] = useState("");

//Fri
const [cityLocation4, setCityLocation4] = useState("");
const [currentTemp4, setCurrentTemp4] = useState("");
const [minTemp4, setMinTemp4] = useState("");
const [maxTemp4, setMaxTemp4] = useState("");
const [description4, setDescription4] = useState("");

const [iconImage4, setIconImage4] = useState("");


useEffect( () => {
  
  const AsyncGetData = async() => {
   let weather = await GetData()
   weatherDataSet(weather.city.name);
   console.log(weather.list[0].main.temp)
  }
   AsyncGetData()
}, [])


  return (
    <div>
      <Row>
        <Col>
          <p className='text-center display-4'>5 Days Forecast</p>
        </Col>
      </Row>

      <Row>
        <Col className='ms-5'>
          <div>
            <Form.Control className='input-field' size='sm' />
            <Button
              onClick={async () => {
                let newWeather = await GetData();
                weatherDataSet(newWeather.city.name);
                // console.log(newWeather.list[0].main.temp)
                let currentTemp = newWeather.list[0].main.temp;
                setCurrentTemp(currentTemp);
                let maxTemp = newWeather.list[0].main.temp_max;
                setMaxTemp(maxTemp);
                // weatherDataSet(newWeather.city.id);
                let minTemp = newWeather.list[0].main.temp_min;
                setMinTemp(minTemp);
                let description = newWeather.list[0].weather[0].description;
                setDescription(description);
                let iconImage = newWeather.list[0].weather[0].icon;
                setIconImage(iconImage);
                

                // let cityLocation = newWeather.list[0].name;
                // setCityLocation(cityLocation);
                // console.log(cityLocation);
                //tuesday
                let currentTemp1 = newWeather.list[8].main.temp;
                setCurrentTemp1(currentTemp1);

                let maxTemp1 = newWeather.list[8].main.temp_max;
                setMaxTemp1(maxTemp1);

                let minTemp1 = newWeather.list[8].main.temp_min;
                setMinTemp1(minTemp1);

                let description1 = newWeather.list[8].weather[0].description;
                setDescription1(description1);

                let iconImage1 = newWeather.list[8].weather[0].icon;
                setIconImage1(iconImage1);

                //wednesday
                let currentTemp2 = newWeather.list[16].main.temp;
                setCurrentTemp2(currentTemp2);

                let maxTemp2 = newWeather.list[16].main.temp_max;
                setMaxTemp2(maxTemp2);

                let minTemp2 = newWeather.list[16].main.temp_min;
                setMinTemp2(minTemp2);

                let description2 = newWeather.list[16].weather[0].description;
                setDescription2(description2);

                let iconImage2 = newWeather.list[16].weather[0].icon;
                setIconImage2(iconImage2);

                //thursday
                let currentTemp3 = newWeather.list[24].main.temp;
                setCurrentTemp3(currentTemp3);

                let maxTemp3 = newWeather.list[24].main.temp_max;
                setMaxTemp3(maxTemp3);

                let minTemp3 = newWeather.list[24].main.temp_min;
                setMinTemp3(minTemp3);

                let description3 = newWeather.list[24].weather[0].description;
                setDescription3(description2);

                let iconImage3 = newWeather.list[24].weather[0].icon;
                setIconImage3(iconImage3);

                //friday
                let currentTemp4 = newWeather.list[32].main.temp;
                setCurrentTemp4(currentTemp4);

                let maxTemp4 = newWeather.list[32].main.temp_max;
                setMaxTemp4(maxTemp4);

                let minTemp4 = newWeather.list[32].main.temp_min;
                setMinTemp4(minTemp4);

                let description4 = newWeather.list[32].weather[0].description;
                setDescription4(description4);

                let iconImage4 = newWeather.list[32].weather[0].icon;
                setIconImage4(iconImage4);
              }}
            >
              Enter City or ZipCode
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className='d-flex justify-content-center'>
          <h2>MONDAY</h2>
        </Col>
        <Col>
          <h2>TUESDAY</h2>
        </Col>
        <Col>
          <h2>WEDNESDAY</h2>
        </Col>
        <Col>
          <h2>THURSDAY</h2>
        </Col>
        <Col>
          <h2>FRIDAY</h2>
        </Col>
      </Row>

      <Row>
        <Col className='d-flex justify-content center'>
          <Card style={{ width: "12rem", borderRadius: "20px" }}>
            <Card.Img
              variant='top'
              src={`https://openweathermap.org/img/wn/${iconImage}@2x.png`}
            />
            <Card.Body
              style={{
                fontSize: "14px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <Card.Title>CURRENT TEMP</Card.Title>
              <li>City:{weatherData}</li>
              <li>TEMP:{currentTemp}</li>
              <li>MAX TEMP:{maxTemp}</li>
              <li>MIN TEMP:{minTemp}</li>
              <li>DESCRIPTION:{description}</li>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content center'>
          <Card style={{ width: "12rem", borderRadius: "20px" }}>
            <Card.Img
              variant='top'
              src={`https://openweathermap.org/img/wn/${iconImage1}@2x.png`}
            />
            <Card.Body
              style={{
                fontSize: "14px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <Card.Title>CURRENT TEMP</Card.Title>
              <li>City:{weatherData}</li>
              <li>TEMP:{currentTemp1}</li>
              <li>MAX TEMP:{maxTemp1}</li>
              <li>MIN TEMP:{minTemp1}</li>
              <li>DESCRIPTION:{description1}</li>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content center'>
          <Card style={{ width: "12rem", borderRadius: "20px" }}>
            <Card.Img
              variant='top'
              src={`https://openweathermap.org/img/wn/${iconImage2}@2x.png`}
            />
            <Card.Body
              style={{
                fontSize: "14px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <Card.Title>CURRENT TEMP</Card.Title>
              <li>City:{weatherData}</li>
              <li>TEMP:{currentTemp2}</li>
              <li>MAX TEMP:{maxTemp2}</li>
              <li>MIN TEMP:{minTemp2}</li>
              <li>DESCRIPTION:{description2}</li>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content center'>
          <Card style={{ width: "12rem", borderRadius: "20px" }}>
            <Card.Img
              variant='top'
              src={`https://openweathermap.org/img/wn/${iconImage3}@2x.png`}
            />
            <Card.Body
              style={{
                fontSize: "14px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <Card.Title>CURRENT TEMP</Card.Title>
              <li>City:{weatherData}</li>
              <li>TEMP:{currentTemp3}</li>
              <li>MAX TEMP:{maxTemp3}</li>
              <li>MIN TEMP:{minTemp3}</li>
              <li>DESCRIPTION:{description3}</li>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content center'>
          <Card style={{ width: "12rem", borderRadius: "20px" }}>
            <Card.Img
              variant='top'
              src={`https://openweathermap.org/img/wn/${iconImage4}@2x.png`}
            />
            <Card.Body
              style={{
                fontSize: "14px",
                backgroundColor: "lightgreen",
                borderRadius: "5px",
              }}
            >
              <Card.Title>CURRENT TEMP</Card.Title>
              <li>City:{weatherData}</li>
              <li>TEMP:{currentTemp4}</li>
              <li>MAX TEMP:{maxTemp4}</li>
              <li>MIN TEMP:{minTemp4}</li>
              <li>DESCRIPTION:{description4}</li>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
