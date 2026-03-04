const username="shrvan2004"

fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("repo-container")

data.slice(0,6).forEach(repo=>{

const card=document.createElement("div")

card.classList.add("project")

card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "Project description unavailable"}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>
`

container.appendChild(card)

})

})
