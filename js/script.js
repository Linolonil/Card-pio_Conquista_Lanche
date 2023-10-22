const lanches = [
  {
    nome: "01. X-burger",
    preco: 4.0,
    ingredientes: "Pão de hambúrguer, hambúrguer, queijo.",
  },
  {
    nome: "02. X-salada",
    preco: 12.5,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
  {
    nome: "03. X-bacon",
    preco: 13.0,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, bacon, alface e maionese.",
  },
  {
    nome: "04. X-egg",
    preco: 13.5,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, ovo, alface, maionese, tomate.",
  },
  {
    nome: "05. X-frango",
    preco: 13.5,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
  {
    nome: "06. X-tudo",
    preco: 14.5,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, salsicha, queijo, milho, batata palha, ovo, alface e tomate.",
  },
  {
    nome: "07. X-tudo de frango",
    preco: 14.5,
    ingredientes:
      "Pão de hambúrguer, hambúrguer, queijo, milho, alface, maionese e tomate.",
  },
];

const bebidas = [
  {
    nome: "Refrigerante de Lata",
    preco: 4.0,
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  {
    nome: "Refrigerante 600ml",
    preco: 6.0,
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  {
    nome: "Refrigerante 1L",
    preco: 8.0,
    ingredientes: "Coca-cola, fanta-laranja, Guaraná",
  },
  // Adicione mais lanches conforme necessário
];
// Responsável pela renderização dos lanches

const listaLanches = document.getElementById("listaLanches");

lanches.forEach((lanche, index) => {
  const card = document.createElement("div");
  card.className = "card text-center mt-2 border-3 text-light";
  card.setAttribute("data-toggle", "tooltip");
  card.setAttribute("data-placement", "bottom");

  const quantHTML = `<div class="quant d-none">
    <button class="decrement btn btn-danger" onClick="decrementLanche(${index})">-</button>
    <div class="quantidade" id="quantidadeLanche-${index}">0</div>
    <button class="increment btn btn-success" onClick="incrementLanche(${index})">+</button>`;

  card.innerHTML = `
    <div class="card-body">
        <div class="row">
            <div class="col-8">
                <h5 class="card-title foods_fonts">${lanche.nome}</h5>
            </div>
            <div class="col-4">
                <h5 class="foods_fonts ms-4" >R$ ${lanche.preco}</h5>
            </div>
        </div>
        <div class="ingredientes text-center">
            <p>${lanche.ingredientes}</p>
        </div>
        ${quantHTML}
    </div>
  `;

  listaLanches.appendChild(card);

  const cardTitle = card.querySelector(".card-title");
  const quantElement = card.querySelector(".quant");

  cardTitle.addEventListener("click", () => {
    toggleClass(quantElement, "d-none");
  });
});

const quantidadeLanches = Array(lanches.length).fill(0);

function incrementLanche(index) {
  quantidadeLanches[index]++;
  const quantidadeElement = document.getElementById(
    `quantidadeLanche-${index}`
  );
  quantidadeElement.textContent = quantidadeLanches[index];
  atualizarTotal();
}

function decrementLanche(index) {
  if (quantidadeLanches[index] > 0) {
    quantidadeLanches[index]--;
    const quantidadeElement = document.getElementById(
      `quantidadeLanche-${index}`
    );
    quantidadeElement.textContent = quantidadeLanches[index];
    atualizarTotal();
  }
}

// Responsável pela renderização das bebidas

const listaBebidas = document.getElementById("listaBebidas");

bebidas.forEach((bebida, index) => {
  const card = document.createElement("div");
  card.className = "card text-center mt-2 border-3 text-light";
  card.setAttribute("data-toggle", "tooltip");
  card.setAttribute("data-placement", "bottom");

  const quantHTML = `<div class="quant d-none">
    <button class="decrement btn btn-danger" onClick="decrementBebida(${index})">-</button>
    <div class="quantidade" id="quantidadeBebida-${index}">0</div>
    <button class="increment btn btn-success" onClick="incrementBebida(${index})">+</button>`;

  card.innerHTML = `
    <div class="card-body">
        <div class="row">
            <div class="col-8">
                <h5 class="card-title foods_fonts">${bebida.nome}</h5>
            </div>
            <div class="col-4">
                <h5 class="foods_fonts ms-4" >R$ ${bebida.preco}</h5>
            </div>
        </div>
        <div class="ingredientes text-center">
            <p>${bebida.ingredientes}</p>
        </div>
        ${quantHTML}
    </div>
  `;

  listaBebidas.appendChild(card);

  const cardTitle = card.querySelector(".card-title");
  const quantElement = card.querySelector(".quant");

  cardTitle.addEventListener("click", () => {
    toggleClass(quantElement, "d-none");
  });
});

const quantidadeBebidas = Array(bebidas.length).fill(0);

function incrementBebida(index) {
  quantidadeBebidas[index]++;
  const quantidadeElement = document.getElementById(
    `quantidadeBebida-${index}`
  );
  quantidadeElement.textContent = quantidadeBebidas[index];
  atualizarTotal();
}

function decrementBebida(index) {
  if (quantidadeBebidas[index] > 0) {
    quantidadeBebidas[index]--;
    const quantidadeElement = document.getElementById(
      `quantidadeBebida-${index}`
    );
    quantidadeElement.textContent = quantidadeBebidas[index];
    atualizarTotal();
  }
}

function atualizarTotal() {
  let totalCompra = 0;

  lanches.forEach((lanche, index) => {
    totalCompra += quantidadeLanches[index] * lanche.preco;
  });

  bebidas.forEach((bebida, index) => {
    totalCompra += quantidadeBebidas[index] * bebida.preco;
  });

  const totalCompraElement = document.getElementById("totalCompra");
  totalCompraElement.textContent = `: R$${totalCompra.toFixed(2)}`;
}

function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Atualizar o total no início, caso existam valores iniciais
atualizarTotal();

function criarTextoDoPedido() {
  let pedidoTexto = "Pedidos:";

  lanches.forEach((lanche, index) => {
    if (quantidadeLanches[index] > 0) {
      const nome = lanche.nome;
      const quantidade = quantidadeLanches[index];
      const preco = lanche.preco * quantidade;
      pedidoTexto += `\n${nome} x${quantidade} - R$${preco.toFixed(2)}`;
    }
  });

  bebidas.forEach((bebida, index) => {
    if (quantidadeBebidas[index] > 0) {
      const nome = bebida.nome;
      const quantidade = quantidadeBebidas[index];
      const preco = bebida.preco * quantidade;
      pedidoTexto += `\n${nome} x${quantidade} - R$${preco.toFixed(2)}`;
    }
  });

  let total = 0;
  lanches.forEach((lanche, index) => {
    total += lanche.preco * quantidadeLanches[index];
  });
  bebidas.forEach((bebida, index) => {
    total += bebida.preco * quantidadeBebidas[index];
  });

  pedidoTexto += `\nTotal: R$${total.toFixed(2)}`;

  return pedidoTexto;
}

// Atualize a função capturarPedidos para criar o texto do pedido
function capturarPedidos() {
  const textoPedidos = criarTextoDoPedido();
  console.log(textoPedidos);

  // Crie o link
  const numeroTelefone = "5592985515439"; // Substitua pelo número de telefone desejado
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
    textoPedidos
  )}`;

  // Abra o link em uma nova aba/janela
  window.open(linkWhatsApp, "_blank");
}

const enviarPedidoButton = document.getElementById("enviarPedidoButton");
enviarPedidoButton.addEventListener("click", capturarPedidos);

// Atualize o botão ou evento que captura os pedidos para chamar capturarPedidos()

// Certifique-se de chamar capturarPedidos() quando desejar criar o texto do pedido.
