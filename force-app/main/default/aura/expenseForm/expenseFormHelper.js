({
    createExpense: function(component, newExpense) {
        let createEvent = component.getEvent("createExpense");
        createEvent.setParams({ "expense": newExpense });
        createEvent.fire();
    },
})
