import { useState } from "react";

const Condicional = () => {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const enviarEmail = (event) => {
        event.preventDefault()
        setUserEmail(email)
    }
    
    const limparEmail = (event) => {
        setUserEmail("")
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail" 
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional