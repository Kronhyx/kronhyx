<template>
  <div>
    <TheSidebar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TheSidebar from '~/components/TheSidebar.vue'

@Component({ components: { TheSidebar } })
export default class DefaultLayout extends Vue {

}
</script>
