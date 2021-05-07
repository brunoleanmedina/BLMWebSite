//Important import section
import React, {useState} from 'react';
import './styles.scss';

//Section of component import
import Navigation from './components/Navigation/Navigation.jsx';
import Start from './components/Start/Start.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Content from './components/Content/Content.jsx';
import ContentList from './components/Content/ContentList.jsx';
import Footer from './components/Footer/Footer.jsx';


const contentInfo1 = {
  title: "First Portfolio",
  projectName: "(BLMWebSite1.0)",
  projectLink: "https://github.com/brunoleanmedina/BLMWebSite1.0",    
  info: "This is my first project, i maked this project for use the new knowledge learned (HTML, CSS).it is a simple portfolio web for do a explication about me. I did with simple HTMl for the structure/skeleton using HTML semantic with a simple CSS. You can find the proeject if you click on the name in title."
  info: "This is my first project, i maked this project for use the new knowledge learned (HTML, CSS).it is a simple portfolio web for do a explication about me. I did with simple HTML for the structure/skeleton using HTML semantic with a simple CSS. You can find the proeject if you click on the name in title."
  };
const contentInfo2 = {
	title: "Second Portfolio",
	projectName: "(BLMWebSite2.0)",    
	projectLink: "https://github.com/brunoleanmedina/BLMWebSite2.0",
	info: "You are in the project right now, this is a project that i really liked because i could use React Js and Sass. " + "I made this page with the structure  of React Js based in components that helped me to understand about method Atomic design that is used in any web page also i could do and understand the importance about  clean code and do everythings in differents places for understand and find errors, that is why i use Sass, with Sass i can applay this method and divide my CSS. You are in the project but any way i left the URL for my Git Hub."
  };
const contentList1 = {
	title: "Knowledges",  
	info: 
		<ul>
			<ContentList dataList="HTML"/>
			<ContentList dataList="CSS"/>
			<ContentList dataList="JavaScript"/>
			<ContentList dataList="ReactJS"/>
			<ContentList dataList="Sass"/>
			<ContentList dataList="Electronic"/>
			<ContentList dataList="Mechanics"/>
			<ContentList dataList="Pneumatic"/>
		</ul>
  };
const contentList2 = {
	title: "Skills",  
	info: 
		<ul>
			<ContentList dataList="HTMl/CSS"/>
			<ContentList dataList="JavaScript"/>
			<ContentList dataList="ReactJS"/>
			<ContentList dataList="Sass"/>
			<ContentList dataList="English (Advanced)"/>
			<ContentList dataList="Japanese (Basic)"/>
			<ContentList dataList="Fast Learner"/>
			<ContentList dataList="Good Team Player"/>
			<ContentList dataList="Teamwork"/>
			<ContentList dataList="Good Presence"/>
		</ul>
  };
const contentList3 = {
	title: "Courses",  
	info: 
		<ul>
			<ContentList dataList="Lógica de programación"/>
			<ContentList dataList="A programar (ORT)"/>
			<ContentList dataList="HTML"/>
			<ContentList dataList="HTML, CSS y JavaScript"/>
			<ContentList dataList="React JS"/>
		</ul>
  };
  
function App(){

  const [state, setState] = useState(false);

  const handleClick = () => {
	setState(!state);
	const sectionNav = document.getElementById("sectionNav");
	let classListValue = sectionNav.classList.value;
	if(classListValue === "hidden"){
		sectionNav.classList.replace("hidden", "show")
	}else{
		sectionNav.classList.replace("show", "hidden")
	}
  }


  return (
	
	<div>
	  <button id="myBtn" onClick={handleClick}><div></div><div></div><div></div></button>
	  <Navigation/>
	  <Start/>
	  <h1 id="aboutMe">About Me</h1>
	  <Presentation/>
	  <h1 id="projects">About Projects</h1>
	  <Content 
		title={contentInfo1.title}
		projectName={contentInfo1.projectName} 
		projectLink={contentInfo1.projectLink} 
		info={contentInfo1.info}
	  />
	  <br/>
	  <Content 
		title={contentInfo2.title}
		projectName={contentInfo2.projectName} 
		projectLink={contentInfo2.projectLink} 
		info={contentInfo2.info}
	  />
	  <h1 id="knowledge">Knowledge</h1>
	  <Content
			title={contentList1.title}
			info={contentList1.info}
		/>
		
	  <h1 id="skills">Skills/Courses</h1> 
		<Content
			title={contentList2.title}
			info={contentList2.info}
		/>
	
	<br/>

	<Content
			title={contentList3.title}
			info={contentList3.info}
		/>
  
	  

	<br/>
	

	<Footer/>

	</div>
	
	
  );
  

};

export default App;