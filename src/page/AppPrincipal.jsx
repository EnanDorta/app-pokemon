import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/AppStyle.css';
export default function AppPrincipal(){
    return(
    <>
        <Header/>
        <div className="divContainer">
            <div className='divForm-divPages'>
                <div className='divForm'>
                    <input type='text'placeholder='Choose your pokemon'/>
                    <button>Search</button>
                </div>
                <div className='divPages'>
                    <button>-</button><span>1</span>-<span>15</span>
                    <button>+</button>
                </div>
            </div>
            <div className='divCards'>
                <div className='card'>

                </div>
                <div className='card'>

                </div>
                <div className='card'>

                </div> 
                 <div className='card'>

                </div> 
                <div className='card'>

                </div>
                <div className='card'>

                </div>
            </div>
            <div className='divCards'>
                <div className='card'>

                </div>
                <div className='card'>

                </div>
                <div className='card'>

                </div> 
                 <div className='card'>

                </div> 
                <div className='card'>

                </div>
                <div className='card'>

                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}