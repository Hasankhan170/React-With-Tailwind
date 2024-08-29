
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
<button className="btn bg-blue-500 text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Buy Now</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">These Product will be available soon.</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-red-500 text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
    </div>
    </div>
    </>
   )

}

export default Cards