import './App.css'
import ToggleDisplay from './components/ToggleDisplay/ToggleDisplay';
import CounterClass from './components/counter/CounterClass';
import CounterFct from './components/counter/CounterFct';

function App() {

  return (
    <>
      <h1>Démo Adv 01</h1>

        {/* Les éléments sont envoyé au composant via la props "children" */}

      <ToggleDisplay name='Fonction'>
        <h2>Counter Fonction</h2>
        <CounterFct />
      </ToggleDisplay>

      <hr />
      
      <ToggleDisplay name='Classe'>
        <h2>Counter Classe</h2>
        <CounterClass />
      </ToggleDisplay>
    </>
  )
}

export default App
