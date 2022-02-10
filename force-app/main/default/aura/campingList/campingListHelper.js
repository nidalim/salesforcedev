({
    createItem: function(component, Item) {
        let theItems = component.get("v.campingList");
        // Copy the Item to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        let newItem = JSON.parse(JSON.stringify(Item));
        console.log("Items before 'create': " + JSON.stringify(theItems));
        theItems.push(newItem);
        component.set("v.campingList", theItems);
        console.log("Items after 'create': " + JSON.stringify(theItems));
    }
})