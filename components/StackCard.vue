<template>
  <b-col cols="6" md="3" class="item">
    <div class="item-inner mb-1">
      <div class="item-icon">
        <slot name="icons">
          <b-img-lazy src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" :height="30" />
          <b-img-lazy src="https://angular.io/assets/images/logos/angular/angular.svg" :height="30" />
        </slot>
      </div>
      <h3 class="item-title" v-text="title" />
      <div class="item-desc">
        <slot />
      </div>
    </div>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class StackCard extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string
}
</script>
