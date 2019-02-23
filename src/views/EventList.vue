<template>
  <div>
    <h1>Events for {{userName}}</h1>
    <EventCard v-for="event in events(page)" :key="event.id" :event="event"/>
    <template v-if="page != 1">
      <router-link :to="{name: 'event-list', query: {page: page - 1} }" rel="prev">Previous page</router-link>
    </template>
    <span>|</span>
    <template v-if="page * perPage < eventCount ">
      <router-link :to="{name: 'event-list', query: {page: page + 1} }" rel="next">Next page</router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
import {mapState, mapGetters} from 'vuex';

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  routeTo.params.page = currentPage;
  next();
}

export default {
  components: {
    EventCard,
  },
  props: {
    page: {
      type: Number,
      default: 1,
    },
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    ...mapState({
      eventCount: (state) => state.event.eventCount,
      perPage: (state) => state.event.perPage,
      userName: (state) => state.user.user.name,
    }),
    ...mapGetters({
      events: 'event/getEventsPaginated',
    }),
  },
};
</script>
