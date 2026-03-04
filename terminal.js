const input=document.getElementById("terminal-input")
const output=document.getElementById("terminal-output")

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

const cmd=input.value

let response=""

if(cmd==="help"){
response="commands: help, projects, resume, contact"
}

else if(cmd==="projects"){
response="scroll to the projects section"
}

else if(cmd==="resume"){
response="download from hero section"
}

else if(cmd==="contact"){
response="email: thakurshrvan2004@gmail.com"
}

else{
response="unknown command"
}

output.innerHTML+=`<div>> ${cmd}</div><div>${response}</div>`

input.value=""

}

})
