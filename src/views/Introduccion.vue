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
          p Bienvenido al componente, Fundamentos de impresión 3D, el cual introduce las actividades necesarias para poder imprimir en 3D, partiendo del diseño de un producto modelado en CAD y llegando hasta la impresión en 3D.

          p Este tipo de impresión hoy en día es muy común, pero sin importar que sea una moda o no, lo cierto es que tener una impresora 3D es muy útil para poder construir casi cualquier cosa, arreglos en la casa o trabajo, diseños de ideas a desarrollar o también para producir objetos comerciales a baja escala.

          p Se tratarán los diferentes temas de manera que sean comprensibles y muy prácticos y, teniendo en cuenta que se trata de una fundamentación, no hay que preocuparse por tener o no experiencia en la materia.

          p El siguiente video muestra una contextualización de la impresión 3D y de los temas que trataremos a lo largo de este ciclo formativo. 

          p Para tener una mayor información revisar el material complementario que se encuentra al final del componente.
        
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
