skills = [

    {
        name: "Unity",
        comfortability: 5
    },
    {
        name: "C#",
        comfortability: 5
    },
    {
        name: "C++",
        comfortability: 3
    },
    {
        name: "Assembly",
        comfortability: 3
    },
    {
        name: "Godot",
        comfortability: 3
    },
    {
        name: "Blender",
        comfortability: 4
    },
    {
        name: "Arduino",
        comfortability: 3
    },
    {
        name: "Krita",
        comfortability: 4
    }
]

    // <div id="skills">
    //     <h2>Skills</h2>
    //     <div id="skillsContainer" class="classContainer">
    //         <div id="skill">
    //             <div id="bubbles"> 
    //                 <div class="skillCircle"></div>    
    //             </div>
    //             <div id="name"> Unity</div>
    //         </div>
    //     </div>
    // </div>
    
skills.forEach(skill => {
    // finds the skill container
    var skillsContainer = document.querySelector("#skillsContainer")

    // Creates new skill item div
    var newSkill = document.createElement("div");
    newSkill.classList.add("skill")

    // //Creates the circles and name
    var item = RenderSkill(skill, newSkill)

    
    // //adds to the skill container
    skillsContainer.append(newSkill)
});

function RenderSkill(skill, skillDiv)
{

    var dots = RenderDot(skill.comfortability);
    skillDiv.append(dots);
    
    var name = document.createElement("div");
    name.textContent = skill.name;
    skillDiv.append(name)

    return skillDiv
}

function RenderDot(number)
{
    var dotContainer = document.createElement("div");
    var currentNum = 0;
    for (let index = 0; index < number; index++) {
        var dot = document.createElement("div");
        dot.classList.add("skillCircle");
        dotContainer.append(dot)
        currentNum++;
    }
    // console.log(currentNum);
    for (let index = currentNum; index < 5; index++) {
        var NoDot = document.createElement("div");
        NoDot.classList.add("skillCircleDeactivate");
        dotContainer.append(NoDot)
    }

    return dotContainer;

}