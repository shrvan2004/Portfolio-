const input=document.getElementById("terminal-input")
const output=document.getElementById("terminal-output")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

const cmd=input.value

let response=""

if(cmd==="help"){
response="commands: help, projects, resume, contact"
}

else if(cmd==="projects"){
response="Visit the projects section above."
}

else if(cmd==="resume"){
response="Download from hero section."
}

else if(cmd==="contact"){
response="Email: thakurshrvan2004@gmail.com"
}

else{
response="Unknown command"
}

output.innerHTML+=`<div>> ${cmd}</div><div>${response}</div>`

input.value=""

}

})
