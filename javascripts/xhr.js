var CatStore = ((oldCatStore) => { 

	oldCatStore.catLoadWorks = function(){
		let catsData = JSON.parse(this.responseText).cats;
		console.log("catData", catsData);
		
	};


	oldCatStore.ownerLoadWorks = function () {
		let ownerData = JSON.parse(this.responseText).owners;
		console.log("ownerData", ownerData);

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