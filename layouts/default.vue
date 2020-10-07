<template>
  <div>
    <TheSidebar />
    <div class="main-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheSidebar from '~/components/TheSidebar.vue'

@Component({ components: { TheSidebar } })
export default class DefaultLayout extends Vue {

}
</script>
