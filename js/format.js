
function formatMoney(n){
if(!n)return 0
if(n>=100000000)return (n/100000000).toFixed(2)+"亿"
if(n>=10000)return (n/10000).toFixed(2)+"万"
return n
}
