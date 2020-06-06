import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import InitiativeList from "./InitiativeList";
import InitiativeDetail from "../components/Initiatives/InitiativeDetail";

class Main extends React.Component {
  render() {
    return (
      <Container className="Main">
        <Row>
          <h5 className="mr-4 mt-2">Инициативы</h5>
          <div className="text-center">
            <Button className="rounded-inline-btn" variant="outline-primary">Все</Button>
            <Button className="rounded-inline-btn" variant="outline-primary">Недавние</Button>
            <Button className="rounded-inline-btn" variant="outline-primary">Сфера</Button>
            <Button className="rounded-inline-btn" variant="outline-primary">Деятельность</Button>
            <Button className="rounded-inline-btn" variant="outline-primary">Район</Button>
          </div>
        </Row>
        <hr/>
        <Row>
          <Col md={6}>
            По вашему запросу найдено Н инициатив
            <InitiativeList/>
          </Col>
          <Col md={6}>
            <InitiativeDetail/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main;