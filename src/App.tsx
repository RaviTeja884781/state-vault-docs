import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import CoreConcepts from './pages/CoreConcepts';
import UseCases from './pages/UseCases';
import API from './pages/API';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/core-concepts" element={<CoreConcepts />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;