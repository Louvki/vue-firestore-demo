import store from '../../store/store';

export default class Event {
  constructor() {
    this.id = Math.floor(Math.random() * 1000000),
    this.user = store.state.user.user,
    this.category = '';
    this.organizer = store.state.user.user,
    this.title = '';
    this.description = '';
    this.location = '';
    this.date = '';
    this.time = '';
    this.attendees = [];
  }
}
