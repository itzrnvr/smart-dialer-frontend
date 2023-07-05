export default {
	async checkAuth () {
		if(appsmith.store.token){
			console.log("authenticated")
		} else {
			navigateTo("authentication", {embed: true})
		}
		console.log(appsmith.store.token)
	}
}