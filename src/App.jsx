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


function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Conceitos fundamentais</h2>

        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <li key={concept.title}>
              <CoreConcept {...concept} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}


export default App;