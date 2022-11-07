<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Operación de impresoras 3D

    p.mb-5 La impresión 3D cada día se abre más campo en diferentes áreas, no solo industrialmente sino también en hogares, esto incrementa sus usos y aplicaciones, generalmente encontramos que se mencionan solo los beneficios, pero está también debe tener en cuenta algunas precauciones al comenzar a utilizarla.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img-1.png')
        h2.text-center Gases y olores desprendidos
        p.text-center El ácido polilactico o PLA, el acrilonitrilo butadieno estireno o ABS y el poliestireno de alto impacto o HIPS son los polímeros más utilizados en los procesos de impresión 3D, se recomienda evitar la impresión en lugares o entornos caseros con materiales que emitan gases u olores.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img-2.png')
        h2.text-center Posibles focos de incendios
        p.text-center Las impresoras 3D que no presentan certificados de calidad como el certificado europeo CE, tienen alto nivel de riesgo de llegar a presentar fallos tan peligrosos que desencadenarían un incendio.

    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/img-3.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para saber más sobre las precauciones que se deben tener al usar una impresora 3D, descargue y lea el documento que se encuentra a continuación.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco-cinco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center
      .col-10
        .cajon.color-cajon-5.p-4.mb-4
          p Cuando se tiene una impresora 3D en un entorno familiar o casero, es importante ser consciente de que esta no es un juguete o un accesorio que pasa inadvertido, al contrario, una impresora 3D presenta una serie de riesgos en su funcionamiento y es recomendable que se adquieran con los certificados mínimos de calidad como el europeo CE y que traigan los filtros exigidos y las carcasas necesarias para mitigar los posibles riesgos.

    separador 

    #t_5_1.titulo-segundo.color-acento-contenido.pb-2
      h3 5.1 Materiales e insumos para impresión 3D

    .row.mb-5 
      .col-2
        figure(data-aos="fade-down")
          img(src="@/assets/curso/temas/tema5/img-4.png")
      .col-10
        p La impresión en 3D se puede realizar con diferentes materiales y métodos, estos deben corresponder de acuerdo con su tecnología; los materiales más comunes para imprimir en 3D deben tener las características que exijan tanto las condiciones técnicas de la impresora como las del producto esperado.
        p Entre los materiales más utilizados para la impresión 3D destacan:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-3
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Ácido poliláctico PLA
        p.text-center Es un polímero que contiene los mismos elementos del ácido láctico y tiene atributos semejantes al tereftalato de polietileno PET, utilizado generalmente en la fabricación de contenedores obtenido en base a almidones de maíz, yuca o caña de azúcar.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Laywoo D3
        p.text-center Material obtenido al mezclar en diferentes proporciones, un polímero parecido al PLA con aserrín de madera resultando un material con apariencia semejante a la madera y que también permite que sea acabado mediante procesos como lijado y pintado.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Acrilonitrilo butadieno estireno ABS
        p.text-center Polímero de alta resistencia en sus propiedades mecánicas muy renuente a la temperatura, flexible y sencillo de pintar, se utiliza principalmente en sectores como el automotriz, el industrial y de productos domésticos.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Poliestireno de alto impacto HIPS
        p.text-center Polímero de la familia de los poliestirenos que a temperatura ambiente es muy frágil, para aumentar su resistencia se le adiciona polibutaieno, comúnmente se le conoce como HIPS o PSAI.
      .tarjeta.color-acento-botones.p-2
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Tereftalato de polietileno PET
        p.text-center Polímero obtenido por la policondensación entre el ácido tereftalático y el etilenglicol, es el polímero más utilizado en la producción de contenedores para bebidas, hace parte de los sintéticos clasificados como poliésteres.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Elastomero termoplastico TPE
        p.text-center Polímero proveniente de la mezcla de termoplásticos y elastómeros, esta combina las características de cada uno de estos elementos, también se les reconoce como TPE o cauchos termoplásticos.
      .tarjeta.color-acento-botones.p-1
        .row.justify-content-center.mb-2
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Filaflex
        p.text-center Material en forma de hebra o filamento de gran elasticidad, obtenido del poliuretano junto con algunos aditivos, se desempeña más lento durante la impresión 3D, se puede aprovechar las propiedades de elasticidad y flexibilidad en la producción de elementos como zapatos deportivos, prótesis, pulseras o partes de teléfonos móviles.
      .tarjeta.color-acento-botones.p-1
        .row.justify-content-center.mb-2
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Laybrick
        p.text-center Es un material que se obtiene de mezclar algunos polímeros con yeso, por tanto, las impresiones tendrán una apariencia semejante a una piedra o ladrillo, permite ser lijado y pintado, está conformado por arena y un aglutinante plástico que genera una superficie con apariencia de cerámica o piedra.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Nylon
        p.text-center Es un polímero creado en laboratorio clasificado dentro de las poliamidas, es un filamento con propiedades de resistencia y elasticidad utilizado generalmente en la producción de telas y tejidos.
        br
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema5/img-5.png')
        h2.text-center Metales amorfos BGM
        p.text-center Son los metales cuya estructura presenta un desorden a nivel atómico que produce en su solidificación numerosas formas, también son cristalinos y conforman un orden elevado de sus átomos diferente al resto de los metales.

    separador 

    #t_5_2.titulo-segundo.color-acento-contenido.pb-2
      h3 5.2 Generación de prototipos 3D

    p.mb-5 Conozcamos el proceso de generación de prototipos 3D presentado en este video

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 

    #t_5_3.titulo-segundo.color-acento-contenido.pb-2
      h3 5.3 Acabados superficiales a prototipos 3D

    p Luego de imprimir en 3D encontramos que los productos aun no son los esperados, entonces, es necesario darle un mejor acabado, este puede ser para mejorar la textura, color o simplemente para deshacerse de elementos como los soportes que no hacen parte del objeto.

    p.mb-5 Revise algunos procesos existentes para darle acabados a las superficies de las piezas y prototipos.

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            h4.ms-5 Suavizado por lija
            p.ms-5 Consiste en eliminar de la superficie del objeto, el material que sobra mediante el uso de elementos como sierras, cuchillas, espátulas, limas, papel de lijado, esmeriles o pulidoras con el fin de lograr el acabado superficial deseado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-6.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            .col-lg-8
            h4.ms-5 Suavizado por Sand Blast
            p.ms-5 Este acabado superficial utiliza diminutos fragmentos de plástico aplicados con presión sobre la superficie mediante la pistola de sand blast, generalmente alimentada por aire comprimido, este proceso permite dar un acabado de alta calidad sin afectar las dimensiones y sin distorsionar las piezas, también el sand blast se caracteriza por realizarse en tiempos más cortos frente a otros procesos de acabados superficiales y más eficiente ya que no utiliza instrumentos, lijas, ni solventes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-7.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.row.justify-content-center.align-items-center
            h4.ms-5 Suavizado por Vibración
            p.ms-5 En este proceso de acabado superficial se utiliza una maquina vibradora y el material abrasivo en un contenedor con la pieza a tratar, dependiendo el acabado que se quiera dar, se utiliza el material abrasivo, es decir, para brillar la pieza se usa un grano fino y para solamente el lijado se usa un grano más grueso o de mayor tamaño, algunas veces se adicionan líquidos que pueden servir de lubricantes o para evitar que se genere material particulado o polvo. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-8.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.row.justify-content-center.align-items-center
            h4.ms-5 Acabado por inmersión de acetona
            p.ms-5 Este acabado superficial utiliza la acetona, que reacciona químicamente con el ABS, haciendo que en este la rugosidad sea menor hasta llegar al brillo, se logra sumergiendo la pieza en acetona liquida y dejándola por un tiempo determinado.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-9.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            h4.ms-5 Acabado por vapor de acetona
            p.ms-5 En este proceso de acabado superficial la pieza a tratar se coloca en la parte superior de un contenedor con acetona, el contenedor debe estar sellado y gracias a los vapores volátiles de la acetona se presenta una reacción química que permite eliminar las rugosidades de la pieza y logrando un acabado más fino.
            p.ms-5 Este proceso resulta ser menos dañino para la superficie que el método de inmersión descrito anteriormente y puede tardar algunos minutos más permitiendo un mayor control.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-10.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-center
            h4.ms-5 Pintura
            p.ms-5 En las impresoras 3D se obtienen piezas destinadas para la investigación, para el prototipado o para producción, pero de acuerdo con la tecnología usada su coloración es muy limitada, entonces, para poder ser presentados en fotografías o en folletos o simplemente para cumplir con os requisitos estéticos planeados, los productos se pueden someter a proceso de pintura, previamente hayan sido lijados.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-11.png')
        .row
          .col-md-6.mb-4.mb-md-0.row.justify-content-center.align-items-around
            .col-lg-8
            h4.ms-5 Galvanizado
            p.ms-5 En el proceso de galvanizado, se recubre la superficie del objeto impreso en 3D con una capa de metal que puede ser plata, oro, cromo, níquel o cobre; aparte de la apariencia metálica, también ofrece más dureza y más resistencia al desgaste.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-12.png')

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
