//your code here
let btn=document.querySelector("#add");
let table=document.querySelector("table");
let h3=document.querySelector("#total");
let count=0;
btn.addEventListener("click",()=>{
	
	let nameBox=document.querySelector("#item-name-input").value;
    let priceBox=document.querySelector("#item-price-input").value;
	let tr=document.createElement("tr");
	let td1=document.createElement("td");
	td1.innerText=nameBox;
	let td2=document.createElement("td");
	td2.innerText=priceBox;
	count+=priceBox;
	h3.innerText=count;
	

	tr.append(td1,td2);
	table.append(tr);
})

