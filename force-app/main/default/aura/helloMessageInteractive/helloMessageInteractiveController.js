({
    handleClick : function(component, event, helper) {
        var btnClicked = event.getSource();
        var btnMessage = btnClicked.get("v.label");
        component.set("v.message", btnMessage);
    },

    handleClick2: function(component, event, helper) {
        let newMessage = event.getSource().get("v.label");
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.message", newMessage);
    },

    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
})
