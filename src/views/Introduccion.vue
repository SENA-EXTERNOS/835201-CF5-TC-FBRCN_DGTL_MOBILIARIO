<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se introducen las actividades necesarias para poder imprimir en 3D, partiendo del diseño de un producto modelado en CAD.

          p Este tipo de impresión es muy común en la actualidad y, sin importar que sea una moda, o no, contar con implementación y conocimientos para aplicarla, es muy útil y favorece construir casi cualquier cosa: arreglos en la casa o trabajo, diseños de ideas por desarrollar o también para producir objetos comerciales a baja escala.

          p Conozca diferentes temas y elementos de la impresión 3D, comprensibles y prácticos, y fortalezca su formación, adquiriendo herramientas de crecimiento y progreso para su desempeño profesional.

          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
        
        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
              figure.centrar
                img.img-400(src="@/assets/curso/temas/introduccion/img-1.svg")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ST_c8r4S4t0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
