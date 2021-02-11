<template>
  <div>
    <div v-for="(item, index) in filteredArray" :key="item">
      {{ index }}. {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBlock",
  data() {
    return {
      array: ["HTML", "CSS", "Javascript", "Terminal"],
    };
  },
  computed: {
    filteredArray() {
      return this.array.filter((item, index) => index % 2 === 0);
    },
  },
};
</script>