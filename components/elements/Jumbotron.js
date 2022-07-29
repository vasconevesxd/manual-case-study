import Link from 'next/link';

const Jumbotron = () => {
    return (
        <section className="jumbotron">
            <div className="jumbotron__content">
                <h1 className="jumbotron__content-title">Be good <span>to yourself</span></h1>
                <p className="jumbotron__content-description">We’re working around the clock to bring you a holistic<span> approach to your wellness. From top to bottom, inside and</span> out.</p>
                <Link href="/quizzes"><button className="btn btn-primary">Take the quiz</button></Link>
            </div>
        </section>
    )
}

export default Jumbotron
