<template>
  <div class="profile-teaser media flex-column flex-lg-row">
    <div class="media-body">
      <h2 class="name font-weight-bold mb-1" v-text="name" />
      <div class="tagline mb-3">
        Senior Software Engineer
      </div>
      <div class="bio mb-4">
        I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
        I write about software development on <a class="link-on-bg">my blog</a>.
        Want to know how I may help your project?
        Check out my project <a class="link-on-bg">portfolio</a>
        and <a class="link-on-bg">online resume</a>.
      </div>
      <div class="mb-4">
        <b-btn variant="primary" class="mr-2 mb-3">
          <i class="fa fa-arrow-right" />
          <span class="d-none d-md-inline">View</span>
          <span>Portfolio</span>
        </b-btn>
        <b-btn variant="secondary" class="mb-3">
          <i class="fa fa-file" />
          <span class="d-none d-md-inline">View</span>
          <span>Resume</span>
        </b-btn>
      </div>
    </div>
    <b-img-lazy class="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" :src="avatar" :alt="name" height="300" />
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class ProfileCard extends Vue {
  @State('name') readonly name!: string
  @State('avatar') readonly avatar!: string
}
</script>
