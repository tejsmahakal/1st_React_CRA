import "./Footer.css";

function Footer (){
    return(
        <div className="footer">
            <div className="img">
            <img src="https://assets.website-files.com/5f74a4c261ced7f273093c7c/5f74a4c2acac9951eaefab34_logo1.png"/>
            </div>
           
            
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Incidunt consequuntur amet culpa cum itaque neque.</p>
            </div>

            <div className="a">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">History</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
            </div>
        </div>
       
    );
}

export default Footer;