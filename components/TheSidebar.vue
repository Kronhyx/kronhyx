<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <b-img-lazy :src="avatar" rounded="circle" fluid />
        <h1 class="text-light">
          <n-link to="/" v-text="name" />
        </h1>
        <div class="social-links mt-3 text-center">
          <a v-for="network in networks" :key="network.name" :href="network.link" target="_blank">
            <i class="bx" :class="network.icon" />
          </a>
        </div>
      </div>

      <b-nav class="nav-menu">
        <ul>
          <li v-for="item in menu" :key="item.name" class="active">
            <n-link :to="item.link">
              <i class="bx" :class="item.icon" />
              <span v-text="item.name" />
            </n-link>
          </li>
        </ul>
      </b-nav><!-- .nav-menu -->
      <button type="button" class="mobile-nav-toggle d-xl-none">
        <i class="icofont-navigation-menu" />
      </button>
    </div>
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
      { name: 'Resume', icon: 'bx-file-blank', link: '/' },
      { name: 'Portfolio', icon: 'bx-book-content', link: '/' },
      { name: 'Services', icon: 'bx-server', link: '/' },
      { name: 'Blog', icon: 'bx-file', link: '/' },
      { name: 'Contact', icon: 'bx-envelope', link: '/' }
    ]
  }
}
</script>
