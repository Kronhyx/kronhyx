<template>
  <div>
    <b-row id="hero" tag="section" align-h="center" align-v="center">
      <b-container class="hero-container">
        <div class="text-center">
          <h1 v-text="name" />
          <p>
            <span>Im</span>
            <span class="typed">Developer</span>
          </p>
        </div>
      </b-container>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'

interface SkillInterface {
  name: string,
  icons?: string[]
  description?: string
}

@Component({ components: { } })
export default class DefaultLayout extends Vue {
  @State('name') readonly name!: string

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
