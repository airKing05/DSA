// L#2 1762

// given - ocean is exit rigth side of the buildings
// find the index number of the build, from where we can see the ocean views


// know that the ocean is right side of the all buildings, so the list (right most bulding can always the the views)

//T: O(N)
// and S: O(N)  for the worst case; where as all builds as access of ocean views;


function buildingWithOceanView(building) {
    const len = building.length;
    let viewsIndexs = [len - 1];
    for (let i = len - 2; i >= 0; i--) {
        let currentBuilding = building[i];
        let lastBuilding = building[viewsIndexs[viewsIndexs.length - 1]]
        if (currentBuilding > lastBuilding) {
            viewsIndexs.push(i);
        }
    }
return viewsIndexs.reverse();
}

const result = buildingWithOceanView([4, 2, 3, 1]);
console.log(result);