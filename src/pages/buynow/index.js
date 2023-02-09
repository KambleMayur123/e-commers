// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './buynow.css';
import user01 from '../../Assets/user01.png';
import user02 from '../../Assets/user02.png';
import user03 from '../../Assets/user03.png';
import user04 from '../../Assets/user04.png';
import airpod from '../../Assets/Image (3).png';
import watch from '../../Assets/Image (2).png';
import screen from '../../Assets/Image (1).png';
import pinkwatch from '../../Assets/Image.png';
import google from '../../Assets/Image (4).png';
import alexa from '../../Assets/Image (5).png';
import macbook from '../../Assets/Image (6).png';
import orange from '../../Assets/Image (7).png';
import probook from '../../Assets/Image (10).png';
import seven from '../../Assets/Image (11).png';
import eight from '../../Assets/Image (9).png';
import nine from '../../Assets/Image (8).png';
import chart1 from '../../Assets/Chart1.png';
import chart3 from '../../Assets/Chart2.png';
import chart2 from '../../Assets/Chart3.png';





function Buynowpage() {
    return (
        <>
            <main className='buy-bg'>
                <nav className="navbar navbar-expand-lg navbar-light my-navcss">
                    <Row className='widthh'>
                        <Col className='col-12 col-md-6 col-lg-4 d-flexx'>
                            <div className='burgar icons main-badge d-sm-block d-none'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <h2 className='headerName'>Constructor</h2>
                            <a className="navbar-brand" href="#"></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4 d-flexx'>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="acolor nav-item nav-link" href="#">Dashboard<span className="sr-only">(current)</span></a>
                                    <a className="acolor nav-item nav-link" href="#">About Us</a>
                                    <a className="acolor nav-item nav-link" href="#">News</a>
                                    <a className="acolor nav-item nav-link" href="#">User Policy</a>
                                    <a className="acolor nav-item nav-link" href="#">Contacts</a>

                                    <a className="nav-item nav-link disabled" href="#"></a>
                                </div>
                            </div>
                        </Col>
                        <Col className='col-12 col-md-6 col-lg-4 d-flexx'>
                            <div className='main-icons buy-icons'>

                                <div className='round icons'>
                                    <i class="fa-solid fa-magnifying-glass"></i>

                                </div>
                                <div className='icons '>
                                    <i class="fa-solid fa-user"></i>
                                    <span className='my-name'>Mayur Kamble</span>

                                </div>
                                <div className='round icons'>
                                    <i class="fa-solid fa-bell"></i>
                                </div>
                                <div className='round icons main-badge'>
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </nav>
                <Row className='g-0'>
                    <Col className='col-12 col-md-6 col-lg-1 mb-2 sidebar d-sm-block d-none'>
                        <div className='mainicons'>
                            <div className="round">

                                <i className="fa-solid fa-location-arrow"></i>
                            </div>
                            <div className="round">

                                <i className="fa-solid fa-star"></i>

                            </div>
                            <div className="round">

                                <i className="fa-brands fa-facebook-messenger"></i>
                            </div>
                            <div className="round">
                                <i className="fa-solid fa-arrow-trend-up"></i>

                            </div>
                            <div className="round">
                                <i className="fa-solid fa-earth-americas"></i>

                            </div>
                            <div className="round">
                                <i className="fa-solid fa-city"></i>

                            </div>
                        </div>

                        <div className='user-icon'>
                            <div className="round">

                                <i className="fa-solid fa-plus"></i>
                            </div>
                            <div className="round">

                                <img src={user01} alt="user img" className='users' />

                            </div>
                            <div className="round">

                                <img src={user02} alt="user img" className='users' />
                            </div>
                            <div className="round">
                                <img src={user03} alt="user img" className='users' />

                            </div>
                            <div className="round">
                                <img src={user04} alt="user img" className='users' />

                            </div>

                        </div>

                    </Col>
                    <Col className='d-content col-12 col-md-6 col-lg-8 mb-2'>
                        <Row className='g-0'>
                            <main className=' bag-shadow'>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag for-i'>
                                        <div className="round bagg">
                                            <i class="fa-solid fa-bag-shopping"></i>
                                        </div>
                                        <div className='oproduct'>Products</div>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-6 mb-2'>
                                    <div className='main-bag'>
                                        <ul>
                                            <li><a class="cool-link" href="#">Active</a></li>
                                            <li><a class="cool-link" href="#">Draft</a></li>
                                            <li><a class="cool-link" href="#">Assembly</a></li>

                                        </ul>
                                    </div>


                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='bttn'>
                                            <span className='pluss'><i class="fa-solid fa-plus"></i>
                                            </span>
                                            <span>Add Product</span>
                                        </div>
                                    </div>
                                </Col>
                            </main>
                            <main className='mt-1 bag-shadow'>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag for-i'>
                                        <div className="round bagg">
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                        <div className='oproduct'>Select All</div>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-6 mb-2'>
                                    <div className='main-bag four-icon'>
                                        <ul>
                                            <span>
                                                <i class="fa-solid fa-arrow-up-wide-short"></i>
                                                <li>Filters</li>
                                            </span>
                                            <span>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                                <li>Search</li>
                                            </span>

                                            <span>
                                                <i class="fa-solid fa-pen"></i>
                                                <li>Edit</li>
                                            </span>
                                            <span>
                                                <i class="fa-solid fa-trash"></i>
                                                <li>Delete</li>
                                            </span>
                                        </ul>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div>
                                            <span className='last-iiconss'>
                                                <i class="fa-solid fa-bars"></i>
                                            </span>
                                            <span className='last-iiconss'>
                                                <i class="fa-solid fa-grip"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </main>
                            <main className='d-contentt '>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={airpod} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={watch} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={screen} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={pinkwatch} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={google} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={alexa} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={macbook} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={orange} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={probook} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col><Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={seven} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={eight} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='second-header col-12 col-md-6 col-lg-3 mb-2'>
                                    <div className='main-bag'>
                                        <div className='main-card'>
                                            <form class="form">
                                                <div class="inputGroup">
                                                    <input id="option2" name="option2" type="checkbox" />
                                                    <label for="option2"></label>
                                                </div>
                                            </form>
                                            <img src={nine} alt="user img" className='' />
                                            <h3 className='product-t'>Apple Air Pods 2</h3>
                                            <span className='product-price'>$600</span>
                                        </div>
                                    </div>
                                </Col>
                            </main>

                        </Row>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-3 mb-2'>
                        <div className='m-left'>
                            <div className='shadoo'>
                                <div className=''>
                                    <div className='main-card'>
                                        <div className='last-totlee'>
                                            <h3 className='total-sale colorr'>TOtal Sales</h3>
                                            <h3 className='colorr'>$281.90</h3>
                                        </div>
                                        <div className='chart-one'>
                                            <img src={chart1} alt="user img" className='chart1' />
                                        </div>
                                        <div className='colorr'>
                                            <span className='total'>6 total orders</span>
                                            <span className='vieww'>View report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='m-left'>
                            <div className='shadoo'>
                                <div className=''>
                                    <div className='main-card'>
                                        <div className='last-totlee'>
                                            <h3 className='total-sale colorr'>TOtal Sales</h3>
                                            <h3 className='colorr'>$281.90</h3>
                                        </div>
                                        <div className='chart-one'>
                                            <img src={chart2} alt="user img" className='chart1' />
                                        </div>
                                        <div className='colorr'>
                                            <span className='total'>6 total orders</span>
                                            <span className='vieww'>View report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='m-left'>
                            <div className='shadoo'>
                                <div className=''>
                                    <div className='main-card'>
                                        <div className='last-totlee'>
                                            <h3 className='total-sale colorr'>TOtal Sales</h3>
                                            <h3 className='colorr'>$281.90</h3>
                                        </div>
                                        <div className='chart-one'>
                                            <img src={chart3} alt="user img" className='chart1' />
                                        </div>
                                        <div className='colorr'>
                                            <span className='total'>6 total orders</span>
                                            <span className='vieww'>View report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='road m-left'>
                            <div className='shadoo'>
                                <div className='spanaction'>
                                    <span>Actions</span>
                                    <span className='spciallclr'>Orders</span>
                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                </div>
                                <div className='roadtrip'>
                                    <ul>
                                        <li><span>11:3</span>New Category Added
                                            «Mobile phones»</li>
                                        <hr />
                                        <li><span>11:21</span>New Category Added
                                            «Mobile phones»</li>
                                        <hr />

                                        <li><span>10:45</span>New Category Added
                                            «Mobile phones»</li>
                                        <hr />

                                        <li><span>9:45</span>New Category Added
                                            «Mobile phones»</li>
                                        <hr />

                                        <li><span>9:45</span>New Category Added
                                            «Mobile phones»</li>
                                        <hr />

                                        <li><span>8:45</span>New Category Added
                                            «Mobile phones»</li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </main>
        </>

    );
}

export default Buynowpage;
