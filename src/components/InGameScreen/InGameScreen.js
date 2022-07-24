import './style.css';
import smallLogo from '../../assets/logo-pequeno.png'

export default function InGameScreen(){
    return(
        <div className='header'>
            <img className='smallLogo' src={smallLogo} alt="logo ZapRecall"/>
            <h1>ZapRecall</h1>
        </div>
    )
}