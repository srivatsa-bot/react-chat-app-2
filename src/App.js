import React, { useState } from 'react';
import './App.css';
import Header1 from './minip/Header1';
import Contact from './minip/Contact';
import About from './minip/About';
import Bodymain from './minip/Bodymain';
import SubjectPage from './minip/SubjectPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [subjectName, setSubjectName] = useState(null);

  const handleSubjectClick = (name) => {
    setSubjectName(name);
  };

  return (
    <div>
      <Router>
        <Header1 subjectName={subjectName} />
        <Switch>
          <Route path="/" exact>
            <Bodymain onSubjectClick={handleSubjectClick} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/subject/:id/:chatId" component={SubjectPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
