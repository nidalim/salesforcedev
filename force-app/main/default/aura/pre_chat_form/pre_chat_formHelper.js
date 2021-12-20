({
	/**
	 * Create an HTML input element, set necessary attributes, add the element to the DOM
	 *
	 * @param emailField - Email pre-chat field object with attributes needed to render
	 */
	renderEmailField: function(emailField) {
		// Dynamically create input HTML element
		var input = document.createElement("input");
		
		// Set general attributes
		input.type = "email";
		input.class = emailField.label;
		input.placeholder = "Your email here.";
		
		// Set attributes required for starting a chat
		input.name = emailField.name;
		input.label = emailField.label;

		// Add email input to the DOM
		document.querySelector(".prechatFields").appendChild(input);
	},
    
	/**
	 * Create an array of data to pass to the prechatAPI component's startChat function
     */
	createStartChatDataArray: function() {
		var input = document.querySelector(".prechatFields").childNodes[0];
		var info = {
			name: input.name,
			label: input.label,
			value: input.value
		};

		return [info];
	}
});