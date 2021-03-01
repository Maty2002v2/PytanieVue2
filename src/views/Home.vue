<template>
  <div class="home">
    <ListTasks v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListTasks from '@/components/ListTasks.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ListTasks
  },
  computed: {
    ...mapState([
      'tasks'
    ])
  },
  created() {
    this.$store.dispatch('fetchTasks');
  }
}
</script>
