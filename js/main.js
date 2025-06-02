const frm = document.querySelector("form")
const out = document.querySelector("#out")
const container = document.querySelector(".container")
const login = document.querySelector(".login")
const iEmail = frm.querySelector("#iEmail")
const btMenu = document.querySelector("#bt-menu")

const emails = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const email = iEmail.value.toLowerCase().trim()

        emails.push(email)
        out.innerText = `Obrigado por se cadastrar! Fique de olho no seu e-mail e 
        prepare-se para elevar sua experiência digital!`
        out.style.color = "green"
 
        console.log(emails)
})

btMenu.addEventListener("click", ()=>{
container.className = "sumir"
login.className = "exibe"
})