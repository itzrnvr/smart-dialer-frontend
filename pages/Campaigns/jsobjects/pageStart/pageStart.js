export default {
	async checkAuth () {
		if(appsmith.store.isSidebarOpen == null){
			storeValue("isSidebarOpen", true)
		}
		if(appsmith.store.token){
			console.log("authenticated")
			if(!appsmith.store.isSidebarOpen){
				postWindowMessage("toggleSidebar", "window", "*")
				storeValue("isSidebarOpen", true)
			}
			
		} else {
			navigateTo("authentication")
		}
		console.log(appsmith.store.token)
	}
}