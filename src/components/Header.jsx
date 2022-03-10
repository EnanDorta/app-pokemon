import logoPokeApi from '../assets/img/logoPokeApi.png';

export default function Header(){
    return(
        <header>
           <img src={logoPokeApi} alt="PokéApi"/>
        </header>
    )
}