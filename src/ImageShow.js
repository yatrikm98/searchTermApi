const ImageShow=({image})=>{
return (
    <div>
    <img src={image.urls.small} alt="No Images" className="size"/>
    </div>
)
}

export default ImageShow;