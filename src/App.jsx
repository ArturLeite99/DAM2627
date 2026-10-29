
import Header from './Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from './data.js';
import { useState } from 'react';

//const ALunos = [
//  { nome: "João", idade:"23", curso:"MM"},
//  { nome: "Filipe", idade:"20", curso:"MM"},
//  { nome: "Maria", idade:"26", curso:"MM"},
//  { nome: "Luís", idade:"30", curso:"MM"},
//];


//console.log(ALunos[0].nome);
//console.log(ALunos[1].idade);
//console.log(ALunos[2].curso);
//console.log(ALunos[3].nome);


function Botao() {
  function mostrarmensagem() {
    alert("Bem-vindo à DAM!.");
  }

  return (
    <button onClick={mostrarmensagem}>
      Mostrar mensagem
    </button>
  );
}

  
function Saudacoes() {
  function saudar() {
    alert("Olá!");
  }
  function despedir() {
    alert("Até breve!");
  }

  return (
    <div>
      <button onClick={saudar}>
        Saudar
      </button>
      <button onClick={despedir}>
        Despedir
      </button>
    </div>
  );
}

function mostrarConceito(nome) {
  alert("Selecionaste: " + nome);
}

function FormularioConteudo() {
  return (
    <section>
      <h2>Novo Conteúdo 1</h2>
      <input type="text" placeholder="Título" />
    </section>
  );
}





function App() {

  const [contador, setContador] = useState(0);

  function aumentar() {

    setContador(contador + 1);
  }

  function diminuir() {
     
    setContador(contador - 1);
    setContador(contador >=1 ? contador - 1 : 0);
  }
  
  function Detalhes() {
    const[visivel, setVisivel] = useState(false);

    return (
      <div>
        <button onClick={() => setVisivel(!visivel)}>
          {visivel ? "Esconder detalhes" : "Mostrar detalhes"}
        </button>
        {visivel && (
          <p>Estes são os detalhes que podem ser mostrados ou escondidos.</p>
        )}
      </div>
    );
  }

  function Categorias() {
    const [categoria, setCategoria] = useState("Todas");
    
    return (
      <div>
        <button onClick={() => setCategoria("Filmes")}>
          Filmes
        </button>

        <button onClick={() => setCategoria("Jogos")}>
          Jogos
        </button>

        <button onClick={() => setCategoria("Música")}>
          Música
        </button>

        <p>Categoria selecionada: {categoria}</p>
      </div>
    );
  }

  const[selecionado, setSelecionado] = useState(null);  

  function FormularioConteudo1() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <section>
      <h2>Novo Conteúdo 2</h2>
      <label htmlFor="titulo">Título:</label>
      <input id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <label htmlFor="descricao">Descrição:</label>
      <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <h3>Conteúdo inserido:</h3>
      <p>Título: {titulo}</p>
      <p>Descrição: {descricao}</p>
    </section>
  );
} 

function FormularioConteudo2() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <section>
      <h2>Novo Conteúdo 3</h2>
      <label htmlFor="nome">Nome:</label>
      <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="categoria">Categoria:</label>
      <input id="categoria" type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      <h3>Conteúdo inserido:</h3>
      <p>Nome: {nome}</p>
      <p>Categoria: {categoria}</p>
    </section>
  );
}

function FormularioMultimedia() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <section>
      <h2>Novo Conteúdo Multimedia</h2>
      <label htmlFor="titulo">Título:</label>
      <input id="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <label htmlFor="descricao">Descrição:</label>
      <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <label htmlFor="tipo">Tipo de filme:</label>
      <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione</option>
        <option value="Ação">Ação</option>
        <option value="Thriller">Thriller</option>
        <option value="Terror">Terror</option>
      </select>
      <h3>Conteúdo inserido:</h3>
      <p>Título: {titulo}</p>
      <p>Descrição: {descricao}</p>
      <p>Tipo de filme: {tipo}</p>
    </section>
  );
}


  return (
    <>
      <Header />

      <main>


        <section id="core-concepts">
          <h2>Conceitos fundamentais</h2>

          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <li key={concept.title}>
                <CoreConcept {...concept} />
              </li>
            ))}
          </ul>
        </section>

        <section id="botao1">
          <h2>Botão 1</h2>

        <Saudacoes />

        </section>

        <section id="botao2">
          <h2>Botão 2</h2>
        
        <Botao />

        </section>

        <section id="botao3">
          <h2>Botão 3</h2>

        <button
          onClick={() => {alert("Não dizia para não clicaaarrrr!!!!")}}
        >
          !NÃO CLICAR!
        </button>

        </section>


        <section id="botao4">
          <h2>Botão 4</h2>

        <div>
        <button
          onClick={() => mostrarConceito("Props")}
        >
          Ver Props
        </button>

        </div>

        </section>

        <section id="botao5">
          <h2>Botão 5</h2>

        <div>
        <button onClick={aumentar}>
          Aumentar
        </button>
        <button
          onClick={diminuir}
        >
          Diminuir
        </button>

        <p>Contador: {contador}</p>

        </div>    
        </section>

        <section id="botao6">
          <h2>Botão 6</h2>

        <Detalhes />

        </section>

        <section id="botao7">
          <h2>Botão 7</h2>

        <Categorias />

        </section>

        <section id="botao8">
          <h2>Botão 8</h2>
          
          {CORE_CONCEPTS.map((concept) => (
              <button className="botao" key={concept.title} 
              onClick={() => setSelecionado(concept.description)}>
              {concept.title}
          </button>
          ))}
              {selecionado && <p>Selecionaste: {selecionado}</p>}

        </section>

        <section id="botao9">

          <FormularioConteudo />

        </section>

        <section id="botao10">

          <FormularioConteudo1 />

        </section>

        <section id="botao11">

          <FormularioConteudo2 />

        </section>

        <section id="botao12">

          <FormularioMultimedia />

        </section>

        <section>

        <button>Botão normal do HTML</button>  
        <button className="botao">Botão 2</button>

        <button className="botao-especial">
          Botão especial
        </button>
        </section>


      </main>
    </>
  );
}

export default App;