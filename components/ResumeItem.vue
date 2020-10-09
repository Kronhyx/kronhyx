<template>
  <div class="resume-item">
    <h4 v-text="title" />
    <h5 v-text="date" />
    <em v-text="location" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class TheSidebar extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string
  @Prop({ required: true, type: String }) readonly date!: string
  @Prop({ required: true, type: String }) readonly location!: string
}
</script>
