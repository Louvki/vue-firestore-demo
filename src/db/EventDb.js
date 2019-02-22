import db from './index';
import store from '../store/store.js';
const eventsRef = db.collection('events');

eventsRef.onSnapshot((querySnapshot) => {
  const events = [];
  querySnapshot.forEach((doc) => {
    events.push(doc.data());
  });
  store.dispatch('event/setEvents', events);
});

export default {
  createEvent(event) {
    return db.collection('events').add(event);
  },    
  updateEvent(event, eventid) {
    
  },    
  setEvent() {
    
  },    
  deleteEvent() {
    
  },
};
