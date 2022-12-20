import Counter from "../src/Component/Counter";
function App() {
  return (
    <div className="App">
      <Counter initial={5} />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
