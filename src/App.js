import { useState } from "react";
import SearchBar from "./SearchBar";
import searchApi from "./searchApi";
import ImageShow from "./ImageShow";

const App = () => {
  const [image, setImage] = useState([])
  const onSubmit = async (input) => {
    const response = await searchApi(input)
    setImage(response)
  }

  const renderedImages = image.map((img, index) => {
    return <ImageShow image={img} key={index} />
  })

  return (
    <div className="main-div">
      <SearchBar onSubmit={onSubmit} />
      <div className="final-images">{renderedImages}</div>
    </div>
  )
}

export default App;