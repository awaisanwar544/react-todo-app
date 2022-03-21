import './App.css';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
