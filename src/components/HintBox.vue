// src/components/HintBox.vue
<template>
  <div class="hint-box">
    <strong>
      💡 Dica:
    </strong>
    <p>{{ hint }}</p>
  </div>
</template>

<script>
export default {
  name: 'HintBox',
  props: {
    hint: {
      type: String,
      required: true
    }
  }
}
</script>
