
function calcPawn(){
let pool=0,harry=0,xiaoyun=0
pawnRecords.forEach(r=>{
if(r.action=="Harry垫付")harry+=r.amount
if(r.action=="小云垫付")xiaoyun+=r.amount
if(r.action=="Harry存入资金账户")pool+=r.amount
if(r.action=="小云存入资金账户")pool+=r.amount
if(r.action=="当铺存入")pool+=r.amount
if(r.action=="还Harry"){pool-=r.amount;harry-=r.amount}
if(r.action=="还小云"){pool-=r.amount;xiaoyun-=r.amount}
})
return {pool,harry,xiaoyun,total:pool+harry+xiaoyun}
}

function calcCouple(){
let b=0
coupleRecords.forEach(r=>{
if(r.action=="Harry借钱")b+=r.amount
if(r.action=="Harry还钱")b-=r.amount
if(r.action=="小云借钱")b-=r.amount
if(r.action=="小云还钱")b+=r.amount
})
return b
}

function calcLoan(){
let p=0,i=0
loanRecords.forEach(l=>{
p+=l.principal
i+=l.principal*(l.rate/100)
})
return {principal:p,interest:i}
}
