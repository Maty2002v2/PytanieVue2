<template>
  <div>
    <i v-if="!edit">{{ task.treść }}</i>
    <input v-else v-model="task.treść" type="text" />

    <template v-if="!edit">
      <button @click="edit = !edit">edytuj</button>
      <button>usuń</button>
    </template>

    <template v-else>
      <button
        @click="
          updatedTask({ Id: task.Id, treść: task.treść });
          edit = !edit;
        "
      >
        zatwierdź
      </button>
      <button @click="edit = !edit">anuluj</button>
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ListTasks',
  props: {
    task: Object
  },
  data() {
    return {
      edit: false
    }
  },
  methods: {
    ...mapActions([
      'updatedTask'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button {
  margin: 0 5px;
}
i {
  margin: 0 50px 0 0;
}
a {
  color: #42b983;
}
</style>
