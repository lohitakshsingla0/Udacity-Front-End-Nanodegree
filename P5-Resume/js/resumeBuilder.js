
//maiking object of bio 
var bio = {
 	"name" : "Lohitaksh Singla",
 	"role" : "web-developer",
 	"contacts" : {
 		"mobile" : "+919592722282",
 		"email" : "lohitakshsingla0@gmail.com",
 		"github" : "gitlohit",
 		"twitter" : "lohit000",
 		"location" : "Patiala,Punjab"
				},

	"welcomeMessage" : "Welcome to my resume",
	"skills" : ["c","c++","HTML","CSS","Java Script","JQuery"],
	"biopic" : "images/biopic.jpg"								
//displaying the bio
 };

 //making function of bio
 bio.display = function(){
//$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
//$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts,#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts,#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts,#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts,#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts,#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
           for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}
};
bio.display();  //scope resolution for bio


//making object of work
var work = {

			  "jobs": [{
                 "employer": "Chitkara University Rajpura", 
                 "title" : "Engineering Student", 
                 "location": "rajpura", 
                 "dates": "Batch: 2015-2019",
                 "description" : "B.E.(Computer Science)"
             }]
         };


//making function of work
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
              $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location) + HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

    }
};
work.display();  //scope resolution for work function


//making object for projects
var projects = {
    "projects": [{
            "title": "Responsive web page using bootstrap",
            "dates": "2017",
            "description": "using HTML,CSS,Bootstrap and jQuery",		
            "images": ["images/responsive.png"]
        },
				{
            "title": "Portfolio",
            "dates": "2017",
            "description": "using HTML,CSS,Bootstrap and jQuery",
            "images": ["images/portfolio.png"]
        }]};


//making function for projects
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title) + HTMLprojectDates.replace("%data%", projects.projects[i].dates));
       
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        for (j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};
projects.display();  //scope resolution for project function

//making object array of education...using
var education= {
    "schools" : [
    {
     "name" : "G B International School",
     "location" : "Nabha ,Patiala,Punjab ",
     "dates" : "passout-2013",
     "degree" : "Middle-School",
     "majors" : ["Matric and Non medical"],
     "url" : "http://www.gbisnabha.com/"
    },
    {
     "name" : "Chitkara University",
     "location" : "Chitkara university, Village Jhansla, Patiala, Punjab",
     "dates" : "2015-2019",
     "degree" : "B.E.",
     "majors" : ["Computer Science"],
     "url" : "www.chitkara.edu.in/"
    }],
    
"onlineCourses": [{
        "title" : "Front end nano degree",
        "school" : "udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com"
    },
    {
        "title" : "introduction to c/c++",
        "school" : "coursera",
        "dates" : "2015",
        "url" : "https://www.coursera.org/learn/c-plus-plus-a"
    }]



    };


//function for education function
education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates) + HTMLschoolLocation.replace("%data%", education.schools[i].location));
         $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for (j = 0; j < education.onlineCourses.length; j++) {
        displayOnline = [];
        displayOnline.push(HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school));
        displayOnline.push(HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates) + HTMLonlineURL.replace("%data%", education.onlineCourses[j].url));
    
        for (i = 0; i < displayOnline.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(displayOnline[i]);
        }
    }
};



//scope resolution for education function
education.display();


//appending googleMap
$("#mapDiv").append(googleMap);
