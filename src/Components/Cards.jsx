import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// image : Absoult path(from internet) and realtive path(from computer)
const Cards = ({ img, title,price }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt={title } />
  <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price : 💲{price }</p>
          <a href="#" className="btn btn-primary">
            Buy Now
          </a>
  </div>
</div>
    )
}

export default Cards