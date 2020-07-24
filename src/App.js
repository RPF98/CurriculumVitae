import React from 'react';
import logo from './logo.svg';

import Presentation from './Pages/presentation/presentation.js';
import Skills from './Pages/skills/skills.js';
import School from './Pages/school/school.js';
import Hobbies from './Pages/hobbies/hobbies.js';
import Experience from './Pages/experience/experience.js';
import Contact from './Pages/contact/contact.js';

import './App.css';

function App() {
  return (
	<div className="App">
		<Presentation/>		
		<Skills/>
		<School/>
		<Hobbies/>
		<Experience/>
		<Contact/>
	</div>
  );
}

export default App;
