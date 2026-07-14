import './App.css';
import { books } from "./data/books";
import { Form } from "./componenst/Form/Form";
import { BooksList } from "./componenst/BooksList/BooksList";

function App() {
  return (
    <div className="App">
      <h1>Книгарня</h1>
      <BooksList books={books}/>
      <Form/>
    </div>
  );
}

export default App;