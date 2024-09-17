import './Feature.css';

function Feature({ title, description, image }) {
    return (
        <div className="Feature">
            <div className='Feature-content'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} />
        </div>
    );
}

export default Feature;