const TemplateExpressions = () => {

    const name = "Rodrigo";

    const data = {
        
        nome: "Rodrigo França Teixeira",
        idade: 30,
        carro: "FOX",
        endereco: "Ceilândia-Sul",


    }

    return (
        <div className = "esquerda"> 
            <p>Olá {name}, tudo bem?</p>

            <p>Segue seus dados pessoais:</p>

            <p>Nome completo: {data.nome}.</p>
            <p>Sua idade: {data.idade} anos.</p>
            <p>Seu veículo: {data.carro}.</p>
            <p>Cidade onde mora: {data.endereco}.</p>

        </div>
    )

}

export default TemplateExpressions 