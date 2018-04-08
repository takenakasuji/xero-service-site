<template>
  <div>
    <section>
      <header-content/>
    </section>
    <section>
      <key-visual/>
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
      <header-content/>
    </section>
  </div>
</template>

<script>
import HeaderContent from '~/components/HeaderContent.vue'
import KeyVisual from '~/components/KeyVisual.vue'
import ServiceContent from '~/components/ServiceContent.vue'
import CaseContent from '~/components/CaseContent.vue'
import ProfileContent from '~/components/ProfileContent.vue'
import HooterContent from '~/components/HooterContent.vue'

export default {
  components: {
    HeaderContent,
    KeyVisual,
    ServiceContent,
    CaseContent,
    ProfileContent,
    HooterContent
  }
}
</script>