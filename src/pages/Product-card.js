// function Productcard(props){
function Productcard({ title, price, description, category, image, rating }){
    return(
        <>
<div className="card h-100">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-truncate">{description}</p>
        <p className="text-muted">Category: {category}</p>
        <p className="fw-bold">Price: ${price}</p>
        {rating && (
          <p className="text-warning">
            Rating: {rating.rate} ⭐ ({rating.count} reviews)
          </p>
        )}
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
        </>
    )
}

export default Productcard