<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Software</em> para impresión 3D

    .tarjeta.fondo1.color-gris.mb-5(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.pt-4
        
          p.p-4 Desde el diseño de las piezas hasta su conversión en código G, pasando por el control de la impresora 3D durante la fabricación, encontramos gran cantidad de <em>software</em> para apoyar la impresión en 3D.

          p.ms-4 Los objetos creados en impresión 3D inician con un modelo digital desarrollado generalmente en CAD o diseño asistido por computador, en el mercado se pueden encontrar gran cantidad de este, así como de programas y aplicaciones para simular y mejorar las creaciones 3D, para alistar los archivos antes de la impresión y para todo el proceso de la impresión 3D.

        .col-md-6.mb-0.mb-md-0.order-md-last.order-sm-first
          figure.p-3
            img(src="@/assets/curso/temas/tema3/img-1.png")

    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4
          p Para lograr una buena impresión 3D hay que tener en cuenta factores como la formas, el peso, soportes, costos, etc., y para ello, existen numerosas aplicaciones y programas con los que apoyarse en el momento de requerirlos.

    separador 

    #t_3_1.titulo-segundo.color-acento-contenido.pb-2
      h3 3.1 Programas de modelización 3D

    p Existen muchos programas en el mercado con los cuáles se puede realizar modelado 3D, algunos de pago y otros con versión libre o gratuita. Todos tienes características generales similares, pero algunos se especializan en ciertos temas como CAD, acabados superficies, etc.

    p.mb-5 Observe algunas características de los <em>softwares</em> que, para Contreras (2022), son los más empleados para el proceso de modelización 3D:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos='fade-right')
      p.mb-0 <b>Figura 1</b>. <em>software para modelización 3D</em>

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img.mb-4(src='@/assets/curso/temas/tema3/img-puntos.png')
          figcaption Nota: adaptado de Contreras (2022). Los mejores <em>softwares</em> CAD para todos los niveles, 3D Natives. 
      .tarjeta.colormodal(x="3.5%" y="20.2%" numero="1")
        .row.justify-content-center.mb-5.p-5
          .col-7
            p <b> <em>Software</em> de modelado sólido</b>

            p Partiendo del dibujo en 2D con un <em>software</em> de diseño asistido por computador CAD al que se le da volumen mediante herramientas de modelado. Es importante tener en cuenta que para llegar a modelar con éxito en 3D con este tipo de <em>software</em>, es necesario haber adquirido previamente las habilidades de dibujo o boceto en 2D, sin embargo, existen soluciones básicas de modelado en 3D bastante simples para de aprender.

          .col-5
            figure
              img(src='@/assets/curso/temas/tema3/img-2.png')

      .tarjeta.colormodal(x="96.5%" y="20.2%" numero="2")
        .row.justify-content-center.mb-5.p-5
          .col-7
            p <b> <em>Software</em> de modelado de superficies</b>

            p El <em>software</em> de modelado de superficies es utilizado para definir la superficie de los objetos y no el contenido interior, es muy común en el campo del arte o en campos en los que  los diseñadores buscan representar los objetos con alta calidad en su estética y en acabados superficiales, así como en la animación en 3D, las marcas más reconocidas son: Dassaul Systemes, Blender, Rhinoceros entre otros.

          .col-5
            figure
              img(src='@/assets/curso/temas/tema3/img-3.png')

      .tarjeta.colormodal(x="3.5%" y="69.8%" numero="3")
        .row.justify-content-center.mb-5.p-5
          .col-7
            p <b> <em>Software</em> de modelado orgánico</b>

            p El<em>software</em> de modelado orgánico es una herramienta que se utiliza para modelar superficies con alta calidad en sus acabados y texturas, es utilizado para la creación en 3D de personajes, obras de arte, esculturas y diferentes elementos para animación muy aproximada a la realidad, entre los programas más conocidos se encuentra: Zbrush de Pixologic y Mudbox de Autodesk.

          .col-5
            figure
              img(src='@/assets/curso/temas/tema3/img-4.png')

      .tarjeta.colormodal(x="96.5%" y="69.8%" numero="4")
        .row.justify-content-center.mb-5.p-5
          .col-7
            p <b> <em>Software</em> de modelado optimización</b>

            p El <em>software</em> de optimización permite que el material de un objeto sea distribuido de la forma más eficiente, es decir de acuerdo con las funciones que vaya a tener, eliminar el material que no ejerza algún esfuerzo durante su función. Resultado de esto es que la pieza resistirá los esfuerzos y tendrá el peso mínimo requerido. Este Software es utilizado en las industrias aeronáutica, automotriz entre otras, las marcas más reconocidas son: SolidThinking Inspire, Ansys, 4D_Additive o Crea Simulate.

          .col-5
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png')

    separador

    #t_3_2.titulo-segundo.color-acento-contenido.pb-2
      h3 3.2 <em>Slicers 3D</em> y programas reparadores de archivos STL

    .row 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.tema-3(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-6.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p <b><em>Slicers 3D</em> o <em>software</em> de laminado</b>
            br
            br
            p Los slicers 3D convierten el modelo 3D creado en CAD, en rebanadas o capas cuyo espesor es el mismo diámetro del cabezal de la impresora 3D en la que se quiere imprimir.
    .row.justify-content-end.align-items-center.mb-5
      .col-lg-8 
      .col-10
        .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-3
          .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
            .col-lg-4.mb-4.mb-lg-0.col-md-10
            .col-lg-8.col-md-10
              .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
                p El <em>Slicer 3D</em> crea en un programa de lenguaje Gcode, todas las instrucciones para que sean seguidas por la impresora. Este <em>software</em> es fundamental en el proceso de impresión 3D ya que, aspectos tales como la resolución, el espesor de cada capa y la velocidad de impresión son definidos por este laminador. 
    .row 
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen dos tipos de <em>software Slicers</em> para la impresión en 3D, uno los universales de código abierto como: Cura, Repeteir o Slic3r; y los que requieren pago como Simplify3D, ReplicatorG, Zsuite y 3l Voxelizer
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido.pb-2
      h3 3.3  Otros <em>softwares</em>

    p.mb-5 Si bien encontramos muchas aplicaciones o programas asociados a la impresión 3D, a continuación, se conocerán algunas otras que pueden servir en algún momento. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png')
        h2.text-center <em>Softwares</em> para proteger los diseños
        p.text-center En el mercado hoy en día se puede encontrar diferentes soluciones o complementos cuyo objetivo principal es la protección de los archivos de los modelos y los datos cuando estos son muy importantes o están expuestos, estos son protegidos de tal forma que pueden ser usados, enviados o compartidos de manera segura.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-10.png')
        h2.text-center Aplicaciones de escaneo 3D
        p.text-center Dentro de las opciones para el modelado de objetos esta la del escaneo 3D, con esta se crea el modelo digital a partir de un objeto real, mediante el uso de una tecnología, que, dependiendo la calidad que se desee puede presentar algo de complejidad o bien convertir nuestro teléfono inteligente a través de su cámara en un escáner 3D descargando una aplicación.



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

<style lang="sass"></style>
