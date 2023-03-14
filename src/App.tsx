import AppRouter from "./components/AppRouter";
import TodoList from "./components/Todos/TodoList";
import Navbar from "./UI/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
