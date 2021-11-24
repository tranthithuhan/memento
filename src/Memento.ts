import Track from './Track'

class Memento {
	private state: Track
	private saveDate: number
	
	constructor(state: Track) {
		this.state = state
		this.saveDate = new Date().getTime()
	}
	
	getState() {
		return {
			track: this.state.getTrack(),
			saveDate: this.saveDate
		};
	}
}

export default Memento