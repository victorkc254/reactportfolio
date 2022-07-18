import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/victor.png';
import './index.scss';




const Home = () => {


    return (
        <div className="container home-page">
        <div className="text-zone">
        <h1>Hi, <br />  I'm 
        <img src={LogoTitle} alt="developer"/>
        victor
        <br/>
        web developer
        </h1>
        <h2>I'm a web developer who loves to create beautiful and functional websites.</h2>
        <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>
        </div>
    )

}

export default Home