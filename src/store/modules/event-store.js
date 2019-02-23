import EventDb from '../../db/EventDb';

const state = {
  events: [],
  eventCount: 0,
  event: {},
  perPage: 3,
};

const mutations = {
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

const actions = {
  setEvents({commit}, events) {
    commit('SET_EVENTS', events);
    commit('SET_EVENT_COUNT', events.length);
  },
  createEvent({commit, dispatch}, event) {
    return EventDb.createEvent(event)
        .then(() => {
          const notification = {
            type: 'success',
            message: 'Event added successfully!',
          };
          dispatch('notification/add', notification, {root: true});
        })
        .catch((e) => {
          const notification = {
            type: 'error',
            message: 'Failed to add event: ' + e.message,
          };
          dispatch('notification/add', notification, {root: true});
          throw e;
        });
  },
  getEvent({getters}, eventId) {
    return getters.getEventById(eventId);
  },
};

const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((e) => e.id === id);
  },
  getEventsPaginated: (state) => (page) => {
    const startAt = (page - 1) * state.perPage;
    return state.events.slice(startAt, startAt + state.perPage);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
