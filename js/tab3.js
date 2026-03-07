
function initLoan(){

document.getElementById("tab3").innerHTML=`
<div class="card">
总放贷本金：<span id="principal"></span><br>
月利息收入：<span id="interest"></span>
</div>

<div class="card">
<input id="loanName" placeholder="借款人">
<input id="loanPrincipal" placeholder="本金">
<input id="loanRate" placeholder="利率 %">
<button onclick="addLoan()">借出</button>
</div>

<table>
<thead><tr><th>时间</th><th>借款人</th><th>本金</th><th>月利息</th></tr></thead>
<tbody id="loanTable"></tbody>
</table>
`

renderLoan()
}

function addLoan(){

let name=document.getElementById("loanName").value
let p=parseFloat(document.getElementById("loanPrincipal").value)
let r=parseFloat(document.getElementById("loanRate").value)

let rec={type:"loan",time:new Date(),name:name,principal:p,rate:r}
loanRecords.push(rec)
saveRecord(rec)

renderLoan()
}

function renderLoan(){

let s=calcLoan()

document.getElementById("principal").innerText=formatMoney(s.principal)
document.getElementById("interest").innerText=formatMoney(s.interest)

let html=""
loanRecords.forEach(l=>{

let monthly=l.principal*(l.rate/100)

html+=`<tr>
<td>${new Date(l.time).toLocaleDateString()}</td>
<td>${l.name}</td>
<td>${formatMoney(l.principal)}</td>
<td>${formatMoney(monthly)}</td>
</tr>`
})

document.getElementById("loanTable").innerHTML=html
}
