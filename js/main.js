const frm = document.querySelector("form")
const out = document.querySelector("#out")
const iEmail = frm.querySelector("#iEmail")

const emails = []

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    emails.push(iEmail.value)
    out.innerText = `Obrigado por se cadastrar! Fique de olho no seu e-mail e 
    prepare-se para elevar sua experiência digital!`
    
})