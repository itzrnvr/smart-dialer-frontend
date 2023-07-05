export default {
	async pageStart () {
		if(appsmith.store.isSidebarOpen){
			postWindowMessage("toggleSidebar", "window", "*")
			storeValue("isSidebarOpen", false)
		}
	}
}