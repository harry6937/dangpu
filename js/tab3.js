function initLoan(){

document.getElementById("tab3").innerHTML=`
<div class="card">
总放贷本金：<span id="principal"></span><br>
月利息收入：<span id="interest"></span><br>
总利息收入：<span id="totalInterest"></span>
</div>

<div class="card">
<input id="loanDate" type="date">
<input id="loanName" placeholder="借款人">
<input id="loanPrincipal" placeholder="本金">
<input id="loanRate" placeholder="利率 %">
<button onclick="addLoan()">借出</button>
</div>

<table>
<thead>
<tr>
<th>借款日期</th>
<th>借款人</th>
<th>本金</th>
<th>月利息</th>
<th>总利息</th>
<th>删除</th>
</tr>
</thead>
<tbody id="loanTable"></tbody>
</table>
`

renderLoan()
}

function addLoan(){

let date=document.getElementById("loanDate").value
let name=document.getElementById("loanName").value
let p=parseFloat(document.getElementById("loanPrincipal").value)
let r=parseFloat(document.getElementById("loanRate").value)

if(!date){
date=new Date().toISOString().split("T")[0]
}

let rec={
type:"loan",
time:date,
name:name,
principal:p,
rate:r
}

loanRecords.push(rec)
saveRecord(rec)

renderLoan()
}

function renderLoan(){

let s=calcLoan()

document.getElementById("principal").innerText=formatMoney(s.principal)
document.getElementById("interest").innerText=formatMoney(s.interest)

let html=""
let allInterest = 0

loanRecords.forEach((l,i)=>{

let monthly=l.principal*(l.rate/100)

let start=new Date(l.time)
let now=new Date()

let months=(now.getFullYear()-start.getFullYear())*12+(now.getMonth()-start.getMonth())
if(months<0) months=0

let totalInterest=monthly*months

allInterest += totalInterest

html+=`<tr>
<td>${start.toLocaleDateString()}</td>
<td>${l.name}</td>
<td>${formatMoney(l.principal)}</td>
<td>${formatMoney(monthly)}</td>
<td>${formatMoney(totalInterest)}</td>
<td><button onclick="deleteLoan(${i})">删除</button></td>
</tr>`
})

document.getElementById("loanTable").innerHTML=html
document.getElementById("totalInterest").innerText=formatMoney(allInterest)

}

function deleteLoan(i){

if(!confirm("确认已还钱？删除记录？")) return

loanRecords.splice(i,1)

localStorage.setItem("records",JSON.stringify(records))

renderLoan()
}
