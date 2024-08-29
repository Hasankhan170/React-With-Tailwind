const Hero = ()=>{
    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img style={{
        height: '300px',
        width: '200px',
        objectFit: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px'
  
    }}
      src="hasan.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    )
}

export default Hero;