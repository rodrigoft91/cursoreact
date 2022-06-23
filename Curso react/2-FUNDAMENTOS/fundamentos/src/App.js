//components

import PrimeiroComponent from "./components/PrimeiroComponent"
import TestComponent from "./components/TestComponent"
import TerceiroComponent from "./components/TerceiroComponent"
import TemplateExpressions from "./components/TemplateExpressions";



//estilos / css
import './App.css';



function App() {
  return (
    <div className="App">
      <h1> Fundamentos</h1>
      <PrimeiroComponent />
      <TestComponent />
      <TerceiroComponent />
      <TemplateExpressions />
    </div>
  );
}

export default App;
