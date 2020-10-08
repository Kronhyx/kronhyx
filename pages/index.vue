<template>
  <div>
    <section class="about-me-section p-3 p-lg-5">
      <b-container>
        <ProfileCard />
      </b-container>
    </section>
    <section class="overview-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-3">
          What I do
        </h2>
        <div class="section-intro mb-5">
          I have more than 10 years' experience building software for clients all over the world.
          Below is a quick overview of my main technical skill sets and technologies I use.
          Want to find out more about my experience?
          Check out my <a>online resume</a> and <a>project portfolio</a>.
        </div>
        <b-row>
          <StackCard title="Vanilla JavaScript">
            <template #icons>
              <b-img-lazy src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" :height="30" />
            </template>
            List skills/technologies here. You can change the icon above to any of the 1500+
            <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a>
            available. Aenean commodo ligula eget dolor.
          </StackCard>

          <StackCard title="Angular, React & Vue">
            <template #icons>
              <b-img-lazy src="https://avatars0.githubusercontent.com/u/139426?s=200&v=4" :height="30" />
              <b-img-lazy src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png" :height="30" />
              <b-img-lazy src="https://vuejs.org/images/logo.png" :height="30" />
            </template>
            List skills/technologies here. You can change the icon above to any of the 1500+
            <a class="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a>
            available. Aenean commodo ligula eget dolor.
          </StackCard>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProfileCard from '~/components/ProfileCard.vue'
import StackCard from '~/components/StackCard.vue'

@Component({ components: { ProfileCard, StackCard } })
export default class DefaultLayout extends Vue {

}
</script>
