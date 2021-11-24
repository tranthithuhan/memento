import Caretaker from './Caretaker'
import Track from './Track'

var caretaker = new Caretaker();
var track = new Track({ name: "song 1" });

caretaker.save(track);

track.setName("update 1");
caretaker.save(track);

track.setName("update 2");
caretaker.save(track);

track.setName("update 3");
caretaker.save(track);

track.setName("update 4");
caretaker.save(track);

track.setName("update 5");
caretaker.save(track);

console.log("4", caretaker.getHistory());