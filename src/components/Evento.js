import Button from "./evento/Button"

const Evento = () => {
    const meuEvento = () => {
        console.log(`Ativando primeiro evento`)
    }

    const segundoEvento = () => {
        console.log("Ativando segundo evento!")
    }

    return (
        <div>
            <p>Clique para disparar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento