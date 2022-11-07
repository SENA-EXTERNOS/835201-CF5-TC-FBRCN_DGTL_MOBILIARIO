<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Configuración de impresoras 3D

    p Antes de comenzar cualquier proceso con la impresora es necesario asegurarse que la impresora va a trabajar sin inconvenientes, para esto, primero se debe inspeccionar algunos aspectos.

    p.mb-5 Revise estos aspectos generales de la configuración de la impresora 3D.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9.position-relative.ancho
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/img-1.png", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img-2.png", alt="alt").img100
            .col
              h5 De acuerdo con su impresora, revisar el manual de usuario
              p.me-5 Ciertamente, el primer paso antes de poner a funcionar cualquier dispositivo es revisar el manual del usuario del modelo adquirido. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img-3.png", alt="alt").img100
            .col
              h5 Conocer el tipo de impresora
              p.me-5 Inicialmente es importante identificar el tipo de impresora 3D que se tiene, ya que algunas requieren que sus partes sean acopladas y ajustadas antes de ser utilizadas, entonces es importante seguir las instrucciones para el armado.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img-4.png", alt="alt").img100
            .col
              h5 Verifique si hay errores de fabricación
              p.me-5 Se puede presentar que la impresora o sus componentes desde la fábrica traigan algún defecto, o que en el embalaje no estén la totalidad de sus componentes, o en el transporte se hayan afectado en su estructura o funcionamiento. Para esto es mejor antes de iniciar el proceso de impresión, verificar que todo esté en orden, de no ser así hacerlo saber al fabricante o comercializador.

    separador 

    #t_4_1.titulo-segundo.color-acento-contenido.pb-2
      h3 4.1 Alistamiento de impresoras 3D

    .row.mb-5 
      .col-2
        figure
          img(src="@/assets/curso/temas/tema4/img-5.png")
      .col-10
        p Habiendo inicialmente consultado el manual de la impresora, ahora se debe realizar su alistamiento para estar seguros que todo funcionara a la perfección.
        p Analice este proceso que nos enseña qué situaciones tener en cuenta a la hora de hacer una impresión 3D.

    .row
      .col-lg-8.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta-3.p-4(titulo="Nivelar el marco")
            p La nivelación de la impresora 3D es lo primero que se debe hacer a la hora del alistamiento o configuración, esta se hace, no con respecto a la superficie sobre la cual está ubicada ni tampoco con respecto al piso donde se dispuso, se debe nivelar de acuerdo con los componentes internos que permitirán que haya una estructura totalmente plana para comenzar a imprimir con el material de trabajo.
            p Para esta acción debe seguir el procedimiento que seguramente trae el manual y utilizando las herramientas que en el recomiendan.

          .tarjeta-3.p-4(titulo="Nivelar la cama")
            pLuego de que el marco quedó nivelado, ahora se debe nivelar la cama, ya que esta soportará los dos componentes, al igual que en el paso anterior, se debe seguir las indicaciones del fabricante en el manual, si después de hacerlo la cama presenta desniveles, puede ser defecto de fabricación y no se puede corregir, entonces se debe reemplazar bien sea con un repuesto o con un objeto del que se tenga seguridad de su planitud, puede ser un vidrio o un espejo.

          .tarjeta-3.p-4(titulo="Lubricar")
            p Una vez la impresora 3D esta lista, es necesario lubricar las piezas que por su función sean indispensables, es decir, las piezas articuladas o móviles, se puede utilizar como lubricante grasas o aceites de silicona, normalmente en las directrices de fábrica incluyen las recomendaciones de contenido y cantidades.
          .tarjeta-3.p-4(titulo="Primera capa")
            p Al iniciar la impresión se recomienda que la impresora este configurada para que las dos o tres primeras capas se apliquen con una velocidad baja y para las posteriores se irá incrementando, esto con el fin de que las capas de base o soporte sean suficientemente fuertes para soportar el resto del objeto.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema4/img-6.png").m-auto

    separador 

    #t_4_2.titulo-segundo.color-acento-contenido.pb-2
      h3 4.2 Transferencia de archivos a impresoras 3D

    .row.mb-5
      .col-7.col-md-7
        p.mb-3 Para  Regidor (2021), “trasladar la información de la PC a la impresora no es tan simple, cómo pasar el archivo 3D a la impresora, tanto si sabe cómo dibujar en 3D, como si lo que hace es descargar archivos <em>online</em> para poderlos imprimir en casa, necesita saber cómo pasar el archivo 3D a la impresora.”

        .row.justify-content-center.align-items-center
          .col-lg-12
            .cajon.color-acento-botones.p-4.mb-3
              p “Los formatos de salida de los programas de dibujo en 3D son muy variados; cada firma tiene su propio estándar, pero a la hora de imprimir todos deben convertirse a un formato universal, el archivo del tipo *.<b>STL</b>”. 

        p Tanto si modela los objetos con algún <em>software</em> de diseño asistido por computador CAD, o si descarga los archivos de alguna galería, para pasar estos archivos del computador a la impresora para imprimirlos en 3D, no es tan fácil como parece, cada marca del programa en el que fue creado el modelo tiene su propia extensión o formato al guardar el archivo, para poder imprimirlo es necesario que los archivos tengan la extensión *.STL pero para que esto se dé, el archivo *.STL no se puede pasar directamente a la impresora sin que haya sido convertido al leguaje Gcode que mencionamos anteriormente.

      .col-5.col-md-5
        figure(data-aos="fade-down")
          img(src="@/assets/curso/temas/tema4/img-7.png")

    p.mb-5 Pasos para la transferencia de archivos usando <em>Chitubox</em>:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema4/img-8.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Paso 1")
              .col-12
                p.mb-0 Abrir el archivo STL con <em>Chitubox</em>, antes, es necesario que se haya instalado el programa para poder configurar la impresora que deberá aparecer en la lista de impresoras y fabricantes compatibles que trae el programa.

            .row(titulo="Paso 2")
              .col-12
                p.mb-0 La pieza no se puede imprimir de una vez, es necesario que se revise primero si está de acuerdo con su forma, requiere de unas estructuras de soporte o bastones, que permite que a medida que la impresión avance no se vaya a caer a la bandeja o que no se doble ya que el material en un comienzo no está sólido. Luego se configuran los tiempos de exposición, la cantidad de capas y otras medidas importantes.

            .row(titulo="Paso 3")
              .col-12
                p.mb-0 En este momento se comienzan a crear las capas una a una de acuerdo con la tecnología de impresión 3D que se tenga, es decir, rebanar el modelo en capas que luego serán las que definirán el avance en la impresión, cuando el objeto esté totalmente laminado se debe guardar en un formato que admita la impresora. Cada marca tiene su propio formato, entonces, si tiene <em>Chitubox</em> instalada, la impresora se encarga de elegir este formato.

            .row(titulo="Paso 4")
              .col-12
                p.mb-0 Cuando ya esté el archivo listo, se debe pasar a la impresora, bien sea a través de algún dispositivo de almacenamiento USB o si la impresora cuenta con alguna tecnología inalámbrica como <em>wifi</em>, con <em>Chitubox</em> puede hacerlo. 

            .row(titulo="Paso 5")
              .col-12
                p.mb-0 Cuando ya el archivo pueda ser reconocido o leído por la impresora 3D, entonces al igual que con una impresora convencional, se pulsará la opción <em>print</em>, seleccionando el archivo en la carpeta correspondiente. 
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
