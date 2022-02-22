({
    doInit : function(component, event, helper) {
        let mydate = component.get("v.expense.Date__c");
        if(mydate){
            component.set("v.formatdate", new Date(mydate));
        }
    },
    clickReimbursed: function(component, event, helper) {
        let expense = component.get("v.expense");
        let updateEvent = component.getEvent("updateExpense");
        updateEvent.setParams({ "expense": expense });
        updateEvent.fire();
    }
})