<template>
  <header id="header">
    <b-collapse id="navigation" class="d-flex flex-column" visible>
      <div class="profile">
        <b-img-lazy :src="avatar" rounded="circle" :alt="name" fluid />
        <h1 class="text-light">
          <n-link to="/" v-text="name" />
        </h1>
        <div class="social-links mt-3 text-center">
          <template v-for="network in networks">
            <a :key="network.name" :href="network.link" rel="noreferrer" target="_blank">
              <span class="sr-only" v-text="network.name" />
              <i class="bx" :class="network.icon" />
            </a>
          </template>
        </div>
      </div>

      <b-nav class="nav-menu" vertical>
        <b-nav-item v-for="item in menu" :key="item.name" :to="item.link" exact-active-class="active">
          <i class="bx" :class="item.icon" />
          <span v-text="item.name" />
        </b-nav-item>
      </b-nav>
      <b-navbar-toggle target="navigation" class="mobile-nav-toggle d-xl-none">
        <i class="bx bx-menu" />
      </b-navbar-toggle>
    </b-collapse>
  </header>
</template>

<script lang="ts">
import { Component, State, Vue } from 'nuxt-property-decorator'

interface LinkType {
  name: string
  icon: string
  link: string
}

@Component({ components: {} })
export default class TheSidebar extends Vue {
  @State('name') readonly name!: string
  @State('avatar') readonly avatar!: string

  get networks (): LinkType[] {
    return [
      { name: 'Twitter', icon: 'bxl-twitter', link: 'https://twitter.com/kronhyx' },
      { name: 'LinkedIn', icon: 'bxl-linkedin', link: 'https://linkedin.com/in/kronhyx' },
      { name: 'Instagram', icon: 'bxl-instagram', link: 'https://instagram.com/kronhyx' },
      { name: 'Github', icon: 'bxl-github', link: 'https://github.com/kronhyx' },
      { name: 'Skype', icon: 'bxl-skype', link: 'https://twitter.com/kronhyx' }
    ]
  }

  get menu (): LinkType[] {
    return [
      { name: 'About', icon: 'bx-home', link: '/' },
      { name: 'Resume', icon: 'bx-file-blank', link: '/resume' },
      { name: 'Portfolio', icon: 'bx-book-content', link: '/#' },
      { name: 'Services', icon: 'bx-server', link: '/#' },
      { name: 'Blog', icon: 'bx-file', link: '/#' },
      { name: 'Contact', icon: 'bx-envelope', link: '/#' }
    ]
  }
}
</script>
