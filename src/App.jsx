import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from './data.js';


function App() {

   function handleSelected() {
      console.log("click")
    }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
      <section id="examples">
        <menu>
          {/* <TabButton label="Components">Components</TabButton> */}
          <TabButton onSelectTab={handleSelected}>Components</TabButton>
          <TabButton onSelectTab={handleSelected}>JSX</TabButton>
          <TabButton onSelectTab={handleSelected}>Props</TabButton>
          <TabButton onSelectTab={handleSelected}>State</TabButton>
        </menu>
        Dynamic Content
      </section>
    </div>
  );
}

export default App;
