// const form=document.getElementById("resume-form") as HTMLFormElement
// const resumeDisplayElement=document.getElementById("resume-dispaly") as HTMLDivElement
// //handle form Submission
// form.addEventListene(`submit`,(event:Event)=>{
//     event.preventDefault();
// //collect input values
// const name=(document.getElementById(`name`)as HTMLInputElement).value
// const fathername=(document.getElementById(`fathername`)as HTMLInputElement).value
// const email=(document.getElementById(`email`)as HTMLInputElement).value
// const mobileno=(document.getElementById(`mobileno`)as HTMLInputElement).value
// const education=(document.getElementById(`education`)as HTMLInputElement).value
// const experience=(document.getElementById(`experience`)as HTMLInputElement).value
// // generate the resume content dynamically
// const resumeHTML=`
// <h2><b>Resume</b></h2>
// <h3>Personal Information</h3>
// <p><b>Name</b>${name}</p>
// <p><b>Fathername:</b>${fathername}</p>
// <p><b>Email:</b>${email}</p>
// <p><b>mobileno:</b>${mobileno}</p>
// <h3>Education</h3>
// <p>${education}</p>
// <h3>Experiences</h3>
// <p>${experience}</p>
// `;
// //display the generated resume
// if(resumeDisplayElement){
//     resumeDisplayElement.innerHTML=resumeHTML;
// }else{
//     console.log(`The resume display element is missing.`);
// }
// });
//Get referwncea to the foem and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name</b>".concat(name, "</p>\n      <p><b>Email</b>").concat(email, "</p>\n       <p><b>Phone</b>").concat(phone, "</p>\n       \n        <h3>Education</h3>\n       <p>").concat(education, "</p>\n\n\n       <h3>Experiance</h3>\n       <p>").concat(experiance, "</p>\n\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    //Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        (console.error);
    }
});
