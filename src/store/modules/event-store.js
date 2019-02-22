import EventDb from '../../db/EventDb';

export const namespaced = true;

export const state = {
  events: [],
  eventCount: 0,
  event: {},
  perPage: 3,
};

export const mutations= {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT_COUNT(state, eventCount) {
    state.eventCount = eventCount;
  },
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  setEvents({commit}, events) {
    commit('SET_EVENTS', events);
    commit('SET_EVENT_COUNT', events.length);
  },
  createEvent({commit, dispatch}, event) {
    return EventDb.createEvent(event).then(() => {
      commit('ADD_EVENT', event);
      const notification = {type: 'success', message: 'Event added successfully!'};
      dispatch('notification/add', notification, {root: true});
    }).catch((e) => {
      const notification = {type: 'error', message: 'Failed to add event: ' + e.message};
      dispatch('notification/add', notification, {root: true});
      throw e;
    });
  },
  // fetchEventsPaginated({state}, {page}) {
  //   console.log(state.events);
  //   return state.events.slice(0, startAt);
  // },
};

export const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((e) => e.id === id);
  },
};
