<template>
  <app-header />

  <router-view></router-view>

  <app-player v-if="current_song && current_song.modified_name" />

  <auth />
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'
import AppPlayer from '@/components/Player.vue'
import usePlayerStore from '@/stores/player'

export default {
  name: 'app',
  components: {
    AppHeader,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn']),
    ...mapWritableState(usePlayerStore, ['current_song'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>
