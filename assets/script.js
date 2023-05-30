const getElement = (...queries) =>{ 
    return document.querySelector(...queries);
}

const cepInput = getElement('#cep');

const btnSearch = getElement('#btn-cep');

const localCep = getElement('#res');

const buscaCep = async () =>{
    const cep = cepInput.value;

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);

    const data = await response.json();
    
    return data;
}




async function exibirCep() {
    const resultCep = await buscaCep();

    const dadosCep = Object.entries(resultCep).map(([chave, valor]) => {
        if(valor ==="") return

        return `${chave}: ${valor},`;
    });

    localCep.innerHTML = dadosCep.join("<br>");
}



/*
    objeto retornado da api:
    bairro: "Estação Velha"
    cep: "58410-077"
    complemento: ""
    ddd: "83"
    gia: ""
    ibge: "2504009"
    localidade: "Campina Grande"
    logradouro: "Travessa Paraíba"
    siafi: "1981"
    uf: "PB"

*/ 


btnSearch.addEventListener('click', exibirCep)