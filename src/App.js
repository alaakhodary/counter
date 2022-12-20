import Counter from "../src/Component/Counter";
function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initial={10} />
      <Counter initial={15} />
    </div>
  );
}

export default App;
