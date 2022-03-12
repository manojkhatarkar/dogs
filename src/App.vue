<template>
  <div id="app" class="light-dark">
    <div id="page" class="page">
        <router-view/>
    </div>
  </div>
</template>
<script>
require('./assets/styles/bootstrap.min.css')
require('./assets/styles/framework.css')
require('./assets/styles/color.css')
require('./assets/fonts/css/fontawesome-all.min.css')
require('./assets/styles/mss.css')

require('./assets/js/bootstrap/bootstrap.min.js')
const axios = require('axios')
export default {
  data () {
    return {
      chknav: this.$route.name,
      ip_address: JSON.parse(localStorage.getItem('ip_address'))

    }
  },
  mounted () {
    this.getConfig()
    // console.log(this.$route.name)
    this.myIpData()
  },
  methods: {
    async getConfig () {
      var ev = this
      const response = await axios.get(this.$root.URL_ROOT + 'api.php?type=configdata')
      ev.$store.commit('getConfig', response.data)
      //console.log(ev.$store.state.config)
    },
    myIpData () {
      var ip_address = JSON.parse(localStorage.getItem('ip_address'))

      if (ip_address == null) {
        var min = 10000000000
        var max = 99999999999
        var num = Math.floor(Math.random() * (max - min + 1)) + min
        localStorage.setItem('ip_address', JSON.stringify(num))
        
      } else {
        
      }
    }

  }
}
</script>
<style>
.button {
    display: block;
    width: 100%;
}
.page{
  background-color: #fff;
}
.light-dark{
  background-color: #fff;
}
.modal-backdrop{
  background-color: #ffff !important;
}
</style>
