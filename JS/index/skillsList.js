const skills = [
    { name: "Unity", comfortability: 5 },
    { name: "C#", comfortability: 5 },
    { name: "C++", comfortability: 3 },
    { name: "Assembly", comfortability: 3 },
    { name: "Godot", comfortability: 3 },
    { name: "Blender", comfortability: 4 },
    { name: "Arduino", comfortability: 3 },
    { name: "Krita", comfortability: 4 },
    { name: "Figma", comfortability: 3 }
];

const skillsContainer = document.querySelector("#skillsContainer");

skills.forEach(skill =>
{
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    RenderSkill(skill, skillDiv);

    skillsContainer.appendChild(skillDiv);
});

function RenderSkill(skill, skillDiv)
{
    const dots = RenderDots(skill.comfortability);
    skillDiv.appendChild(dots);

    const name = document.createElement("div");
    name.textContent = skill.name;

    skillDiv.appendChild(name);
}

function RenderDots(level)
{
    const max = 5;
    const dotContainer = document.createElement("div");

    for (let i = 0; i < max; i++)
    {
        const dot = document.createElement("div");

        if (i < level)
        {
            dot.classList.add("skillCircle");
        }
        else
        {
            dot.classList.add("skillCircleDeactivate");
        }

        dotContainer.appendChild(dot);
    }

    return dotContainer;
}