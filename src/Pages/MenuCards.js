import React, { Component} from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import FruitSalad from '../Images/fruitsalad.png';

const MenuCard = props => (
    <div>   
        <Card  bg="light" text="black" style={{ width:'18.5rem'}} className="card text-center shadow mycard">
            <div className="overflow">    
                <Card.Img variant="top" height="240" src={FruitSalad} alt="" className="card-img-top" />
            </div>
            <Card.Header><center></center></Card.Header>
            <Card.Body>    
                <Card.Title><center></center></Card.Title>
                <Card.Text >
                    Fruit Salad<br/>
                    Type : Vegitarian
                </Card.Text>
            </Card.Body>
        </Card>     
    </div>
)

export default class MenuCards extends Component {
    render() {
        return (
            <div>
                <CardDeck>
                    <MenuCard/> 
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>

                </CardDeck>   
            </div>   
        );
    }
}
