const nameEl=document.getElementById("name");
const imageEl=document.getElementById("image");
const titleEl=document.getElementById("title");
const locationEl=document.getElementById("location");
const emailEl=document.getElementById("email");
const phoneEl=document.getElementById("phone");
let skillAreaEl=document.getElementById("skillarea");
let languageAreaEl=document.getElementById("languagearea");
let experienceAreaEl=document.getElementById("experiencearea");
let educationAreaEl=document.getElementById("educationarea");

fetch("./db.json").then(res => res.json()).then(data => 
{
    console.log(data);
    nameEl.innerText=data.profile.name;
    titleEl.innerHTML+=data.profile.title;
    locationEl.innerHTML+=data.profile.location;
    emailEl.innerHTML+=data.profile.email;
    phoneEl.innerHTML+=data.profile.phone;
    imageEl.src = data.profile.image;

    data.profile.skills.forEach(element => {
        skillAreaEl.innerHTML += `
        <p>${element.name}</p>
                    <div class="skillbar">
                        <div class="percentage" style="width:${element.level}%;">${element.level}%</div>
                    </div>`;
    });

    data.profile.languages.forEach(element => {
        languageAreaEl.innerHTML += `
        <p>${element.language}</p>
                <div class="languagebar">
                    <div class="percentage" style="width:${element.proficiency}%;"></div>
                </div>
        `;
    })

    data.workExperience.forEach((element,index) => {
        experienceAreaEl.innerHTML += `
        <div class="sub-exp">
                    <h3>${element.role} / ${element.company}</h3>
                    <h4><i class="fa-regular fa-calendar-days"></i> ${element.startDate} - 
                    ${
                        index == 0 ?
                        `<span class="current">${element.endDate}</span>`
                        :`<span>${element.endDate}</span>`
                        
                    }
                   </h4>
                    <p>${element.description}</p>
                </div>
                <hr>
        `;
    })

    data.education.forEach(element => {
        educationAreaEl.innerHTML += `
        <div class="sub-exp">
                        <h3>${element.institution}</h3>
                        <h4><i class="fa-regular fa-calendar-days"></i> ${element.period}</h4>
                        <p>${element.description}</p>
                    </div>
                    <hr>`;
    })
}
);