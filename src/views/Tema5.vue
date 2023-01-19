<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mantenimiento de impresoras 3D

    .tarjeta.fondo1.color-gris.mb-5(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.pt-4

          p.p-4 Las impresoras 3D son herramientas que, con un mantenimiento preventivo adecuado, pueden durar largos periodos funcionando sin problemas. A continuación, se encuentran algunos de los ajustes necesarios para que la impresora esté en perfectas condiciones.

        .col-md-6.mb-0.mb-md-0.order-md-last.order-sm-first
          figure.p-3
            img(src="@/assets/curso/temas/tema6/img-1.png")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        h4 Limpieza de la boquilla
        br
        br
        p La boquilla y el cabezal son las partes de la impresora 3D que requieren ser limpiadas al finalizar cada impresión si queremos que la impresora se mantenga en condiciones ideales de funcionamiento, esto debido a que hay una posibilidad de que el filamento del material quede pegado a alguna de estas partes.

    p.mb-5 ¿Cómo y cuándo se debe realizar la limpieza de la boquilla?

    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta-3.p-4(titulo="¿Cómo?")
            h4 ¿Cómo limpiar la boquilla?
            p Se deben eliminar los residuos que quedan pegados a la boquilla de la salida del material, se puede utilizar un cepillo metálico, una espátula o unas pinzas de puntas finas.

          .tarjeta-3.p-4(titulo="¿Cuándo?")
            h4 ¿Cuándo debemos limpiar la boquilla?
            p La boquilla se debe limpiar siempre que se utilice la impresora 3D, al finalizar cada impresión se debe dejar secar o enfriar la punta de la boquilla y retirar con cualquiera de las herramientas señaladas anteriormente.

      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-200(src="@/assets/curso/temas/tema6/img-3.png").m-auto

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-6
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            h4 Limpieza del cabezal
            p La limpieza del cabezal es una de las actividades de mantenimiento más importantes con las impresoras 3D, al igual que la boquilla, necesita ser limpiada frecuentemente cada vez que se imprime y así evitar que se solidifique o cristalice el filamento y que resulte averiado el cabezal que es una de las partes más costosas de la impresora 3D.

    p.mb-5 ¿Cómo y cuándo revisar la limpieza del cabezal?

    .row.mb-5
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta-3.p-4(titulo="¿Cómo?")
            h4 ¿Cómo se debe limpiar el cabezal?
            p Para tener un mejor resultado, al terminar cada impresión se debe extraer la totalidad del filamento que está dentro del cabezal extrusor, generalmente se puede usar una llave allen M2 teniendo mucho cuidado de que llegue a quedar prensada y se genere un daño mayor.

          .tarjeta-3.p-4(titulo="¿Cuándo?")
            h4 ¿Cuándo se debe limpiar el cabezal? 
            p Este procedimiento de limpieza del cabezal se debe hacer siempre que se utilice la impresora 3D, la extracción del filamento se hace al terminar cada impresión y sin dejar enfriar el cabezal durante 40 minutos aproximadamente.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-200(src="@/assets/curso/temas/tema6/img-5.png").m-auto

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        h4.mb-0 Mantenimiento de la cama de impresión 
        br
        br
        p La cama de impresión es un elemento de la impresora 3D, que requiere una atención constante porque sobre esta se depositará, sin importar la tecnología que se tenga, el material fundido, y el resultado depende que se encuentre totalmente plana y permita una óptima solidificación. 

    p.mb-5 ¿Cómo y cuándo realizar mantenimiento de cama de impresión?

    .row.mb-5
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta-3.p-4(titulo="¿Cómo?")
            h4 ¿Cómo se debe limpiar la cama de impresión?
            p La cama de impresión se puede limpiar de muchas formas, las más recomendables pueden son: 
            p Eliminar los residuos de filamento adheridos a la cama, utilizando una espátula metálica, también se puede previamente sumergir la base en agua caliente con el fin de que se ablanden y sea más fácil despegarlos.
            p Se pueden también despegar los residuos de filamentos adheridos, utilizando una cinta de doble cara aprovechando que con esta se remueven las partículas más pequeñas.

          .tarjeta-3.p-4(titulo="¿Cuándo?")
            h4 ¿Cuándo limpiar la cama de impresión?
            p La cama de impresión se debe limpiar cada vez que se detecte algún elemento ajeno adherido a esta, es decir es necesario estar revisando en todo momento que esté limpia y libre de cualquier impureza.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-200(src="@/assets/curso/temas/tema6/img-7.png").m-auto

    .bloque-texto-a.p-4.p-md-5.mb-5.cuadro-derecha-7
      .row.m-0.align-items-center.justify-content-between.bloque-texto-a.texto-3
        .col-lg-4.mb-4.mb-lg-0.col-md-10
        .col-lg-8.col-md-10
          .bloque-texto-a__texto.p-4.order-md-first.order-sm-last
            h4 Limpieza de Baleros y Barras
            p La limpieza y lubricación de los baleros y barras, es una de las actividades del mantenimiento preventivo de la impresora 3D que no puede faltar, para un óptimo funcionamiento y para evitar el deterioro de estas partes.

    p.mb-5 Revise a continuación cómo y cuándo se debe realizar:

    .row.mb-5
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta-3.p-4(titulo="¿Cómo?")
            h4 ¿Cómo limpiar y lubricar los baleros y las barras?
            p Primero que todo se deben limpiar, puede ser con un paño, las barras y baleros para eliminar cualquier impureza presente, luego se aplica, con una brocha o un pincel, el lubricante, que puede ser grasa o silicona, se puede acudir al manual del fabricante, y finalmente se elimina el exceso de lubricante, puede ser con una servilleta o un paño de cocina.

          .tarjeta-3.p-4(titulo="¿Cuándo?")
            h4 ¿Cuándo se deben limpiar y lubricar las barras y baleros?
            p La limpieza y lubricación de los baleros y barras de una impresora 3D depende de la frecuencia de uso, así si hacemos impresiones continuamente se debe hacer aproximadamente cada dos meses, al contrario, si el uso de la impresora es esporádico, esta actividad se puede programar hasta con una frecuencia de un año.
            p También es muy importante tener en cuenta el entorno donde tengamos ubicada la impresora 3D, es decir si se encuentra en un ambiente donde está expuesta al polvo y a condiciones desfavorables, el tiempo para este mantenimiento debe ser menor.

      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-200(src="@/assets/curso/temas/tema6/img-9.png").m-auto

    .row.justify-content-center.align-items-center
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 
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
