<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-6
        p.mb-5 Las aerolíneas se enfocan en la prestación del servicio al usuario generando fidelización y liderazgo en el mundo aeronáutico, por lo tanto, dentro de sus políticas de calidad involucran el fortalecimiento y el desarrollo de capacidades en temas relacionados con trabajo en equipo y las responsabilidades de cada una de las áreas de servicio que intervienen en la operación de un aeropuerto.
          br
          br
          |El técnico en servicio aeroportuario a pasajeros debe ser una persona que cumpla con un perfil enfocado hacia la prestación del servicio personalizado con amplia capacidad de sensibilidad frente a las situaciones que beneficien el cierre del proceso de viaje, teniendo siempre en cuenta la satisfacción del viajero. 
        .bloque-texto-c.color-primario.bg-primario-claro.p-4
          p.mb-2 En cada operación del servicio de transporte aéreo, millones de personas están detrás de su puesta en marcha haciendo lo posible por asegurar la tranquilidad y el confort de los pasajeros. Lo anterior es posible con agentes bien entrenados y capacitados en conocimientos técnicos, regulaciones aeronáuticas e información básica de seguridad aeroportuaria, aplicando siempre la ética e integralidad que garantice que el equipaje cumpla con todos los procesos alternos, evitando contratiempos durante la manipulación del mismo.
      .col-lg-6: img(src="@/assets/curso/img0.jpg")(data-aos="zoom-in-left")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
