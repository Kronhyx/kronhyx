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
          <b-col v-for="skill in skills" :key="skill.name" cols="6" md="4" class="item">
            <StackCard :title="skill.name">
              <template #icons>
                <b-btn-group size="sm">
                  <b-btn v-for="icon in skill.icons" :key="icon" size="sm">
                    <b-img-lazy :src="icon" :height="28" />
                  </b-btn>
                </b-btn-group>
              </template>
              List skills/technologies here. You can change the icon above to any of the 1500+
            </StackCard>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProfileCard from '~/components/ProfileCard.vue'
import StackCard from '~/components/StackCard.vue'

interface SkillInterface {
  name: string,
  icons?: string[]
  description?: string
}

@Component({ components: { ProfileCard, StackCard } })
export default class DefaultLayout extends Vue {
  get skills (): SkillInterface[] {
    return [
      {
        name: 'Vanilla JavaScript',
        icons: [
          require('@/assets/img/javascript.svg'),
          require('@/assets/img/html.svg'),
          require('@/assets/img/css.svg')
        ]
      },
      {
        name: 'Angular, React & Vue',
        icons: [
          require('@/assets/img/angularjs.svg'),
          require('@/assets/img/reactjs.svg'),
          require('@/assets/img/vuejs.svg')
        ]
      },
      {
        name: 'Runtime plataform',
        icons: [
          require('@/assets/img/nodejs.svg'),
          require('@/assets/img/denojs.svg')
        ]
      },
      {
        name: 'Composer, npm & Gulp',
        icons: [
          require('@/assets/img/composer.png'),
          require('@/assets/img/npm.svg'),
          require('@/assets/img/gulpjs.svg')
        ]
      },
      {
        name: 'PHP, Laravel, Symfony',
        icons: [
          require('@/assets/img/php.svg'),
          require('@/assets/img/symfony.svg'),
          require('@/assets/img/laravel.svg')
        ]
      },
      {
        name: 'GitHub, Docker',
        icons: [
          require('@/assets/img/github.svg'),
          require('@/assets/img/docker.svg')
        ]
      }
    ]
  }
}
</script>
