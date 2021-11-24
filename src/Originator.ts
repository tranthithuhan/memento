import Track from './Track'
import Memento from './Memento'

class Originator {
	private track: Track
	
	constructor(track = new Track({})) {
		this.track = track
	}
	
	save() {
		return new Memento(this.track)
	}
	
	getTrack(memento) {
		return memento.getState()
	}
}

export default Originator