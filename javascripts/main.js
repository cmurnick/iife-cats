CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener("click", () => {
	
	if(event.target.id.indexOf("adopt") === 0) {
		console.log("event", event);
		let catIndex = event.target.id.split("-")[1];
		CatStore.adoptCat(catIndex);
	}
});

document.getElementById("all").addEventListener("click", (event) => {
	let cats = CatStore.getCats();
	let owners = CatStore.getOwners();
	CatStore.combineArrays(cats, owners);
})

document.getElementById("callan").addEventListener("click", (event) => {
	console.log("Callan event", event);
	CatStore. getCatsByOwner(2);

})

document.getElementById("zoe").addEventListener("click", (event) => {
	console.log("Zoe event", event);
	CatStore. getCatsByOwner(1);

})

document.getElementById("lauren").addEventListener("click", (event) => {
	console.log("lauren event", event);
	CatStore. getCatsByOwner(3);

})

document.getElementById("homeless").addEventListener("click", (event) => {
	console.log("Callan event", event);
	CatStore. getCatsByOwner(0);

})