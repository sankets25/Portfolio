import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <p>{work.description2}</p>
            <p>{work.description3}</p>
            <p>{work.description4}</p>


        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">


				<div className="bars">
				   <ul className="skills">
             <li>
               <span>
                 <strong>Programming Languages: </strong>
               </span>
               <em>Python, Java, C, PHP.</em>
             </li>
             <li>
               <span>
                 <strong>Web Technologies & Frameworks: </strong>
               </span>
               <em>JavaScript, HTML5, CSS3, Bootstrap, Flask, ReactJS, Spring MVC, Node.js, Laravel.</em>
             </li>
             <li>
               <span>
                 <strong>Database Systems: </strong>
               </span>
               <em>MySQL, MS SQL Server, Oracle Database, MongoDB, SQLite, SQL, AWS RDS.</em>
             </li>
             <li>
               <span>
                 <strong>Database: </strong>
               </span>
               <em>MySQL, MS SQL Server, Oracle, MongoDB</em>
             </li>
             <li>
               <span>
                 <strong>Software Testing: </strong>
               </span>
               <em>jUnit, PIT.</em>
             </li>
             <li>
               <span>
                 <strong>Cloud Services: </strong>
               </span>
               <em>AWS, Microsoft Azure, IBM Cloud, Heroku</em>
             </li>
             <li>
               <span>
                 <strong>Operating Systems: </strong>
               </span>
               <em>Linux, Microsoft Windows.</em>
             </li>
             <li>
               <span>
                 <strong>Tools and other Technologies: </strong>
               </span>
               <em>gcc/gdb, Git, Bitbucket, Selenium, Jira, XML, Firebase, WordPress, BASH, Shell Scripting.</em>
             </li>

             
					  {/* {skills} */}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
