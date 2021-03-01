<template>
  <div class="about">
    <i v-for="task in donetasksCompl" :key="task.Id"
      >{{ task.treść }} <button>usuń</button></i
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Completed',
  components: {
  },
  computed: {
    ...mapGetters([
      'donetasksCompl'
    ])
  }
}
</script>