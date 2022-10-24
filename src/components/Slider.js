import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Business from "../media/business.jpg"
import Entertainment from "../media/entertainment.jpg"
import Science from "../media/science.jpg"
import Sports from "../media/sports.jpg"
import Technology from "../media/technology.jpg"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Business}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending News on Business</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/business" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Entertainment}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending News on Entertainment</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/entertainment" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Science}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending News on Science</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/science" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Sports}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Trending News on Sports</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/sports" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Technology}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Trending News on Technology</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Link to="/technology" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;