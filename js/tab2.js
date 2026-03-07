
function initCouple(){

document.getElementById("tab2").innerHTML=`
<div class="card">
关系：<span id="relation"></span>
</div>

<div class="card">
<input id="coupleAmount" placeholder="金额">
<button onclick="coupleMenu('Harry')">Harry</button>
<button onclick="coupleMenu('小云')">小云</button>
</div>

<table>
<thead><tr><th>时间</th><th>类型</th><th>金额</th></tr></thead>
<tbody id="coupleTable"></tbody>
</table>
`

renderCouple()
}

function coupleMenu(name){

let html=`
<button onclick="addCouple('${name}借钱')">借钱</button>
<button onclick="addCouple('${name}还钱')">还钱</button>
<button onclick="closePopup()">取消</button>
`

openPopup(html)
}

function addCouple(type){

let v=parseFloat(document.getElementById("coupleAmount").value)
if(!v)return

let r={type:"couple",time:new Date(),action:type,amount:v}
coupleRecords.push(r)
saveRecord(r)

closePopup()
renderCouple()
}

function renderCouple(){

let b=calcCouple()

let txt="双方已结清"
if(b>0)txt="Harry欠小云 "+formatMoney(b)
if(b<0)txt="小云欠Harry "+formatMoney(Math.abs(b))

document.getElementById("relation").innerText=txt

let html=""
coupleRecords.forEach(r=>{
html+=`<tr>
<td>${new Date(r.time).toLocaleString()}</td>
<td>${r.action}</td>
<td>${formatMoney(r.amount)}</td>
</tr>`
})

document.getElementById("coupleTable").innerHTML=html
}
