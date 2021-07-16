import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import DataDisplay from './components/DataDisplay'

function App() {
  const queryClient = new QueryClient()

  return (
    <div className="App">
      <div>
        <QueryClientProvider client={queryClient}>
          <DataDisplay />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
