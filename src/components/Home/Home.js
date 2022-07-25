import "./style.css";
import logo from '../../assets/logo.png'

export default function Home ({startApp, setstartApp}) {
    return(
        <div className="home">
            <img className="logo" src={logo} alt=""/>
            <h1>ZapRecall</h1>
            <div className='button' onClick={() => setstartApp(!startApp)}>Iniciar Recall!</div>
        </div>
    )
}