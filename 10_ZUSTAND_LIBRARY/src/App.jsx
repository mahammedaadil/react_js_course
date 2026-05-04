import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Navbar />
      </div>

      <div>
        <Posts />
      </div>
    </>
  );
}

export default App;
