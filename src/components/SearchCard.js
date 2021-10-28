import React from 'react'
import {Card, Row, Col, Container, ProgressBar, Alert} from "react-bootstrap"
function SearchCard({name,img, abilities, stats, type, weight, height}) {
    console.log(name, img, abilities, stats, type, weight, height );
    var nae = name.toUpperCase();
    nae = nae.substr(0,1);
    var remnm = name.substring(1);
    var fnm = nae + remnm;
    return (
        <div>
            { img.length > 0 ? 
                <Container className= "mt-6">
                <Row className = "mt-10">
                    <Col xs = {12} md = {6}>
                        <Card>
                            <Card.Header>
                            <img src = {img} alt = {name} />
                             <h1>{fnm}</h1>
                            </Card.Header>
                                <Card.Body>
                                    <h5>
                                        Abilities
                                    </h5>
                                    {
                                        abilities.map((ability,idx)=>{
                                            return(
                                            <div key = {idx}>
                                                {ability}
                                            </div>)
                                        })
                                }</Card.Body>
                            <Card.Body>
                                <strong>
                                    weight</strong> :   {Math.round(((weight * 0.1) + Number.EPSILON) * 100) / 100} kg
                                <br/>
                                <strong>
                                    height</strong> :   {Math.round(((height * 0.1) + Number.EPSILON) * 100) / 100} m
                            </Card.Body>
                            <Card.Body>
                                    <h5>
                                        Types
                                    </h5>
                                        <span>{type}</span>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Body>
                            <h3>
                                Stats:
                            </h3>
                            {
                                stats.map((obj, idx) => {
                                    return (
                                        <div key={idx}>
                                            <strong>{obj.name}</strong>: 
                                            <ProgressBar now={obj.base_stat} max = {255} label = {obj.base_stat}/>
                                        </div>)
                                })
                            }</Card.Body>
                        <Card.Body>
                            
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> :
            <Alert variant = "danger" sm = {6}>No Such Pokemon Found!</Alert>
            }
        </div>
    )
}

export default SearchCard
