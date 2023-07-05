export default {
	async pageStart () {
		postWindowMessage(JSON.stringify({event: "toggleSidebar", data: ''}), "window", "*")
	}
}