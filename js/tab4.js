
function initStats(){

document.getElementById("tab4").innerHTML=`
<table>
<thead>
<tr>
<th>月份</th>
<th>Harry垫付</th>
<th>小云垫付</th>
<th>当铺存入</th>
<th>利息收入</th>
</tr>
</thead>
<tbody id="statTable"></tbody>
</table>
`

renderStats()
}

function renderStats(){

let months=Array(12).fill().map(()=>({h:0,x:0,p:0,i:0}))

pawnRecords.forEach(r=>{
let m=new Date(r.time).getMonth()
if(r.action=="Harry垫付")months[m].h+=r.amount
if(r.action=="小云垫付")months[m].x+=r.amount
if(r.action=="当铺存入")months[m].p+=r.amount
})

loanRecords.forEach(l=>{
let m=new Date(l.time).getMonth()
months[m].i+=l.principal*(l.rate/100)
})

let html=""
months.forEach((m,i)=>{
html+=`<tr>
<td>${i+1}月</td>
<td>${formatMoney(m.h)}</td>
<td>${formatMoney(m.x)}</td>
<td>${formatMoney(m.p)}</td>
<td>${formatMoney(m.i)}</td>
</tr>`
})

document.getElementById("statTable").innerHTML=html
}
