class Track {
	name: string
	creationDate: number
	
	constructor({ name = null, creationDate = null }) {
		this.name = name
		this.creationDate = creationDate
	}
	
	setName(name: string) {
		this.name = name
	}
	
	setCreationDate(creationDate: number) {
		this.creationDate = creationDate
	}
	
	getTrack() {
		return {
			name: this.name,
			creationDate: this.creationDate
		}
	}
	
	clone() {
		return new Track(this.getTrack());
	}
}

export default Track