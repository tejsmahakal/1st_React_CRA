import "./Nav.css";

function Nav() {
    return (
    <div className="nav">

     <div className="title">
        <img src="https://flowbite.com/docs/images/logo.svg"/>
        <h2>GeekFoods</h2>
        </div>    
     <div className="menu">
        <a href="#" className="span">Home</a>
        <a href="#">Quote</a>
        <a href="#">Resturants</a>
        <a href="#">Foods </a>
        <a href="#">Contact </a>
        <button className="btn">Get Started</button>
        </div> 
        <br/>

    </div>
    
    );
}

export default Nav;