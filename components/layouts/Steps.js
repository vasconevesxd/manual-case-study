import Image from 'next/image'
import photo from '../../public/img/photo.png'
import photo2 from '../../public/img/photo2.png'
const Steps = () => {
    return (
        <section className="sections">
            <h2 className="sections-title">What we can help with</h2>
            <div className="section">
                <div className="section__image number-one">
                <Image
                src={photo}
                alt="Hair loss"
                />
                </div>
                <div className="section__content">
                    <h4 className="section__content-title">Hair loss</h4>
                    <h3 className="section__content-subtitle">Hair loss needn’t be<span> irreversible. We can help!</span></h3>
                    <p className="section__content-description">We’re working around the clock to bring you a <span> holistic approach to your wellness. From top to</span> bottom, inside and out.</p>
                </div>
            </div>
            <div className="section">
                <div className="section__content">
                    <h4 className="section__content-title">Erecetile dysfunction</h4> 
                    <h3 className="section__content-subtitle">Erections can be a tricky<span>thing. But no need to feel </span>down!</h3>
                    <p className="section__content-description">We’re working around the clock to bring you<span> a holistic approach to your wellness. From</span>top to bottom, inside and out.</p>
                </div>  
                <div className="section__image number-two">
                <Image
                src={photo2}
                alt="Erecetile dysfunction"
                />
                </div>
            </div>
        </section>
    )
}

export default Steps
