CatStore.catXHR();

document.getElementById("fancyPetStore").addEventListener("click", () => {
	
	if(event.target.id.indexOf("adopt") === 0) {
		console.log("event", event);
		let catIndex = event.target.id.split("-")[1];
		CatStore.adoptCat(catIndex);
	}
});

document.getElementById("callan").addEventListener("click", (event) => {
	console.log("Callan event", event);
	CatStore. getCatsByOwner(2);

})