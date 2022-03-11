import { Card } from "./Card";
import '../css/AppStyle.css'

export function Content() {
  return (
    <div className="divContainer">
      <div className='divForm-divPages'>
        <div className='divForm'>
          <input type='text' placeholder='Choose your pokemon' />
          <button>Search</button>
        </div>
        <div className='divPages'>
          <button>-</button><span>1 </span>-<span> 15</span>
          <button>+</button>
        </div>
      </div>
      <div className='divCards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}