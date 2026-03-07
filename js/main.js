
async function init(){

let pawn=await loadRecords("Pawn")
let couple=await loadRecords("Couple")
let loan=await loadRecords("Loan")

pawn.shift();couple.shift();loan.shift()

pawnRecords=pawn.map(r=>({time:r[0],action:r[1],amount:Number(r[2])}))
coupleRecords=couple.map(r=>({time:r[0],action:r[1],amount:Number(r[2])}))
loanRecords=loan.map(r=>({time:r[0],name:r[1],principal:Number(r[2]),rate:Number(r[3])}))

initPawn()
initCouple()
initLoan()
initStats()
}

function showTab(n){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
document.getElementById('tab'+n).classList.add('active')
renderPawn()
renderCouple()
renderLoan()
renderStats()
}

function openPopup(html){
document.getElementById("popupMenu").innerHTML=html
document.getElementById("popup").style.display="flex"
}
function closePopup(){
document.getElementById("popup").style.display="none"
}

window.onload=init
