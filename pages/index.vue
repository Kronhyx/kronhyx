<template>
  <div>
    <b-row id="hero" tag="section" align-h="center" align-v="center" no-gutters>
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
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
          <p>
            I have more than 5 years' experience building software for clients all over the world.
            Below is a quick overview of my main technical skill sets and technologies I use.
            Want to find out more about my experience?
            Check out my <a>online resume</a> and <a>project portfolio</a>.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right">
            <img :src="avatar" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
            <h3>Senior Software Developer &amp; DevOps Engineer.</h3>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>Birthday:</strong> 1 May 1995</li>
                  <li><i class="icofont-rounded-right" /> <strong>Website:</strong> www.example.com</li>
                  <li><i class="icofont-rounded-right" /> <strong>Phone:</strong> +123 456 7890</li>
                  <li><i class="icofont-rounded-right" /> <strong>City:</strong> New York, USA</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>Age:</strong> 30</li>
                  <li><i class="icofont-rounded-right" /> <strong>Degree:</strong> Master</li>
                  <li><i class="icofont-rounded-right" /> <strong>PhEmailone:</strong> email@example.com</li>
                  <li><i class="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
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
export default class IndexPage extends Vue {
  @State('name') readonly name!: string
  @State('avatar') readonly avatar!: string

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
