import './App.css';
import Books from './components/Books';

const lists = [
  {
    id: crypto.randomUUID(),
    name: "Winter's Orbit",
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Dial D for Deadman',
    rating: 4,
  },
  {
    id: crypto.randomUUID(),
    name: 'Words And Things',
    rating: 0,
  },
  {
    id: crypto.randomUUID(),
    name: 'The Galaxy, And The Ground Within',
    rating: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Setemi the Instructor',
    rating: 1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Jerry the Principal',
    rating: 4,
  },
];

function App() {
  return (
    <>
      <section>
        <h3>Star rating</h3>
        <Books lists={lists} />
      </section>
    </>
  );
}

export default App;
