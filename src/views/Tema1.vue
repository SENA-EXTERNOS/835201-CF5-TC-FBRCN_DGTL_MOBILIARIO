<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la impresión 3D

    .tarjeta.fondo1.color-gris.mb-5(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.pt-4
          p.p-4 La impresora tradicional se define como el aparato que encontramos en el hogar o la oficina que plasma sobre un papel los objetos creados en el computador, generalmente cartas, textos, dibujos o gráficos que pueden tener color o pueden ser a blanco y negro.

          p.ms-4 La impresora 3D imprime objetos reales con volumen, diseñados en el computador mediante un <em>software</em> CAD.

        .col-md-6.mb-0.mb-md-0.order-md-last.order-sm-first
          figure.p-3
            img(src="@/assets/curso/temas/tema1/img-1.svg")

    p.mb-5 Conozca algunos aspectos característicos de las impresoras 3D.

    h3.text-center Introducción a la impresora 3D

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img.img-punto(src='@/assets/curso/temas/tema1/img-2.png')

      .tarjeta.color-acento-botones.p-3(x="20%" y="30%" numero="Funcionamiento")
        .h5.mb-2 Funcionamiento
        p Para imprimir en 3D se necesita el Software y el hardware de la impresora, además de los materiales que se requieren, y que funcionen bien sincronizados. El proceso para imprimir se fundamenta en que, al superponer capas de abajo hacia arriba, se logre obtener objetos con volumen.

        p El Software divide el objeto antes de iniciar la impresión en capas que tienen de espesor el mismo diámetro de la boquilla de salida de material, entonces se va depositando el material en la forma diseñada, cada capa, y a medida que se va solidificando se va obteniendo la figura modelada digitalmente.

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="Proceso")
        .h5.mb-2 Proceso
        p El proceso de impresión 3D comienza con el archivo del modelo desarrollado en CAD, luego el alistamiento del material que generalmente son polímeros termoplásticos; existe impresoras que trabajan con otros materiales y su costo varía según la capacidad para fundirlos, y finalmente hay que tener lista la impresora. Más adelante se conocerán sus tecnologías y tipos.

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="Concepto")
        .h5.mb-2 Concepto
        p La impresora 3D produce un modelo físico tangible a partir de uno creado en el computador, por ejemplo, si se ha modelado en algún Software diseño asistido por computador CAD, un exprimidor de naranjas, en la impresora 3D podrá imprimirlo en la realidad y obtener un producto físico que sería el propio exprimidor de naranjas. 

        p Con la impresora 3D se pueden crear objetos, partiendo de una idea en la mente, desde objetos simples a objetos complejos como partes de vehículos, aviones e incluso órganos y tejidos humanos.

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
