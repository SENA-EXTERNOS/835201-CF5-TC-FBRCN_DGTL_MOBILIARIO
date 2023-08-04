export default {
  global: {
    componenteFormativo: 'Fundamentos de impresión 3D',
    descripcionCurso:
      'En este componente formativo, se profundiza en los aspectos claves sobre actividades necesarias para la impresión 3D. Con su estudio responsable y disciplinado, el aprendiz se afianzará en lo relacionado con tecnologías y software de impresión, configuración y operación de impresoras, mantenimiento y todo lo relacionado con los fundamentos de la impresión 3D.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-1.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/img-ani-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/img-ani-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La impresión en 3D, tecnologías de impresión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Software</i> para impresión 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Configuración de impresoras 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Operación de impresoras 3D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mantenimiento de impresoras 3D',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'La impresión en 3D, tecnologías de impresión',
      referencia:
        'Leister, D. (2020). <em>Impresión 3D: ¿ya no es una amenaza para la fabricación tradicional de plástico?</em> ThermoFisherScientific.',
      tipo: 'Articulo',
      link:
        'https://www.thermofisher.com/blog/cienciaacelerada/materiales/impresion-3d-ya-no-es-una-amenaza-para-la-fabricacion-tradicional-de-plastico/',
    },
    {
      tema: 'La impresión en 3D, tecnologías de impresión',
      referencia:
        'Millholland, C. (2021). <em>Soluciones de Fabricación Aditiva</em>.ThermoFisherScientific.',
      tipo: 'Articulo',
      link:
        'https://www.thermofisher.com/blog/cienciaacelerada/materiales/soluciones-de-fabricacion-aditiva/',
    },
    {
      tema: 'Mantenimiento de impresoras 3D',
      referencia:
        'Universidad Libre-Pereira. (2019). <i>Matriz de requisitos legales en seguridad y salud en el trabajo</i>.',
      tipo: 'Normas',
      link:
        'https://www.unilibre.edu.co/pereira/images/2019/pdf/matriz-requisitos-legales-sgsst-m.pdf',
    },
    {
      tema: '<i>Softwares</i> para impresión 3D',
      referencia:
        'Contreras, L (2022). <i>Los mejores Softwares CAD para todos los niveles</i>. 3D Natives.',
      tipo: 'Articulo',
      link:
        'https://www.3dnatives.com/es/mejores-Softwares-cad-programa-180320192/#',
    },
    {
      tema: 'Operación de impresoras 3D',
      referencia:
        'Cults 3D. (s/f). <i>Cómo configurar una impresora 3D en 4 pasos</i>.',
      tipo: 'Blog',
      link:
        'https://cults3d.com/es/blog/articles/como-configurar-impresora-3d-4-pasos',
    },
    {
      tema: 'La impresión en 3D, tecnologías de impresión',
      referencia:
        'Adeva, R. (2022). <em>Todo lo que debes saber sobre la impresión 3D y sus utilidades</em>. Azadslzone.',
      tipo: 'Articulo',
      link:
        'https://www.adslzone.net/reportajes/tecnologia/impresion-3d/#554745-materiales',
    },
    {
      tema: 'La impresión en 3D, tecnologías de impresión',
      referencia:
        'de Haro, M. (2020). <i>Tipos de acabados en impresiones 3D</i>. Intellyblog.',
      tipo: 'Blog',
      link:
        'https://intelligy.com/blog/2020/09/15/tipos-de-acabados-en-impresiones-3d/#:~:text=Suavizado%20por%20lija,limas%2C%20mini%20pulidoras%2C%20etc',
    },
    {
      tema: 'Mantenimiento de impresoras 3D',
      referencia:
        'Rec-line. (2020). <i>Guía de buen mantenimiento de mi impresora 3D</i>. ',
      tipo: 'Blog',
      link:
        'https://rec-line.com/blog/guia-de-buen-mantenimiento-de-mi-impresora-3d/',
    },
  ],
  glosario: [
    {
      termino: 'CAD',
      significado:
        '<em>Computer Added Design</em> o Diseño Asistido por Computador.',
    },
    {
      termino: 'CAE',
      significado:
        '<em>Computer Added Enginnering</em> o Ingeniería Asistida por Computador.',
    },
    {
      termino: 'CAM',
      significado:
        '<em>Computer Added Manufacture</em> o Fabricación Asistida por Computador.',
    },
    {
      termino: 'DWG',
      significado:
        '<em>software</em> Extensión de archivo de dibujo 2D y 3D del programa AutoCad.',
    },
    {
      termino: 'Slicer 3D',
      significado:
        '<em>software</em> que envía todas las instrucciones que debe seguir la impresora, que generalmente están escritas en un lenguaje llamado <em>Gcode</em>.',
    },
    {
      termino: 'Termoestables',
      significado:
        'Son los polímeros que se transforman con éxito una sola vez, luego tienden a incinerarse. ',
    },
    {
      termino: 'Termoplástico',
      significado:
        'Son los polímeros que permiten ser transformados más de una vez. ',
    },
    {
      termino: 'PLM',
      significado:
        'Del inglés <em>Product Life Cycle</em>, o gestión del ciclo de vida del producto.',
    },
    {
      termino: 'Sand Blast',
      significado:
        'Proceso de abrasión superficial mediante la aplicación de un material particulado con aire a alta presión.',
    },
    {
      termino: 'STL',
      significado:
        'Se refiere al proceso de impresión y al archivo en 3D llamado estéreo litografía.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adeva, R. (2022). <i>Todo lo que debes saber sobre la impresión 3D y sus utilidades</i>.',
      link: 'https://www.adslzone.net/reportajes/tecnologia/impresion-3d/',
    },
    {
      referencia:
        'Contreras, L. (2022). <i>Los mejores Softwares CAD para todos los niveles</i>.',
      link:
        'https://www.3dnatives.com/es/mejores-Softwares-cad-programa-180320192/',
    },
    {
      referencia:
        'Cults 3D. (2020),<i> Como configurar impresoras 3D en 4 pasos</i>.',
      link:
        'https://cults3d.com/es/blog/articles/como-configurar-impresora-3d-4-pasos',
    },
    {
      referencia:
        'de Haro, M. (2020). <i>Tipos de acabados en impresiones 3D</i>.',
      link:
        'https://intelligy.com/blog/2020/09/15/tipos-de-acabados-en-impresiones-3d/',
    },
    {
      referencia: 'Filament2print. (2018). <i>Riesgos al imprimir en 3D</i>.',
      link: 'https://filament2print.com/es/blog/37_riesgos-imprimir-3d.html ',
    },
    {
      referencia:
        'Millholland, C. (2021). <i>Soluciones de Fabricación Aditiva</i>. 2021.',
      link:
        'https://www.thermofisher.com/blog/cienciaacelerada/materiales/soluciones-de-fabricacion-aditiva/',
    },
    {
      referencia:
        'Rec-line. (2020). <i>Guía de buen mantenimiento de mi impresora 3D</i>. ',
      link:
        'https://rec-line.com/blog/guia-de-buen-mantenimiento-de-mi-impresora-3d/',
    },
    {
      referencia:
        'Regidor, A. (2021). <i>Como pasar archivos a tu impresora 3D</i>.',
      link:
        'https://www.impresion3daily.es/como-pasar-el-archivo-3d-a-tu-impresora-de-resina/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
