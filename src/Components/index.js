import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';
import User from '../Assets/user.jpg';
import Logo from '../Assets/logo.png';
import Shoes from '../Assets/shoes.png';
import Xyz from '../Assets/black.png';
import Plen from '../Assets/Mask group.png';
import Airmax from '../Assets/image 1.png';
import Jorden from '../Assets/image 2.png';
import Running from '../Assets/jorden.png';

import Border1 from '../Assets/Ellipse 24.png';
import Border2 from '../Assets/Ellipse 25.png';



function Header() {
    return (
        <>
            <main className='main-bg'>
                <Container className='m-top'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Row>
                            <Col className='col-12 col-md-6 col-lg-4 mb-4 d-flexx'>
                                <img src={Logo} alt="User img" className='logo-img' />
                                <h2 className='brandName'>BIZPUSH</h2>
                                <a className="navbar-brand" href="#"></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-4 mb-4 d-flexx'>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        <a className="nav-item nav-link" href="#">Gallry</a>
                                        <a className="nav-item nav-link" href="#">Shop</a>
                                        <a className="nav-item nav-link" href="#">Contact</a>

                                        <a className="nav-item nav-link disabled" href="#"></a>
                                    </div>
                                </div>
                            </Col>
                            <Col className='col-12 col-md-6 col-lg-4 mb-4 d-flexx'>
                                <div className='main-icons'>
                                    <div className='icons'>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div className='icons'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                    <div className='icons main-badge'>
                                        <span className='icons badgee'>0</span>

                                    </div>
                                    <div className="main-user">
                                        <img src={User} alt="User img" className='user' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </nav>
                    <section>
                        <Row>
                            <Col className='col-12 col-md-6 col-lg-6 mb-4'>
                                <div className='main-section'>

                                    <div>
                                        <h2 className='shoes-txt'>Purchase your<br />
                                            <span className='underlinee'>shoes</span> now.
                                        </h2>
                                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>

                                    </div>
                                    <span className='shop-btn'>Shop Now</span>
                                    <img src={Plen} alt="Shoes img" className='plen-img' />
                                    <div className='main-rating'>
                                        <div className='rating-stars'>
                                            <span className='rate'>4.3</span>
                                            <div>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>

                                        </div>
                                        <div className='review'>
                                            <span className='color-review'>(11.6k Total Review)</span>

                                        </div>
                                    </div>
                                </div>


                            </Col>
                            <Col className='col-12 col-md-6 col-lg-6 mb-4'>

                                <div className='main-shoe'>
                                    <img src={Shoes} alt="Shoes img" className='shoes-img' />
                                    <img src={Border1} alt="border1 img" className='border1-img' />
                                    <img src={Border2} alt="border1 img" className='border2-img' />
                                </div>
                                {/* <div className='overlap-borderr'>
                                <img src={Border1} alt="border1 img" className='border11-img' />
                                <img src={Border2} alt="border1 img" className='border2-img' />
                            </div> */}
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col className='col-12 col-md-6 col-lg-3 mb-4'>
                                <div className='borders'>
                                    <img src={Xyz} alt="Shoes img" className='xyz second-border' />
                                    <div className='heart'>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(11.6k Reviews)</span><br />
                                        <span>Nike Running shoe</span><br />
                                        <span>$100</span>
                                        <span>500 Sold Out</span>

                                        <span className='buy-btn'>Buy now</span>

                                    </div>
                                </div>

                            </Col>
                            <Col className='col-12 col-md-6 col-lg-3 mb-4'>
                                <div className='borders'>
                                    <img src={Airmax} alt="Shoes img" className='xyz second-border' />
                                    <div className='heart'>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(11.6k Reviews)</span><br />
                                        <span>Nike Running shoe</span><br />
                                        <span>$100</span>
                                        <span>500 Sold Out</span>

                                        <span className='buy-btn'>Buy now</span>

                                    </div>
                                </div>

                            </Col>  <Col className='col-12 col-md-6 col-lg-3 mb-4'>
                                <div className='borders'>
                                    <img src={Jorden} alt="Shoes img" className='xyz second-border' />
                                    <div className='heart'>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(11.6k Reviews)</span><br />
                                        <span>Nike Running shoe</span><br />
                                        <span>$100</span>
                                        <span className='underline'>500 Sold Out</span>

                                        <span className='buy-btn'>Buy now</span>

                                    </div>
                                </div>

                            </Col>  <Col className='col-12 col-md-6 col-lg-3 mb-4'>
                                <div className='borders'>
                                    <img src={Running} alt="Shoes img" className='xyz second-border' />
                                    <div className='heart'>
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <i className="fa-solid fa-star"></i>
                                        <span>(11.6k Reviews)</span><br />
                                        <span>Nike Running shoe</span><br />
                                        <span>$100</span>
                                        <span>500 Sold Out</span>

                                        <span className='buy-btn'>Buy now</span>

                                    </div>
                                </div>

                            </Col>
                        </Row>

                    </section>



                </Container>
            </main>
        </>

    );
}

export default Header;
