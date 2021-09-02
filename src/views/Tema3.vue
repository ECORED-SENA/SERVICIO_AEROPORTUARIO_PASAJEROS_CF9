<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Mercancías peligrosas
    .row.mb-5
      .col-lg-6
        p.mb-5 Son artículos o sustancias que son capaces de poner en riesgo la salud, la seguridad, la propiedad o el medio ambiente y son clasificadas de acuerdo con la Reglamentación de Mercancías Peligrosas. Estos artículos o sustancias se vuelven peligrosos cuando son expuestos a las condiciones normales del transporte aéreo: temperatura, presión o vibración.
          br
          br
          |Los pasajeros en sus viajes llevan un sinnúmero de elementos para el disfrute de las actividades de su viaje, pero en la mayoría de las ocasiones ellos no tienen el conocimiento de la peligrosidad de un elemento que estén transportando, a estos se les da el nombre de MERCANCÍAS PELIGROSAS OCULTAS.
        .cajon.color-acento-contenido.bg-acento-contenido-claro.p-4.mb-4
          p El funcionario de atención al pasajero tiene la responsabilidad de hacer las preguntas de seguridad al viajero, para conocer más a fondo el contenido de sus equipajes, tanto de mano como facturado, y, a su vez, el pasajero tiene la responsabilidad de informar el contenido de los elementos que lleva en su equipaje y con esto poder detectar las posibles mercancías peligrosas y evitar riesgos durante el vuelo.
      .col-lg-6: img(src="@/assets/curso/img53.jpg")(data-aos="zoom-in-right")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
