import db from './db';
import store from '../store/store.js';
const eventsRef = db.collection('events');

// Initialize realtime listener which persists the data to the store.
eventsRef.onSnapshot((querySnapshot) => {
  const events = [];
  querySnapshot.forEach((doc) => {
    events.push(doc.data());
  });
  store.dispatch('event/setEvents', events);
});


// When pushing any objects to firestore I make sure to use Object.assign in case it is a custom js object since firestore doesn't accept them.
export default {
  createEvent(event) {
    return eventsRef.add(Object.assign({}, event));
  },    
  updateEvent(event, eventId) {
    return eventsRef.doc(eventId).update(Object.assign({}, event));
  },    
  setEvent() {
    return eventsRef.doc(eventId).set(Object.assign({}, event));
  },    
  deleteEvent() {
    return eventsRef.doc(eventId).delete();
  },
};
