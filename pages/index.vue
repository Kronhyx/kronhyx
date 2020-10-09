<template>
  <div>
    <section class="pt-0">
      <b-row id="hero" align-h="center" align-v="center" no-gutters>
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
    </section>
    <section id="about" class="about">
      <b-container>
        <div class="section-title">
          <h2>About</h2>
          <p>
            First and foremost, I love writing code. Ever since writing my first program in C++ and manipulating it to
            produce a desired output, I have been obsessed with the idea of using software to solve practical problems.
            Software engineering is a never-ending puzzle that I am passionately engaged in solving. I believe in the
            power of programming to transform and improve the lives of people around the world.
          </p>
        </div>

        <b-row>
          <b-col md="4">
            <b-img-lazy :src="avatar" :alt="name" fluid />
          </b-col>
          <b-col md="8" class="content">
            <h3>Senior Software Developer &amp; DevOps Engineer.</h3>
            <p class="font-italic">
              I have more than 5 years' experience building software for clients all over the world.
              Below is a quick overview of my main technical skill sets and technologies I use.
              Want to find out more about my experience?
              Check out my <a>online resume</a> and <a>project portfolio</a>.
            </p>
            <b-row>
              <b-col md="6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>Birthday:</strong> 17 October 1993</li>
                  <li><i class="icofont-rounded-right" /> <strong>Website:</strong> kronhyx.me</li>
                  <li><i class="icofont-rounded-right" /> <strong>Phone:</strong> +1 305 697 88 54</li>
                  <li><i class="icofont-rounded-right" /> <strong>City:</strong> Santa Catarina, Brasil</li>
                </ul>
              </b-col>
              <b-col md="6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>Age:</strong> 30</li>
                  <li><i class="icofont-rounded-right" /> <strong>Degree:</strong> Master</li>
                  <li><i class="icofont-rounded-right" /> <strong>email:</strong> kronhyx@gmail.com</li>
                  <li><i class="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                </ul>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-bg">
      <b-container>
        <b-row>
          <div>
            <b-col cols="12" tag="p">
              <p>
                For my first professional contract, I was given the opportunity to lead a full UI/UX overhaul of a small
                start up's website. My second contract involved injecting HTML/CSS/JavaScript on popular merchant websites
                via a browser extension. This contract quickly turned into a full time offer and I have been happily
                expanding my role as a software engineer ever since. Today, I am a senior engineer at Flexy E-Commerce
                Plattaform working on the backend of our main marketplace, www.flexy.com.br. Most recently, we have been
                implementing a micro front end into our customer acquisition flow so that it can be dynamically composed
                using demographic data and allow for CI/CD deployments to bring features to market faster.
              </p>
              <p>
                Even when I leave the office, I tend to continue writing code at the house. Most recently I have been
                working on a website for my company, Skwezr. I dont play any musical instrument but also im an
                passionate by the music. Both pursuits challenge so many aspects of the intellect: creativity,
                organization, sequential processing, problem solving. This is what keeps me up at night, a never ending
                thirst to create beautiful, powerful things and share them with the world.
              </p>
            </b-col>
          </div>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'

@Component({ components: {} })
export default class IndexPage extends Vue {
  @State('name') readonly name!: string
  @State('avatar') readonly avatar!: string

  get skills (): string[] {
    return [
      'Typescript', 'Symfony', 'Laravel', 'NodeJS', 'Vue', 'Angular', 'VueX', 'NuxtJS', 'StencilJS', 'Webpack',
      'StyledComponents', 'WebNativeComponents', 'CSS', 'HTML', 'Git', ' GitLab', 'GitHub', 'SQL', ' DevOps', 'TDD',
      'Firebase', 'CI/CD', 'Docker'
    ]
  }
}
</script>
