<template>
  <div v-if="loading">
    <loading />
  </div>
  <div class="wrapper" v-else>
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
  font-family: Poppins, "Hiragino Kaku", sans-serif;
}
</style>


<script>
import AppHeader from '@/components/AppHeader.vue'
import ServiceContent from '@/components/ServiceContent.vue'
import CaseContent from '@/components/CaseContent.vue'
import ProfileContent from '@/components/ProfileContent.vue'
import AppFooter from '@/components/AppFooter.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    AppHeader,
    ServiceContent,
    CaseContent,
    ProfileContent,
    AppFooter,
    Loading
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(this.loadingDisable, 3000)
  },
  methods: {
    loadingDisable() {
      this.loading = false
    }
  }
}
</script>
