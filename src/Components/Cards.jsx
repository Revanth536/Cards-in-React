import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// image : Absoult path(from internet) and realtive path(from computer)
const Cards = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.img} className="card-img-top" alt={props.tittle } />
  <div className="card-body">
    <h5 className="card-title">Movie Poster</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}

export default Cards