import logoPokeApi from '../assets/img/logoPokeApi.png';
import '../css/AppStyle.css'

export function Header() {
    return(
        <header>
           <img src={logoPokeApi} alt="PokéApi"/>
        </header>
    )
}