import React, { Component } from 'react'
import From from './From'
import Social from './Social'
import Main_name from './Main_name';
import Work from './Work';
import Education from './Education';
import Launages from './Launages';
import Footer from './Footer';
import Project from './Project';
import Project_photos from './Project_photos'
import Devlosk from './Devlosk';


export default class Header extends Component {
    render() {
        
        return (
            <>
              
         <main l̥className="content-wrapper">

              <Main_name /> 
             
           
             <div className="container">
             <div className="row">
               <div className="col-xs-12">
           
               <div className="card">
               <div className="card-block">
                 <h2>About me</h2>

                 <div className="row">
                   <div className="col-md-4">
                     <p><img src="./assets/images/ujjal.jpg" className="img-responsive" alt="" /></p>
                   </div>
                   <div className="col-md-8">
           
                   <p >My name is ujjal ray.I was born in 2001. I live in west bengal . I’ve been a professional  full stack web developer.
                   I’ve mostly worked  with C, C++, Html ,css,  javascript, and Reactjs  but also a little bit with   ,Mysql and Note js.
                   I’ve maked more than 5 Projects, mostly about html,css,Reactjs  but also  Note js</p>
                   <p>My main interests are:
                   <ul>
                  
                   <li>Database Management System (DBMS)</li>
                   <li>Mysql/MongoDB</li>
                   <li>C/C++</li> 
                   <li>React js</li>
                   <li>Note js</li>
                   <li>Data Structure</li> 
                   
               
                  </ul>
                    
                   </p>
           
                   </div>
                 </div>
               </div>
             </div>
             
            <Education />

            <Launages />
           
           <Work />
          
           <Devlosk />

           <Project />

           


           <Social />

            <From />

          
        
          
       
     </div>
   </div>
 </div>

   


</main>
              
      



                
            </>
        )
    }
}
