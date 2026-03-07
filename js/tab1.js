
function initPawn(){

document.getElementById("tab1").innerHTML=`
<div class="card">
资金账户余额：<span id="pool"></span><br>
当铺欠Harry：<span id="harry"></span><br>
当铺欠小云：<span id="xiaoyun"></span><br>
总资产：<span id="total"></span>
</div>

<div class="card">
<input id="pawnAmount" placeholder="金额">
<button onclick="pawnMenu('Harry')">Harry</button>
<button onclick="pawnMenu('小云')">小云</button>
<button onclick="pawnMenu('当铺')">当铺</button>
</div>

<table>
<thead><tr><th>时间</th><th>类型</th><th>金额</th></tr></thead>
<tbody id="pawnTable"></tbody>
</table>
`

renderPawn()
}

function pawnMenu(p){

let html=""

if(p=="Harry"){
html+=`<button onclick="addPawn('Harry垫付')">Harry垫付</button>`
html+=`<button onclick="addPawn('Harry存入资金账户')">Harry存入资金账户</button>`
}

if(p=="小云"){
html+=`<button onclick="addPawn('小云垫付')">小云垫付</button>`
html+=`<button onclick="addPawn('小云存入资金账户')">小云存入资金账户</button>`
}

if(p=="当铺"){
html+=`<button onclick="addPawn('当铺存入')">当铺存入</button>`
html+=`<button onclick="addPawn('还Harry')">还Harry</button>`
html+=`<button onclick="addPawn('还小云')">还小云</button>`
}

html+=`<button onclick="closePopup()">取消</button>`

openPopup(html)
}

function addPawn(type){

let v=parseFloat(document.getElementById("pawnAmount").value)
if(!v)return

let r={type:"pawn",time:new Date(),action:type,amount:v}
pawnRecords.push(r)
saveRecord(r)

closePopup()
renderPawn()
}

function renderPawn(){

let s=calcPawn()

document.getElementById("pool").innerText=formatMoney(s.pool)
document.getElementById("harry").innerText=formatMoney(s.harry)
document.getElementById("xiaoyun").innerText=formatMoney(s.xiaoyun)
document.getElementById("total").innerText=formatMoney(s.total)

let html=""
pawnRecords.forEach(r=>{
html+=`<tr>
<td>${new Date(r.time).toLocaleString()}</td>
<td>${r.action}</td>
<td>${formatMoney(r.amount)}</td>
</tr>`
})

document.getElementById("pawnTable").innerHTML=html
}
