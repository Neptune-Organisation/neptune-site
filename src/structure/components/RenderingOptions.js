import React, {useState} from "react"
export const RenderingOptions = (props) => {

        const [text, setText] = useState("")
        const [textValue, setTextValue ] = useState("")

    return(
        <div className="rendering-options">
            
            <label htmlFor="text-input">New Text
                <input type="text" onChange={(e) => setTextValue(e.target.value) } />
                <button onClick={() => setText(textValue)}>Your Text</button>
            </label>
            <p>{text}</p>

        </div>
    )
}