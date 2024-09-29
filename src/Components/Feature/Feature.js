import './Feature.css';

function Feature({ title, description, image, titleColor, descriptionColor, bgColor, videostyle }) {
    return (
        <div style={{ backgroundColor: bgColor }} className="Feature">
            <div className='Feature-content'>
                <h3 style={{ color: titleColor }}>{title}</h3>
                <p style={{ color: descriptionColor }}>{description}</p>
            </div>
            {image.endsWith('.mp4') ? (
                <video className="FeatureVideo" autoPlay loop muted playsInline controls={false}>
                    <source src={image} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img src={image} alt={title} />
            )}
        </div>
    );
}

export default Feature;