import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.duupdates.in/wp-content/uploads/2017/11/image003.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Main View</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.06339b382d7ca4c5eff0a9411f17355f?rik=dAjkdwlHY%2bKVhg&riu=http%3a%2f%2fwww.bestwebsiteinindia.com%2fblog%2fwp-content%2fuploads%2f2013%2f10%2fIIT.jpg&ehk=oZ9GP%2fKoRvAuRr9GX6qvkPKvMRNhptZoqeB%2b2q0a7VE%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Garden Area</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.freeimages.com/images/large-previews/061/auditorium-1233269.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Classrooms</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;