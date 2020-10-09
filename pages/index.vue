<template>
  <div>
    <section id="hero" class="pt-0">
      <b-container class="hero-container d-flex h-100 w-100 mx-auto">
        <b-row align-h="center" align-v="center" class="w-100" no-gutters>
          <div class="typed">
            <h1 v-text="name" />
            <p class="text-left">
              <strong>Im</strong>
              <vue-typer :text="whoami" :erase-delay="35" erase-style="backspace" initial-action="erasing" />
            </p>
          </div>
        </b-row>
      </b-container>
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

  get whoami () {
    return ['Senior Software Developer', 'DevOps Engineer']
  }
}
</script>
