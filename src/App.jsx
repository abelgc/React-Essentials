import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import { useState } from "react";


function App() {
  //useState should be called on the top of the component level
  const [selectedTopic, setSelectedTopic] = useState();

   function handleSelected(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((item) => (<CoreConcepts key={item.title} {...item}/>))}
          </ul>
        </section>
      </main>
      <section id="examples">
        <menu>
          {/* <TabButton label="Components">Components</TabButton> */}
          <TabButton  isSelected={selectedTopic === 'components'} onSelectTab={()=> handleSelected("components")}>Components</TabButton>
          <TabButton  isSelected={selectedTopic === 'jsx'} onSelectTab={()=> handleSelected("jsx")}>JSX</TabButton>
          <TabButton  isSelected={selectedTopic === 'props'} onSelectTab={()=> handleSelected("props")}>Props</TabButton>
          <TabButton  isSelected={selectedTopic === 'state'} onSelectTab={()=> handleSelected("state")}>State</TabButton>
        </menu>
        {tabContent}             
      </section>
    </div>
  );
}

export default App;
