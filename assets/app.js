
const PRODUCTS=[
["Rice","Grocery",8,45.33],["Wheat","Grocery",42,31.40],["Atta","Grocery",28,37.11],
["Gram Dal","Grocery",18,86.68],["Tur Dal","Grocery",7,123.49],["Moong Dal","Grocery",24,111.89],
["Masoor Dal","Grocery",16,90.31],["Sugar","Grocery",35,50.14],["Salt","Grocery",50,22.13],
["Sunflower Oil","Grocery",6,190.03],["Mustard Oil","Grocery",14,196.85],["Milk","Dairy",5,61.01],
["Butter","Dairy",18,60.14],["Eggs","Dairy",22,85.91],["Bread","Grocery",35,40],
["Biscuits","Snacks",7,30],["Tea","Beverages",11,275.57],["Potato","Grocery",32,22.87],
["Onion","Grocery",27,35.57],["Tomato","Grocery",0,38.81]
];
const SALES=[
["Rice",12,45.33],["Milk",18,61.01],["Bread",14,40],["Sugar",9,50.14],
["Sunflower Oil",6,190.03],["Biscuits",11,30],["Tur Dal",5,123.49],["Eggs",8,85.91]
];
function money(n){return "₹"+Math.round(Number(n)||0).toLocaleString("en-IN")}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function filterPage(){
 const q=(document.getElementById("pageSearch")?.value||"").toLowerCase();
 document.querySelectorAll("tbody tr").forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?"":"none");
}
function threshold(){return Number(localStorage.getItem("stockThreshold")||10)}
