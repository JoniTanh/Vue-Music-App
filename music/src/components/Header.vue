<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link class="text-white font-bold uppercase text-2xl mr-4" :to="{ name: 'home' }"
        exact-active-class="no-active">Music</router-link>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }">{{ $t("header.about") }}</router-link>
          </li>
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal">{{ $t("header.login_register") }}</a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">{{ $t("header.manage") }}</router-link>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">{{ $t("header.logout") }}</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
        <ul v-if="this.$route.name === 'song'">
          <vee-field as="select" name="bg-selector" v-model="selectedBackground"
            class="block w-full py-1.5 px-3 bg-gray-700 text-white border border-gray-300 transition duration-500 focus:outline-none focus:border-white rounded">
            <option value="colourful">Colourful</option>
            <option value="dark">Dark</option>
            <option value="summer">Summer</option>
            <option value="waterfall">Waterfall</option>
            <option value="winter">Winter</option>
            <option value="woman">Woman</option>
          </vee-field>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'
import useBackgroundStore from '@/stores/background';

export default {
  name: 'AppHeader',
  data() {
    return {
      selectedBackground: 'winter'
    }
  },
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === 'fi' ? 'suomi' : 'English'
    }
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
    },
    signOut() {
      this.userStore.signOut()

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'home' })
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'fi' ? 'en' : 'fi'
    }
  },
  watch: {
    selectedBackground(newValue) {
      const backgroundStore = useBackgroundStore();
      backgroundStore.setSelectedBackground(newValue);
    }
  }
}
</script>
