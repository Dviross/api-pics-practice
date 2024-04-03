function ImageShow({ image }){
    return (
      <div> 
        <img src={image.urls.small} alt={image.alt_discription} /> 
    </div>
    )
  }
  
  export default ImageShow;