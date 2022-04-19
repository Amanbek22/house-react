import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <div className="card col-3" >
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tiny-houses-1579284305.png?crop=1.00xw:0.788xh;0,0.189xh&resize=640:*" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={"/card/" + props.id} className="btn btn-primary">Подробнее</Link>
        </div>
    </div>
  )
}
