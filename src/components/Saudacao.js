
const Saudacao = ({ nome }) => {
    const gerarSaudacao = (algumNome) => {
        return `Olá, ${algumNome}, tudo bem?`
    }
    return (
        // isto abaixo é um IF sem ELSE
    <>
        {nome && <p>{gerarSaudacao(nome)}</p>} 
    </>
    )
}

export default Saudacao