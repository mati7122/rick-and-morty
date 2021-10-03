import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import portfolio from '../assets/portfolio.svg';

function Footer() {
    return (
        <footer>
            <span>Created by Matías Herrera using Rick and Morty API</span>
            <div>
                <a href="https://www.linkedin.com/in/matías-facundo-herrera-5830b7200/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/mati7122" target="_blank" rel="noreferrer">
                    <img src={github} alt="GitHub"/>
                </a>
                <a href="https://portfolio-psi-kohl-25.vercel.app" target="_blank" rel="noreferrer">
                    <img src={portfolio} alt="Portfolio"/>
                </a>
            </div>
        </footer>
    );
}
export default Footer;