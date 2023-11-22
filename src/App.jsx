import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from './data.js';
import { useState } from "react";


function App() {
  //useState should be called on the top of the component level
  const [selectedTopic, setSelectedTopic] = useState("Please select a tab");

   function handleSelected(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedButton)
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
          <TabButton onSelectTab={()=> handleSelected("Components")}>Components</TabButton>
          <TabButton onSelectTab={()=> handleSelected("JSX")}>JSX</TabButton>
          <TabButton onSelectTab={()=> handleSelected("Props")}>Props</TabButton>
          <TabButton onSelectTab={()=> handleSelected("State")}>State</TabButton>
        </menu>
          {selectedTopic}
      </section>
    </div>
  );
}

export default App;
