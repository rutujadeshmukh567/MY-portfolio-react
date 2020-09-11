import React, {Component} from 'react';
import{ Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
         <div>
             <Grid>
                 <Cell col={4}>
                     <div style={{textAlign:'center'}}>
                         <img
                         src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                         alt="avatar"
                         style={{height: '200px'}}
                         />
                     </div>

                     <h2 style={{paddingTop: '2em'}}>Pratiksha Repaswal</h2>
                     <h4 style={{color: 'grey'}}>Student</h4>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                     <h5>Address</h5>
                     <p>Wagholi Pune, 412207</p>
                     <h5>Phone</h5>
                     <p>(123) 456-7896</p>
                     <h5>Email</h5>
                     <p>someone@example.com</p>
                     <h5>Web</h5>
                     <p>mywebsite.com</p>
                     <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                 </Cell>


                 <Cell className="resume-right-col" col={8}>
                     <h2>Education</h2>

                     <Education
                     startYear={2010}
                     endYear={2014}
                     schoolName="My University"
                     schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                     />

                    <Education
                     startYear={2015}
                     endYear={2017}
                     schoolName="My 2nd University"
                     schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                     />

                     <hr style={{borderTop:'3px solid #e22947'}}/>
                     <h2>Experience</h2>

                     <Experience
                     startYear={2017}
                     endYear={2018}
                     jobName="First Job"
                     jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                     />

                    <Experience
                     startYear={2018}
                     endYear={2019}
                     jobName="Second Job"
                     jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                     />

                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills
                    skill="javascript"
                    progress={100}
                    />
                    <Skills
                    skill="HTML/CSS"
                    progress={80}
                    />
                    <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                    skill="React"
                    progress={25}
                    />


                 </Cell>
             </Grid>
         </div>
        )
    }
}

export default Resume;