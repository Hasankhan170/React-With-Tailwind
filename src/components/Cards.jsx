
const Cards = (props)=>{
   return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
    <img className="rounded-[20px] p-3"
     src={props.src}
      alt="Shoes" />
    </figure>
    <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>
    </>
   )

}

export default Cards