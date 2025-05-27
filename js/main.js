const frm = document.querySelector("form")
const out = document.querySelector("#out")
const container = document.querySelector(".container")
const login = document.querySelector(".login")
const iEmail = frm.querySelector("#iEmail")
const btMenu = document.querySelector("#bt-menu")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    out.innerText = `Obrigado por se cadastrar! Fique de olho no seu e-mail e 
    prepare-se para elevar sua experiência digital!
`
})

btMenu.addEventListener("click", ()=>{
container.className = "sumir"
login.style.display = "block"
})