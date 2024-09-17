import './QRCode.css'
import qrCode from '../../Images/QRCode.png'

const QRCode = () => {
    return (
        <div className='qr-code-container'>
            <div className='qr-code-border'>
                <img src={qrCode} alt='QR code' className='qr-code-image'/>
            </div>
        </div>
    )
}

export default QRCode