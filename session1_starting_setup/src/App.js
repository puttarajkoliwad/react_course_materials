import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';
import ImageCard from './components/ImageCard/ImageCard';
import ConceptsCard from './components/ConceptsCard/ConceptsCard'; 
import keyConceptsImage from './assets/images/key-concepts.png';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  const imgCardTitle = 'Key React Concepts';
  const imgCardDescription = 'Selected key React concepts you should know about';
  return (
    // <div>
    //   <header>
    //     <img src={keyConceptsImage} alt="Medal badge with a star" />
    //     <h1>Key React Concepts</h1>
    //     <p>Selected key React concepts you should know about</p>
    //   </header>
    //   <ul id="concepts">
    //     <li className="concept">
    //       <img src={componentsImage} alt="TODO: TITLE" />
    //       <h2>TODO: TITLE</h2>
    //       <p>TODO: DESCRIPTION</p>
    //     </li>
    //   </ul>
    // </div>

    <>
      <header>
        <ImageCard keyConceptsImage={keyConceptsImage} title={imgCardTitle} description={imgCardDescription} />
      </header>

      <body>
        <ConceptsCard concepts={concepts} />  
      </body>
    </>
  );
}

export default App;
