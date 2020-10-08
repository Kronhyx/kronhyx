<template>
  <div>
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container aos-init aos-animate" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Photographer</span><span class="typed-cursor typed-cursor--blink">|</span></p>
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
