import { Link , NavLink} from 'react-router-dom'
import './index.scss'
import victor from '../../assets/images/victor.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome ,faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={victor} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className ="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faWolfPackBattalion} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
            <a 
            target="_blank" rel= "noreferrer"  href="https://www.linkedin.com/in/victor-kiprono-42b370107/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            </li>
            <li>
            <a 
            target="_blank" rel= "noreferrer"  href="https://www.facebook.com/vic.kiprono"
            >
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
            </li>
            <li>
            <a 
            target="_blank" rel= "noreferrer"  href="https://twitter.com/vickipronoh/"
            >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
            </li>
            <li>
            <a 
            target="_blank" rel= "noreferrer"  href="https://github.com/victorkc254/"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
            </li>
            <li>
            <a 
            target="_blank" rel= "noreferrer"  href="https://instagram.com/victor_ckruz?igshid=YmMyMTA2M2Y="
            >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
            </li>
        </ul>
    </div>
)



export default Sidebar;