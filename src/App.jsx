import Header from './Header';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from './data';

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