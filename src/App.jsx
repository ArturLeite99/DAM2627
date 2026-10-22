
import Header from './Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from './data';

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


function App() {
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

      </main>
    </>
  );
}

export default App;