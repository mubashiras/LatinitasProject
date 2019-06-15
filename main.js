document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)



function myName () {
    document.getElementById("name").innerHTML = "Mubashira Siddiqui";
    
}


function mySchool () {
    document.getElementById("school").innerHTML = "Chaparral Star Academy";

}

function myCareer () {
    document.getElementById("career").innerHTML = "I have many dreams for my future. I want to go to UT Austin or Rice University to do something I love. I am really interested in things like activism, journalism, and astronomy.";

}

function myHobbies () {
    document.getElementById("hobbies").innerHTML = "I like to read and play soccer.";

}


