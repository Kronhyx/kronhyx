<template>
  <div>
    <TheSidebar />
    <main id="main">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'
import { MetaInfo } from 'vue-meta'
import TheSidebar from '~/components/TheSidebar.vue'

@Component({ components: { TheSidebar } })
export default class DefaultLayout extends Vue {
  @State('name') readonly name!: string
  @State('nickname') readonly nickname!: string

  head (): MetaInfo {
    return {
      title: `${this.name} (${this.nickname})`
    }
  }
}
</script>
