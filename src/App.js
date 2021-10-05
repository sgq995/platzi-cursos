import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Users from './components/Users';

import './App.css';
import Posts from './components/Posts';

const Tasks = () => <div>Tasks</div>;

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <div className="margin">
        <Route exact path="/" component={Users} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/posts/:id" component={Posts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
