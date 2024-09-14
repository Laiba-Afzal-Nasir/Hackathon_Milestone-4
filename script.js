const form = document.getElementById('resume-form');

const output = document.getElementById('resume-output');

const profileInput = document.getElementById('profilePicture');



form.addEventListener('submit',(event) => {
    event.preventDefault();
    
const name = (document.getElementById('name')).value
const email = (document.getElementById('email')).value 
const phone = (document.getElementById('phone')).value
const education = (document.getElementById('education')).value
const experience = (document.getElementById('experience')).value
const skills = (document.getElementById('skills')).value  



/*         Profile Picture         */

const file = profileInput.files?.[0]

const profileUrl = file? URL.createObjectURL(file) : "";



const outputHtml = `
    <h1>Dynamic Resume</h1>
    ${profileUrl ? `<img src="${profileUrl}" alt="Profile Picture" class="profilePicture">`:''}
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    
    
    <h3>Education</h3>
    <p>${education}</p>
    
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    
    <h3>Skills</h3>
    <p>${skills}</p>   
    
`;

    if(output) {
        output.innerHTML = outputHtml; 
    }else {
        console.error("Missing Property!!!")
    }

})

