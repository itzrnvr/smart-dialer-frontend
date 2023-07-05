export default {
	async pageStart () {
		if(appsmith.store.isSidebarOpen){
			postWindowMessage(JSON.stringify({event: "toggleSidebar", data: ''}), "window", "*")
			storeValue("isSidebarOpen", false)
		}
	}
}