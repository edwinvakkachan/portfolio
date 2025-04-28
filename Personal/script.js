const fullName=document.getElementById("name")
const email=document.getElementById("email")
const subject=document.getElementById("subject")
const message = document.getElementById("message")
const submitBtn = document.getElementById("submit-btn")
const formList = [fullName, email, subject, message]
let params={}

submitBtn.addEventListener("click", () => {
  for (let i = 0; i < formList.length; i++) {
    if (formList[i].value == "") {        
        alertNovalue(formList[i])
        return
    }
      params[formList[i].name] = formList[i].value
  }
  if (Object.keys(params).length == 4) {
    submitEmail()
  }
})

function alertNovalue(element) {
    element.classList.add("border-danger")
    setTimeout(() => {
    alert("Require field")
        
    }, 750);
}

function submitEmail() {
  emailjs.send("service_hmpwgml", "template_hxgz5kg", params).then(alert("Email send"))
}
