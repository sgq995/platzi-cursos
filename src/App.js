import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Users from './components/Users';

import './App.css';

const Tasks = () => <div>Tasks</div>;

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div className="margin">
        <Route exact path="/" component={Users} />
        <Route exact path="/tasks" component={Tasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
