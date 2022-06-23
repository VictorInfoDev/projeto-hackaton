<template>
  <v-app style=""> 
  <v-parallax
    dark
    src="../assets/posterr.png"
    class="mb-10"
  >
  </v-parallax>
  <v-card class="text-center primary--text ma-10" elevation="0"><h1>Atinja suas metas em seus projetos!</h1> </v-card>
  <div class="text-center mb-10">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="-90"
      :size="100"
      :width="15"
      :value="value"
      color="primary"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="90"
      :size="100"
      :width="15"
      :value="value"
      color="red"
    >
      {{ value }}
    </v-progress-circular>

    <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :value="value"
      color="pink"
    >
      {{ value }}
    </v-progress-circular>
  </div>
  <v-row align="right" justify="center" class="ma-10">
    <v-col align="right" class="ma-5">
      <v-hover v-slot="{ hover }">
      <v-card height="" width="" max-width="200px" class="pa-5"
      :elevation="hover ? 12 : 5"
      :class="{ 'on-hover': hover }"
      @click="test()"
      to="/Computadores"
      >
      <v-img src="../assets/iconPC2.png" class="ma-2"></v-img>
      </v-card>
      </v-hover>
    </v-col>
    <v-col align="left" class="ma-5">
      <v-hover v-slot="{ hover }">
      <v-card height="" width="" max-width="200px" class="pa-5"
      :elevation="hover ? 12 : 5"
      :class="{ 'on-hover': hover }"
      @click="test()"
      to="/Projetos"
      >
      <v-img src="../assets/iconProjeto.png" class="ma-2"></v-img>
      </v-card>
      </v-hover>
    </v-col>
  </v-row>
  <div class="text-center ma-10 success--text"><h1>Sempre buscando organização e eficiência.</h1></div>
  <v-sparkline
    :value="value2"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
  <v-footer padless>
    <v-col
      class="text-center pa-10"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Grupo Broadcast </strong>— fontes de imagens: https://fusiontecnologia.com/fabrica-de-software-8-vantagens-de-contratar-uma-empresa-especializada/
    </v-col>
  </v-footer>
  </v-app>
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    data () {
      return {
        interval: {},
        value: 0,
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[5],
        value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    },
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

