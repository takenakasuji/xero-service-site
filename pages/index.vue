<template>
  <div class="wrapper">
    <section>
      <app-header/>
    </section>
    <section>
      <service-content/>
    </section>
    <section>
      <case-content/>
    </section>
    <section>
      <profile-content/>
    </section>
    <section>
      <app-footer/>
    </section>
  </div>
</template>

<style scoped>
.wrapper {
  width: auto;
  font-family: Poppins, "Hiragino Kaku - W 3-90msp - RKSJ - H";
}
</style>


<script>
import AppHeader from '~/components/AppHeader.vue'
import ServiceContent from '~/components/ServiceContent.vue'
import CaseContent from '~/components/CaseContent.vue'
import ProfileContent from '~/components/ProfileContent.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    ServiceContent,
    CaseContent,
    ProfileContent,
    AppFooter
  }
}
</script>