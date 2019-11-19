<template>
  <div>
    <v-calendar
      class="pa-8"
      locale="zhHant"
      color="primary"
      :events="events"
      :event-color="getEventColor"
    ></v-calendar>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [
      {
        name: "中奖啦",
        details: "这次真中奖啦",
        start: "2019-11-08",
        color: "blue"
      }
    ]
  }),
  methods: {
    getEventColor(event) {
      return event.color;
    }
  }
};
</script>

<style>
</style>
