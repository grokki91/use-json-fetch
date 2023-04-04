import './App.css';
import JsonFetch from './components/JsonFetch';
import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const url = 'http://localhost:7070/';

  const [data, loading, error] = useJsonFetch(url);

  return (
    <div className="App">
      <JsonFetch url={data} />
      <JsonFetch url={loading} />
      <JsonFetch url={error} />
    </div>
  );
}

export default App;
