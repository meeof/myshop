import './App.css';
import './Reset.css';
import Shop from "./Shop";

function App() {
  return <Shop/>
}
export default App;

export function randomColor(opacity) {
  let [r, g, b] = [getRan225(), getRan225(), getRan225()];
  return `rgba(0, ${g}, ${b}, ${opacity})`;
  function getRan225() {
    return Math.round(Math.random() * 224);
  }
}
export function findMatch(find, text) {
  if (find === '') {
    return true
  }
  else if (text.toLowerCase().includes(find.toLowerCase())) {
    return true
  }
  return false;
}