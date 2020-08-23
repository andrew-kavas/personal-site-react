import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import gnososphere from '../assets/images/gnososphere.jpg';
import crust from '../assets/images/crust.jpg';
import snow from '../assets/images/snow.jpg';
import wetlands from '../assets/images/wetlands.jpg';

// home page links
class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Gnososphere',
                    subTitle: 'My youtube',
                    imgSrc: gnososphere,
                    link: 'https://www.youtube.com/channel/UCBtYGNYcFDI7QwR9PHRWtNw',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Crust',
                    subTitle: 'My github',
                    imgSrc: crust,
                    link: 'https://github.com/410-Ventures',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Snow',
                    subTitle: 'My soundcloud',
                    imgSrc: snow,
                    link: 'https://soundcloud.com/gnososphere',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Wetlands',
                    subTitle: 'My twitter',
                    imgSrc: wetlands,
                    link: 'https://twitter.com/AndrewKavas',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;