import Originator from './Originator'
import Memento from './Memento'

const MAX_VERSION_LENGTH = 5

class Caretaker {
	states: Memento[]
	private originator: Originator
	
	constructor() {
		this.states = []
		this.originator = null
	}
	
	save(track) {
		if (this.states.length === MAX_VERSION_LENGTH)
			this.states.shift()
		
		this.originator = new Originator(track)
		this.states.push(this.originator.save())
	}
	
	getVersionLength(): number {
		return this.states.length
	}
	
	getHistory() {
		return this.states.map(state => this.originator.getTrack(state))
	}
	
	getVersion(version: number = null): [] {
		if (!this.states.length) {
			return
		}
		
		if (!version || version == 0 || version > this.states.length) {
			version = this.states.length
		}
		
		return this.originator.getTrack(this.states[version - 1])
	}
	
	restore(version: number) {
		if (version >= this.states.length)
			return
		
		this.states.splice(version)
		return this.getVersion();
	}
	
}

export default Caretaker