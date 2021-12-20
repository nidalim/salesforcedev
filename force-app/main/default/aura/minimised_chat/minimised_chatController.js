({
	onInit: function(cmp, evt, hlp) {
        // Register the generic event handler for all the minimized events
        cmp.find("minimizedAPI").registerEventHandler( hlp.minimizedEventHandler.bind(hlp, cmp));
	},
    
    handleMaximize: function(cmp, evt, hlp) {
        cmp.find("minimizedAPI").maximize();
    }
})