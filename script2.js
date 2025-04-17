//código que destaca a aba clicada
document.addEventListener("DOMContentLoaded", () => {
    const conteudoDiv = document.getElementById('content');
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const page = tab.getAttribute('data-page');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            mudarConteudo(page);
        });
    });

    mudarConteudo('home'); // Evento inicial
});
//final do bloco

//array de objetos que faz a descrição dos produtos
const produtos = [
    {
      id: 1,
      nome: "Computador X200",
      preco: "R$699,90",
      descricao: "Computador com 4gb de RAM DDR3 SSD 120gb e intel i3",
      imagem: "imagens/prod1.png"
    },
    {
      id: 2,
      nome: "calças Jeans FitPro",
      preco: "R$349,90",
      descricao: "Monitoramento de saúde e conexão com seu smartphone.",
      imagem: "imagens/prod2.png"
    },
    {
      id: 3,
      nome: "Pulseira 4K Action",
      preco: "R$499,00",
      descricao: "Ideal para aventuras com gravação em 4K e resistência à água.",
      imagem: "imagens/prod3.png"
    },
    {
      id: 4,
      nome: "Placa Protoboard Slim 14",
      preco: "R$2.399,00",
      descricao: "Leve e POTENTE, pronta para qualquer conexão.",
      imagem: "imagens/prod4.png"
    }
];
//final do array

// Função que define o conteúdo
function mudarConteudo(page) {
    const conteudoDiv = document.getElementById('content');

    //exibe os conteúdos de cada aba quando selecionada
    if (page === 'home') {

        //código que cria as imagens clicáveis
        conteudoDiv.innerHTML = `
        <div class="catalog">
            <div class="image-container">
                <img id="main-image" src="${produtos[0].imagem}" alt="${produtos[0].nome}">
                <div class="selecionadorImg">
                    ${produtos.map(prod => `
                    <div class="thumb-box">
                        <img class="thumbnail" src="${prod.imagem}" alt="${prod.nome}" data-descricao="${prod.descricao}" data-preco="${prod.preco}">
                        <p class="desc"><strong>${prod.nome}</strong><br>${prod.preco}</p>
                    </div>
                    `).join('')}
                </div>
                <div class="produto-info textoJustificado" id="produto-info">
                <h3>${produtos[0].nome}</h3>
                <p><strong>Preço:</strong> ${produtos[0].preco}</p>
                <p><strong>Descrição:</strong> ${produtos[0].descricao}</p>
                </div>
            </div>
        </div>
        `;

        // depois do innerHTML, adiciona o evento para os thumbnails:
        setTimeout(() => {
            const thumbs = document.querySelectorAll('.thumbnail');
            const mainImg = document.getElementById('main-image');
            const infoDiv = document.getElementById('produto-info');
  
            thumbs.forEach(img => {
                img.addEventListener('click', () => {
                    mainImg.src = img.src;
                    mainImg.alt = img.alt;
  
                    // atualiza a info
                    infoDiv.innerHTML = `
                        <h3>${img.alt}</h3>
                        <p><strong>Preço:</strong> ${img.dataset.preco}</p>
                        <p><strong>Descrição:</strong> ${img.dataset.descricao}</p>
                    `;
                });
            });
        }, 0);

        // Adiciona evento às novas miniaturas renderizadas
        setTimeout(() => {
            const thumbs = document.querySelectorAll('.thumbnail');
            thumbs.forEach(img => {
                img.addEventListener('click', () => {
                    mudarImag(img.src);
                });
            });
        }, 0);

    } else if (page === 'eletronicos') {
        conteudoDiv.innerHTML = `
        <h2>Sobre os produtos Eletrônicos</h2><br>
        <div class="textoJustificado">
            <p>Eletrônicos de qualidade que conectam você ao futuro.Na Shop Now, acreditamos que a tecnologia deve ser acessível, confiável e feita para transformar o seu dia a dia.
            Nossa curadoria de produtos eletrônicos combina inovação e praticidade, com foco em desempenho real e preços justos.De fones inteligentes a notebooks de alta performance, cada item do nosso catálogo é testado para garantir uma experiência que une eficiência, durabilidade e design moderno.</p>
            <p>Nós não vendemos apenas eletrônicos: entregamos soluções tecnológicas pensadas para você viver melhor ― seja no trabalho, nos estudos ou no entretenimento.</p>
        </div>
        `;
    } else if (page === 'roupas') {
        conteudoDiv.innerHTML = `
        <h2>Sobre as roupas</h2><br>
        <div class="textoJustificado">
            <p>Na Shop Now, acreditamos que a moda é uma forma de expressão — por isso, nossa linha de roupas foi pensada para atender a diferentes estilos, corpos e momentos do seu dia.</p>
            <p>Cada peça do nosso catálogo é escolhida com cuidado, priorizando conforto, qualidade dos tecidos e design atemporal, para que você se vista bem sem abrir mão da sua identidade.
            Aqui, a moda é acessível, inclusiva e com propósito. Vista quem você é com confiança — todos os dias.</p>
        </div>    
        `;
    } else if (page === 'acessorios') {
        conteudoDiv.innerHTML = `
        <h2>Sobre os acessórios</h2><br>
        <div class="textoJustificado">
            <p>Enrolação</p>
        </div>    
        `;
    } else if (page === 'sobreNos') {
        conteudoDiv.innerHTML = `
        <h2>Sobre Nós</h2><br>
        <div class="textoJustificado">
            <p>Shop Now: onde confiança e inovação andam juntas.</p>
            <p>undada com o propósito de tornar a experiência de compra online mais humana, a Shop Now nasceu do desejo de oferecer um espaço digital onde qualidade, honestidade e atendimento personalizado são prioridade.
            Trabalhamos todos os dias para garantir que cada cliente encontre exatamente o que precisa ― com praticidade, segurança e o melhor custo-benefício.</p>
            <p>Nossos produtos refletem nossos valores: tecnologia com propósito, moda com consciência e variedade com responsabilidade.
            Mais do que uma loja, queremos ser parceiros no seu cotidiano, evoluindo com você em cada clique.</p>
        </div>
        `;
    }
}
//final da função do conteúdo

//função que muda a imagem para ...
function mudarImag(imageSrc) {
    const mainImg = document.getElementById('main-image');
    if (mainImg) {
        mainImg.src = imageSrc;
    }
}

//limpa o input quando clicar o enter e pega o valor para ser pesquisado
const input = document.getElementById("pesquisa");

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    nomePesquisa = input.value;
    input.value = "";
  }
});
//fim do bloco
