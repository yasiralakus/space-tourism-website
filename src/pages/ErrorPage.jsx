import { Link } from 'react-router-dom'

export default function ErrorPage() {



    return (
        <div className="error-container">

                <h1>404</h1>

                <h2>ARADIĞINIZ SAYFA BULUNAMADI!</h2>

                <p>ANASAYFA' YA <Link to={'/'}>GERİ DÖN</Link></p>

        </div>
    )
}