import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {  } from "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./search-bar.scss";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onFormSubmit();
  }

  render() {
    const searchValue = this.props.searchValue;

    return (
      <div className="search-bar">
        <h1 style={{fontSize:'32px',fontWeight:'bolder',color:'white',fontWeight:'bold'}}>Weather APP</h1>
        <Container>
          <Row>
            <Col md="6" style={{marginTop:'200px',marginLeft:'200px'}}>
            <form className="search-form" onSubmit={this.handleSubmit}>
           
          <input
            className="search-form__input"
            type="text"
            id="searchBox"
            name="searchBox"
            value={searchValue}
            className="form-control"
            onChange={this.handleChange}
            placeholder="New York"
            style={{borderRadius:'15px'}}
          />
        </form>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default SearchBar;
