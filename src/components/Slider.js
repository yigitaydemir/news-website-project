import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Politics from "../media/politics.jpg"
import Finance from "../media/finance.jpg"
import Science from "../media/science.jpg"
import Sports from "../media/sports.jpg"
import Travel from "../media/travel.jpg"

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Politics}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending News on Politics</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/politics" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Finance}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending News on Finance</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Link to="/politics" className='btn btn-outline-light'>Read More</Link>
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
          <Link to="/politics" className='btn btn-outline-light'>Read More</Link>
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
          <Link to="/politics" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Travel}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Trending News on Travel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Link to="/politics" className='btn btn-outline-light'>Read More</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;