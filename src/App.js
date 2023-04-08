import './App.css';
import JsonFetch from './components/JsonFetch';
import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const dataUrl = 'http://localhost:7070/data';
  const loadingUrl = 'http://localhost:7070/loading';
  const errorUrl = 'http://localhost:7070/error';

  const [data] = useJsonFetch(dataUrl);
  const [loading] = useJsonFetch(loadingUrl);
  const [error] = useJsonFetch(errorUrl);

  return (
    <div className="App">
      <JsonFetch url={data} />
      {!loading ? <div>Loading...</div> : <JsonFetch url={loading} />}
      <JsonFetch url={error} />
    </div>
  );
}

export default App;
