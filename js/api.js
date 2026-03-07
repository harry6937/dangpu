
async function saveRecord(d){
await fetch(API_URL,{method:'POST',body:JSON.stringify(d)})
}
async function loadRecords(t){
let r=await fetch(API_URL+'?type='+t)
return await r.json()
}
