import React, {useState} from "react"
import components from "../../data/components.json"

const componentList = components.componentList

const [activeComponent, setActiveComponent] = useState("")


export const Components = () => {
    return(
        <div className="components">
            <div className="sidebar">
                <h2>Components</h2>
                <menu onSelect={() => setActiveComponent(e.target.value)}>
                    {componentList.map(component => (
                        <p value = {component.name}>{component.name}</p>
                    ) )}
                </menu>
            </div>
            <div className="main-display">
                <h2>Hello</h2>
            </div>
        </div>
    )
}