// ------------------------------------------------------------
// Responsavel pela renderização dos lanches
const lanches = [
  {
    nome: "01. X-burger",
    preco: "4,00",
    ingredientes: "Pão de hambúrguer, hambúrguer, queijo.",
  },
  {
    nome: "02. X-salada",
    preco: "12,50",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
  {
    nome: "03. X-bacon",
    preco: "13,00",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, bacon, alface e maionese.",
  },
  {
    nome: "04. X-egg",
    preco: "13,50",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, ovo, alface, maionese, tomate.",
  },
  {
    nome: "05. X-frango",
    preco: "13,50",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
  {
    nome: "06. X-tudo",
    preco: "14,50",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, salsicha, queijo, milho, batata palha, ovo, alface e tomate.",
  },
  {
    nome: "07. X-tudo de frango",
    preco: "14,50",
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
  // Adicione mais lanches conforme necessário
];

const listaLanches = document.getElementById("listaLanches");

lanches.forEach((lanche) => {
  const card = document.createElement("div");
  card.className = "card text-center mt-2 rounded-pill  text-light ";
  card.setAttribute("data-toggle", "tooltip");
  card.setAttribute("data-placement", "bottom");
  card.setAttribute("title", lanche.ingredientes);

  card.innerHTML = `
    <div class="card-body">
        <div class="row">
            <div class="col-6">
                <h5 class="card-title foods_fonts">${lanche.nome}</h5>
            </div>
            <div class="col-6">
                <h5 class="text-center foods_fonts">R$${lanche.preco}</h5>
            </div>
        </div>
    </div>
    <div class="ingredientes" style="display: none;">
        <p>${lanche.ingredientes}</p>
    </div>
  `;

  listaLanches.appendChild(card);

  // Adicione um ouvinte de evento de clique para cada cartão de lanche
  card.addEventListener("click", () => {
    // Quando o cartão é clicado, exiba ou oculte os ingredientes
    const ingredientes = card.querySelector(".ingredientes");
    ingredientes.style.display =
      ingredientes.style.display === "none" ? "block" : "none";
  });
});

// ------------------------------------------------------------
// Responsavel pela renderização das bebidas
const bebidas = [
  {
    nome: "Refrigerante de Lata",
    preco: "4,00",
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  {
    nome: "Refrigerante 600ml",
    preco: "6,00",
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  {
    nome: "Refrigerante 1L",
    preco: "8,00",
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  // Adicione mais lanches conforme necessário
];

const listaBebidas = document.getElementById("listaBebidas");

bebidas.forEach((bebidas) => {
  const card = document.createElement("div");
  card.className = "card text-center mt-2 rounded-pill  text-light";
  card.setAttribute("data-toggle", "tooltip");
  card.setAttribute("data-placement", "bottom");
  card.setAttribute("title", bebidas.ingredientes);

  card.innerHTML = `
        <div class="card-body">
            <div class="row">
                <div class="col-6">
                    <h5 class="card-title foods_fonts">${bebidas.nome}</h5>
                </div>
                <div class="col-6">
                    <h5 class="text-center foods_fonts">R$${bebidas.preco}</h5>
                </div>
            </div>
        </div>
        <div class="ingredientes" style="display: none;">
        <p>${bebidas.ingredientes}</p>
        </div>
    `;

  listaBebidas.appendChild(card);

  // Adicione um ouvinte de evento de clique para cada cartão de lanche
  card.addEventListener("click", () => {
    // Quando o cartão é clicado, exiba ou oculte os ingredientes
    const ingredientes = card.querySelector(".ingredientes");
    ingredientes.style.display =
      ingredientes.style.display === "none" ? "block" : "none";
  });
});

// ------------------------------------------------------------
