import React from "react";
import "./current-weather.scss";

class CurrentWeather extends React.Component {
  render() {
    const temperature = this.props.current.temp;
    const description = this.props.current.weather[0].description;
    const countr = this.props.current.name;


    const image = {
      url: `http://openweathermap.org/img/wn/${this.props.current.weather[0].icon}@4x.png`,
      alt: `Image of  ${this.props.current.weather[0].description}`,
    };
    const feelsLike = this.props.current.feels_like;
    const count = this.props.current.pressure;
    const human = this.props.current.humidity;
    const temp = this.props.current.temp_min;


    return (
      <div className="current-weather">
        <div className="current-weather__main-content">
          <div>

            <span className="current-weather__temperature">
           <h1>{countr}</h1>  
              {temperature}
              <span className="current-weather__degree">°</span>
            </span>
            <p className="current-weather__description">{description}</p>
          </div>

          <img width="150" src={image.url} alt={image.alt} />
        </div>

        <div style={{opacity:'.5',backgroundColor:'#0f1113',padding:'50px 200px'}}>
        <p>Pressure <span style={{marginLeft:'40px'}}>Feels like</span><span style={{marginLeft:'40px'}}>humidity</span></p>
        <p>{count}°<span style={{marginLeft:'70px'}}> {feelsLike}°</span><span style={{marginLeft:'70px'}}> {human}</span></p>
        <p>temp_min <span style={{marginLeft:'40px'}}>temp_max</span></p>
        <p>{count}°<span style={{marginLeft:'70px'}}> {feelsLike}°</span></p>

        </div>
      </div>
    );
  }
}

export default CurrentWeather;
