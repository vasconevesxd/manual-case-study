const Jumbotron = props => {
    return (
        <section className="jumbotron">
            <div className="jumbotron__content">
                <h1 className="jumbotron__content-title">Be good <span>to yourself</span></h1>
                <p className="jumbotron__content-description">We’re working around the clock to bring you a holistic<span> approach to your wellness. From top to bottom, inside and</span> out.</p>
                <button className="btn bg-red">Take the quiz</button>
            </div>
        </section>
    )
}

export default Jumbotron
