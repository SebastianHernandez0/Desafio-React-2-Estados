import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"
export default function Registro({error, setSuccess, setError, success}) {

    return (

        <div className="layout__registro">
            <h1 className="registro__h1">Crea una cuenta</h1>
            <div className="registro__icons">
                <SocialButton icon='fa-brands fa-facebook fa-2x icon '></SocialButton>
                <SocialButton icon='fa-brands fa-github fa-2x icon '></SocialButton>
                <SocialButton icon='fa-brands fa-linkedin fa-2x icon '></SocialButton>
            </div>
            <h5 className="registro__h5">O usa tu email para registrarte</h5>
            <Formulario error={error} setSuccess={setSuccess} setError={setError} />
            <Alert error={error} success={success} />
        </div>
    )

}