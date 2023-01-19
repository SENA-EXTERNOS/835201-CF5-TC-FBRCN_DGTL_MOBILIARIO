<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 La impresión en 3D, tecnologías de impresión

    .tarjeta.fondo1.color-gris.mb-5(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.pt-4
          p.p-4 La impresora tradicional, se define como el aparato que se puede encontrar en hogares u oficinas y que plasma sobre un papel los objetos creados en el computador, generalmente cartas, textos, dibujos o gráficos que pueden tener color o pueden ser a blanco y negro.

          p.ms-4 Por su parte, la impresora 3D imprime objetos reales con volumen, diseñados en el computador, mediante un <i>Software</i> CAD. 

        .col-md-6.mb-0.mb-md-0.order-md-last.order-sm-first
          figure.p-3
            img(src="@/assets/curso/temas/tema1/img-1.svg")

    p.mb-5 Estas son algunas características y claves, de las impresoras 3D:

    h3.mb-5.text-center Introducción a la impresora 3D

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure.d-flex.justify-content-center
          img.img-punto(src='@/assets/curso/temas/tema1/img-2.png')

      .tarjeta.color-acento-botones.p-3(x="35.2%" y="28.7%" numero="Funcionamiento")
        p Para imprimir en 3D se necesita el <em>software</em> y el <em>hardware</em> de la impresora, además de los materiales que se requieren, y que funcionen bien sincronizados. El proceso para imprimir se fundamenta en que, al superponer capas de abajo hacia arriba, se logre obtener objetos con volumen.

        p El <em>software</em> divide el objeto antes de iniciar la impresión en capas que tienen de espesor el mismo diámetro de la boquilla de salida de material, entonces se va depositando el material en la forma diseñada, cada capa, y a medida que se va solidificando se va obteniendo la figura modelada digitalmente.

      .tarjeta.color-acento-botones.p-3(x="64.8%" y="28.7%" numero="Proceso")
        p El proceso de impresión 3D comienza con el archivo del modelo desarrollado en CAD, luego el alistamiento del material que generalmente son polímeros termoplásticos; existe impresoras que trabajan con otros materiales y su costo varía según la capacidad para fundirlos, y finalmente hay que tener lista la impresora. Más adelante se conocerán sus tecnologías y tipos.

      .tarjeta.color-acento-botones.p-3(x="50%" y="98%" numero="Concepto")
        p La impresora 3D produce un modelo físico tangible a partir de uno creado en el computador, por ejemplo, si se ha modelado en algún <em>software</em> diseño asistido por computador CAD, un exprimidor de naranjas, en la impresora 3D podrá imprimirlo en la realidad y obtener un producto físico que sería el propio exprimidor de naranjas. 

        p Con la impresora 3D se pueden crear objetos, partiendo de una idea en la mente, desde objetos simples a objetos complejos como partes de vehículos, aviones e incluso órganos y tejidos humanos.

    h4.my-5.pt-5 Tipos de tecnologías de impresión 3D 

    .row.justify-content-center
      .col-lg-10
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
  name: 'Tema1',
  components: {},
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
