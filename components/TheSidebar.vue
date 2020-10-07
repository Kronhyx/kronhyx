<template>
  <header class="header text-center">
    <div class="force-overflow">
      <h1 class="blog-name pt-lg-4 mb-0">
        <a>Randy Tellez</a>
      </h1>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <b-navbar-toggle target="navigation" />

        <b-collapse id="navigation" is-navclass="flex-column" visible>
          <div class="profile-section pt-3 pt-lg-0">
            <img class="profile-image mb-3 rounded-circle mx-auto" src="https://avatars0.githubusercontent.com/u/16559276?s=460&u=51fd2dbf319237d204efb1cf21b41b38057ecffd&v=4" alt="image">

            <div class="bio mb-3">
              Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!
            </div>
            <b-row align-h="center">
              <b-col v-for="social in networks" :key="social.name" cols="2">
                <b-btn variant="primary" size="sm" :to="social.link" target="_blank" pill>
                  <i class="fa" :class="social.icon" />
                </b-btn>
              </b-col>
            </b-row>
          </div>

          <hr>

          <b-navbar-nav class="flex-column text-left">
            <b-nav-item v-for="item in menu" :key="item.name">
              <b-row>
                <b-col cols="1" class="fa">
                  <i class="fa" :class="item.icon" />
                </b-col>
                <b-col v-text="item.name" />
              </b-row>
            </b-nav-item>
          </b-navbar-nav>

          <hr class="mb-4">

          <div class="dark-mode-toggle text-center w-100">
            <b-btn>
              <i class="fa fa-crosshairs" />
              <span>Hire Me</span>
            </b-btn>
          </div>
        </b-collapse>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface LinkType {
  name: string
  icon: string
  link: string
}

@Component({ components: {} })
export default class TheSidebar extends Vue {
  get networks (): LinkType[] {
    return [
      { name: 'Twitter', icon: 'fa-twitter', link: 'https://twitter.com/kronhyx' },
      { name: 'LinkedIn', icon: 'fa-linkedin', link: 'https://linkedin.com/in/kronhyx' },
      { name: 'Github', icon: 'fa-github', link: 'https://github.com/kronhyx' },
      { name: 'Stackoverflow', icon: 'fa-stack-overflow', link: 'https://twitter.com/kronhyx' }
    ]
  }

  get menu (): LinkType[] {
    return [
      { name: 'About me', icon: 'fa-info-circle', link: 'https://twitter.com/kronhyx' },
      { name: 'Portfolio', icon: 'fa-briefcase', link: 'https://linkedin.com/in/kronhyx' },
      { name: 'Services', icon: 'fa-gear', link: 'https://github.com/kronhyx' },
      { name: 'Blog', icon: 'fa-podcast', link: 'https://twitter.com/kronhyx' },
      { name: 'Contact', icon: 'fa-handshake-o', link: 'https://fb.me/kronhyx' }
    ]
  }
}
</script>
