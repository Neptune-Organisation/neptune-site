const MainFeatures = () => {
    return(
        <section className="main-features">
            <h2>Main Features</h2>
            <ul>
                <li>
                    <div className="feature">
                        <p className="feature__title">Parameter-Calculator</p>
                        <p className="feature__description">A little program that helps setting basic parameters like color, size, duration that will make design consistent through the whole project</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Neptune Components</p>
                        <p className="feature__description">A wide variety of base components, from buttons, menus, cards and much more, as well as group components (buttonGroup, imageGroup, etc) so you can build faster and worry less by boring repeatitive tasks</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Neptune Styles</p>
                        <p className="feature__description">Neptune provides a separate style library builded in paralel with Neptune Components, so the styling is faster and easier.</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Layout Components</p>
                        <p className="feature__description">The library includes the most usual layouts of the modern web design</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default MainFeatures