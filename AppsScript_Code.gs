
function doGet(e){

const type=e.parameter.type
const sheet=SpreadsheetApp.getActive().getSheetByName(type)
const data=sheet.getDataRange().getValues()

return ContentService.createTextOutput(JSON.stringify(data))
.setMimeType(ContentService.MimeType.JSON)

}

function doPost(e){

const ss=SpreadsheetApp.getActive()

const pawn=ss.getSheetByName("Pawn")
const couple=ss.getSheetByName("Couple")
const loan=ss.getSheetByName("Loan")

const data=JSON.parse(e.postData.contents)

if(data.type=="pawn"){
pawn.appendRow([data.time,data.action,data.amount])
}

if(data.type=="couple"){
couple.appendRow([data.time,data.action,data.amount])
}

if(data.type=="loan"){
loan.appendRow([data.time,data.name,data.principal,data.rate])
}

return ContentService.createTextOutput("ok")

}
