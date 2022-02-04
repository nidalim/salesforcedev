({
    packItem : function(component, event, helper) {
        var btnClicked = event.getSource();
        var btnMessage = btnClicked.get("v.label");
        component.set("v.item.Packed__c", true);
        component.set("v.disabled", true);
    }
})
