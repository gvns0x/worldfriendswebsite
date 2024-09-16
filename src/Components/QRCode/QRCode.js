import './QRCode.css'
import qrCode from '../../Images/QRCode.png'

const QRCode = () => {
    return (
        <div className='qr-code-container'>
            <div className='qr-code-border'>
                <img src={qrCode} alt='qr-code' className='qr-code-image'/>
            </div>
        </div>
    )
}

export default QRCode