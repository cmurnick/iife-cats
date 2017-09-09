var CatStore = ((oldCatStore) => { 

	oldCatStore.catLoadWorks = function(){
		let catData = JSON.parse(this.responseText).cats;
		CatStore.setAllCats(catData);	
		CatStore.ownerXHR();
		
	};


	oldCatStore.ownerLoadWorks = function () {
		let ownerData = JSON.parse(this.responseText).owners;
		CatStore.setAllOwners(ownerData);
		let catArray = CatStore.getCats();
		let ownerArray = CatStore.getOwners();
		CatStore.combineArrays(catArray, ownerData);
	};

	oldCatStore.shitBroke = () => {
		console.log("What DID YOU DO?");
	};


	oldCatStore.catXHR = () => {
		let myCats = new XMLHttpRequest;
		myCats.addEventListener("load", CatStore.catLoadWorks)
		myCats.addEventListener("error", CatStore.shitBroke)
		myCats.open("GET", "./db/cats.json")
		myCats.send();
	};

	oldCatStore.ownerXHR = () => {
		let myOwner = new XMLHttpRequest;
		myOwner.addEventListener("load", CatStore.ownerLoadWorks)
		myOwner.addEventListener("error", CatStore.shitBroke)
		myOwner.open("GET", "./db/owners.json")
		myOwner.send();
	}

	return oldCatStore;
})(CatStore || {});