import React from 'react';
import logo from './logo.svg';

import Presentation from './Pages/presentation/presentation.js';
import Skills from './Pages/skills/skills.js';
import School from './Pages/school/school.js';

import './App.css';

function App() {
  return (
	<div className="App">
		<Presentation/>		
		<Skills/>
		<School/>
	</div>
  );
}

export default App;
