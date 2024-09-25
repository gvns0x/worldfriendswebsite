import './Feature.css';

function Feature({ title, description, image, titleColor, descriptionColor, bgColor }) {
    return (
        <div style={{ backgroundColor: bgColor }} className="Feature">
            <div className='Feature-content'>
                <h3 style={{ color: titleColor }}>{title}</h3>
                <p style={{ color: descriptionColor }}>{description}</p>
            </div>
            <img src={image} alt={title} />
        </div>
    );
}

export default Feature;