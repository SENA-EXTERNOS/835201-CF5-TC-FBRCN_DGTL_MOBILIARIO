<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tipos de tecnologías de impresión 3D

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            p Los tipos de tecnologías de impresión 3D dependen de la manera en que el material es utilizado para generar las capas que formaran el objeto, algunas funden el material mientras que otras inyectan el material líquido que luego se solidificará de maneras diferentes.
    p.mb-5 Entre los métodos más utilizados se pueden destacar:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img.l.my-3(src="@/assets/curso/temas/tema2/img-2.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-primario
          p(numero="1" titulo="Impresión por inyección") En esta tecnología, la impresora genera los modelos extendiendo en cada capa una parte de la pieza. Repitiendo el proceso hasta que se imprimen todas las capas que conforman el producto, en este método se permite la aplicación de colores en los productos, este método se puede comparar con la impresión en papel de chorro de tinta, a cambio de la tinta se dosifica el fotopolímero líquido por capas sobre la bandeja y la solidificación se logra mediante una luz ultravioleta.

          p(numero="2" titulo="Impresión por deposición fundida (FDM)") En esta tecnología, la impresora va disponiendo el material fundido por capas que forman el producto sobre un soporte, estas luego para solidificarse son sintetizadas por un rayo láser. Semejante a este es el DMLS o sintetizado de metales por láser.

          p(numero="3" titulo="Impresión por Estereolitografía (SLA)") Esta tecnología tiene como material de impresión las resinas líquidas fotopolimericas, las capas que forman el objeto se endurecen o solidifican mediante una luz generada por un rayo láser ultravioleta. Este método permite generar objetos funcionales o prototipos formales o modelos. 

          p(numero="4" titulo="Impresión por Fotopolimerización por luz ultravioleta (SGC)") En este método el material de polímero líquido que está en un contenedor es sometido a una luz proyectada con unas condiciones específicas, logrando así la solidificación del material a medida que se va sumergiendo la bandeja de soporte capa por capa hasta terminar con la forma definitiva del producto.

          p(numero="5" titulo="Impresión por Fotopolimerización por absorción de fotones (SLS)") En este método de impresión 3D se utiliza el material polimérico en forma de un bloque de gel al cual se le va proyectando un haz de luz láser, las zonas donde se va recibiendo el láser, van siendo solidificadas gracias al proceso de no linealidad óptica de la fotoexcitación, las zonas restantes donde no se solidificó el gel son residuos que se retiran mediante un proceso posterior de limpieza. 
          

    

</template>

<script>
export default {
  name: 'Tema2',
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
