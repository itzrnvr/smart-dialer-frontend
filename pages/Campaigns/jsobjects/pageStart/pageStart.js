export default {
	async checkAuth () {
		if(appsmith.store.token){
			console.log("authenticated")
			postWindowMessage(JSON.stringify({event: "toggleSidebar", data: ''}), "window", "*")
		} else {
			navigateTo("authentication")
		}
		console.log(appsmith.store.token)
	}
}