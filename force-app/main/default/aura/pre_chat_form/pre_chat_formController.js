({
	/**
	 * After this component has rendered, create an email input field
	 *
	 * @param component - This prechat UI component.
	 * @param event - The Aura event.
	 * @param helper - This component's helper.
	 */
	onRender: function(component, event, helper) {
		// Get array of pre-chat fields defined in Setup using the prechatAPI component
		var prechatFields = component.find("prechatAPI").getPrechatFields();
		// This example renders only the email field using the field info that comes back from prechatAPI getPrechatFields()
		var emailField = prechatFields.find(function(field) {
			return field.type === "inputEmail";
		});
		
		// Append an input element to the prechatForm div.
		helper.renderEmailField(emailField);
	},

	/**
	 * Handler for when the start chat button is clicked
	 *
	 * @param component - This prechat UI component.
	 * @param event - The Aura event.
	 * @param helper - This component's helper.
	 */
	onStartButtonClick: function(component, event, helper) {
		var prechatInfo = helper.createStartChatDataArray();
		
		if(component.find("prechatAPI").validateFields(prechatInfo).valid) {
			component.find("prechatAPI").startChat(prechatInfo);
		} else {
			// Show some error
		}
	}
});