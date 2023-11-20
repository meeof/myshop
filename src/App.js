import './App.css';
import './Reset.css';
import Shop from "./Shop";

function App() {
  return <Shop/>
}
export default App;

export function randomColor(opacity) {
  let [r, g, b] = [getRan225(), getRan225(), getRan225()];
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  function getRan225() {
    return Math.round(Math.random() * 224);
  }
}
