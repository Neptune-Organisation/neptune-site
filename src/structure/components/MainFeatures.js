const MainFeatures = () => {
    return(
        <section className="main-features">
            <h2>Main Features</h2>
            <ul>
                <li>
                    <div className="feature">
                        <p className="feature__title">Basic Parameters</p>
                        <p className="feature__description">Deffines basic parameters like color, size, duration that will make design consistent through the whole project</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Components</p>
                        <p className="feature__description">Neptune provides with a wide variety of base components, from buttons, menus, cards and much more, so you can build faster and worry less by boring repeatitive tasks</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Layout Components</p>
                        <p className="feature__description">This subcomponents are organized and reused along many different supracomponents, like card decks, header, footer, forms,...</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">Page Components</p>
                        <p className="feature__description">The supracomponents are organized in pages, so you can rehuse the same supracomponents in different places on your website, conserving the same logic and stetic</p>
                    </div>
                </li>
                <li>
                    <div className="feature">
                        <p className="feature__title">File Creator</p>
                        <p className="feature__description">Wouldn't be great if instead of look every file on an scss one could type a simple instruction and become the whole color palette? That's why we've created a file creator, that assist in stablishing some key values on your desgn</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default MainFeatures