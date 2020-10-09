<template>
  <section class="resume">
    <b-container>
      <div class="section-title">
        <h2>Resume</h2>
        <p>
          For my first professional contract, I was given the opportunity to lead a full UI/UX overhaul of a small
          start up's website. My second contract involved injecting HTML/CSS/JavaScript on popular merchant websites
          via a browser extension. This contract quickly turned into a full time offer and I have been happily
          expanding my role as a software engineer ever since. Today, I am a senior engineer at Flexy E-Commerce
          Plattaform working on the backend of our main marketplace, www.flexy.com.br. Most recently, we have been
          implementing a micro front end into our customer acquisition flow so that it can be dynamically composed
          using demographic data and allow for CI/CD deployments to bring features to market faster.
        </p>
        <br>
        <p>
          Even when I leave the office, I tend to continue writing code at the house. Most recently I have been
          working on a website for my company, Skwezr. I dont play any musical instrument but also im an
          passionate by the music. Both pursuits challenge so many aspects of the intellect: creativity,
          organization, sequential processing, problem solving. This is what keeps me up at night, a never ending
          thirst to create beautiful, powerful things and share them with the world.
        </p>
      </div>

      <b-row>
        <b-col md="6">
          <h3 class="resume-title">
            Education
          </h3>
          <ResumeItem title="Computer Science Degree" date="2011 - 2016" location="Rochester Institute of Technology, Rochester, NY">
            <p>
              Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.
              Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend
            </p>
          </ResumeItem>
          <ResumeItem title="Bachelor of Fine Arts &amp; Graphic Design" date="2010 - 2014" location="Rochester Institute of Technology, Rochester, NY">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
          <ResumeItem title="Bachelor of Fine Arts &amp; Graphic Design" date="2010 - 2014" location="Rochester Institute of Technology, Rochester, NY">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
        </b-col>
        <b-col md="6">
          <h3 class="resume-title">
            Professional Experience
          </h3>
          <ResumeItem title="Fullstack Developer Pleno" date="2020" location="Flexy E-Commerce, Florianopolis, SC, Brasil">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
          <ResumeItem title="Product Engineer" date="2019 - 2020" location="Merthin Technologies">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
          <ResumeItem title="FullStack Developer" date="2018 - 2019" location="Smart145">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
          <ResumeItem title="Junior Software Developer" date="2014 - 2018" location="Correos de Cuba">
            <p>
              Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius
              unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila
            </p>
          </ResumeItem>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ResumeItem from '~/components/ResumeItem.vue'

interface SkillInterface {
  name: string,
  icons?: string[]
  description?: string
}

@Component({ components: { ResumeItem } })
export default class IndexPage extends Vue {
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
