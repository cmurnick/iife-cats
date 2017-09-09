var CatStore = ((oldCatStore) => { 
	let cats = [];

	oldCatStore.getCats = () => {
		return cats;
	};

	oldCatStore.setAllCats = (allMyCats) => {
		cats = allMyCats;
	}

	oldCatStore.adoptCat = (catIndex) => {
		cats[catIndex].ownerId = 1;
		let myCats = CatStore.getCats();
		let MyOwners = CatStore.getOwners();
		CatStore.combineArrays(myCats, MyOwners);
	}

	return oldCatStore;
})(CatStore || {});