({
	minimizedEventHandler: function(cmp, eventName, eventData) {
        switch(eventName) {
			case "prechatState":
				this.onPrechatState(cmp, eventData);
				break;
			case "offlineSupportState":
				this.onOfflineSupportState(cmp, eventData);
				break;
			case "waitingState":
				this.onWaitingState(cmp, eventData);
				break;
			case "queueUpdate":
				this.onQueueUpdate(cmp, eventData);
				break;
			case "waitingEndedState":
				this.onWaitingEndedState(cmp, eventData);
				break;
			case "chatState":
				this.onChatState(cmp, eventData);
				break;
			case "chatTimeoutUpdate":
				this.onChatTimeoutUpdate(cmp, eventData);
				break;
			case "chatUnreadMessage":
				this.onChatUnreadMessage(cmp, eventData);
				break;
			case "chatTransferringState":
				this.onChatTransferringState(cmp, eventData);
				break;
			case "chatEndedState":
				this.onChatEndedState(cmp, eventData);
				break;
			case "reconnectingState":
				this.onReconnectingState(cmp, eventData);
				break;
			case "postchatState":
				this.onPostchatState(cmp, eventData);
				break;
			default:
				throw new Error("Received unexpected minimized event '" + eventName + "'.");
		}
	},

	/**
	 * "prechatState" event handler. This fires when pre-chat state is initialized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onPrechatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "offlineSupportState" event handler. This fires when offline support state is initialized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onOfflineSupportState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "waitingState" and "queueUpdate" are fired when EITHER
	 * 1) waiting state is initialized, either with a new session or via page navigation or refresh, OR
	 * 2) the visitor was previously in reconnecting, and they've regained connection.
	 *
	 * Only one of "waitingState" and "queueUpdate" is ever fired - never both.
	 * - "waitingState" is fired if EITHER queue position is DISABLED, OR snippet version under 5.0.
	 * - "queueUpdate" is fired if queue position is ENABLED, AND snippet version is 5.0 or later.
	 */

	/**
	 * "waitingState" event handler. See above doc.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onWaitingState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "queueUpdate" event handler. See above doc.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and queuePosition.
	 */
	onQueueUpdate: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label + " " + eventData.queuePosition);
	},

	/**
	 * "waitingEndedState" event handler. This fires in waiting state when the chat request fails.
	 *
	 * @param {SampleCustomMinimizedUI.SampleCustomMinimizedUIComponent} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and reason. We don't use reason though.
	 */
	onWaitingEndedState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatState" event handler. This fires when EITHER
	 * 1) chat state is initialized, either with a new session or via page navigation or refresh, OR
	 * 2) the visitor was previously in chat transfer, and they've been connected to a new agent, OR
	 * 3) the visitor was previously in reconnecting, and they've regained connection.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onChatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatTimeoutUpdate" event handler. This fires when the visitor idle timeout has started.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and timeoutSecondsRemaining.
	 */
	onChatTimeoutUpdate: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatUnreadMessage" event handler. This fires when the agent sends a message but the visitor hasn't seen it
	 * yet, either because they are scrolled up in the chat message area, or because the widget is minimized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and unreadMessageCount.
	 */
	onChatUnreadMessage: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatTransferringState" event handler. This fires when a chat transfer has been initiated.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onChatTransferringState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatEndedState" event handler. This fires in chat state when the chat ends for any reason.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and reason.
	 */
	onChatEndedState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "reconnectingState" event handler. This fires in both waiting and chat state when the visitor loses connection.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onReconnectingState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "postchatState" event handler. This fires when the visitor enters post chat by clicking "Give Feedback".
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onPostchatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * Update the contents of the sample minimized component.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {String} message - The text to display.
	 */
	setMinimizedContent: function(cmp, message) {
		cmp.set("v.message", message);
	}
});