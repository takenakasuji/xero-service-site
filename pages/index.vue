<template>
  <div>
    <section>
      <app-header/>
    </section>
    <section>
      <key-visual/>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import KeyVisual from '~/components/KeyVisual.vue'

export default {
  components: {
    AppHeader,
    KeyVisual
  }
}
</script>