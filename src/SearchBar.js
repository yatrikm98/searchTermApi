import { useState } from "react";

const SearchBar=({onSubmit})=>{
const [text,setText]=useState('')
const handleChange=(event)=>{
setText(event.target.value)
}

const handleSubmit=(event)=>{
event.preventDefault();
onSubmit(text)
setText('')
}


return (
    <div className="form-div">
    <form onSubmit={handleSubmit}>
    <div className="css">
    <label>Enter A Search Term</label>
    <input 
    type="text"
     onChange={handleChange} 
     value={text}
     placeholder="Enter Here"
     className="input"
     />
     </div>
    </form>
    </div>
)
}

export default SearchBar;