import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Data } from '../Data';

function CardProject() {
  return Data.map(project => (
    <Carousel.Item interval={ 3000 }>
        <img
          className="d-block w-100"
          src={ project.srcImg }
          alt={ project.title  }
        />
        <Carousel.Caption className='text-description-box'>
          <a href={ project.link }>
            <h3>{ project.title }</h3>
          </a>
          <p>{ project.description }</p>
        </Carousel.Caption>
      </Carousel.Item>
  ));
}

const CarouselContainer = () => {
  return (
    <div className='Carousel'>
      <Carousel fade={true} indicators={ false } >
        { CardProject() }
      </Carousel>
    </div>
  )
}

export default CarouselContainer