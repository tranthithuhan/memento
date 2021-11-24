# memento
+ This project aims to implement memento design pattern to versioning musical track. 
  + Each track is represented by a Track class with attributes like name, creation date, ...
  + After several edits, users can restore to a version from the history list (maximum of 5 saved versions)

+ Memento design pattern allow making snapshots of an object's state and restoring it. In this case, object-s state is changed continuously and user may decide to rollback the changes. So memento may be considered in this case.
  + There are 3 mains class: 
    + Memento: contains basic state storage, can be read only by Originator.
    + Originator: creates a memento object to store its internal state and restore it.
    + Caretaker: keeps the track about Originator, knows why and when the Originator needs to save and restore itself.