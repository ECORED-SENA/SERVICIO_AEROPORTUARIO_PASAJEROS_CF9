export default {
  global: {
    componenteFormativo: 'Caracterización en manejo de equipajes',
    descripcionCurso:
      'Una de las áreas más importantes en el proceso de viaje es la de equipajes, pues maneja información compleja desde el inicio del viaje, por lo que entender sus procesos, conceptos e información de seguridad ayudará a desarrollar mejor las funciones y garantizará que la operación aérea sea segura tanto para el personal en tierra como en aire. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Generalidades del equipaje ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características del área',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación del equipaje',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Rastreo del equipaje',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Movilización del equipaje',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Equipaje en custodia, saqueado, sobrante y rezagado',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Equipos y elementos de protección personal - EPP',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Manejo de objetos olvidados',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compensaciones en equipajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Políticas de compensación del equipaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Procedimiento para el manejo de caja y valores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Operación del sistema de registro',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manejo de PQRS',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mercancías peligrosas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos, clasificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Áreas, señalización, almacenamiento ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Regulación internacional',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
  referencias: [
    {
      referencia:
        'Alvarado, E. (2020). Herramienta de analítica visual para el manejo de irregularidades de equipajes. ',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/48634/u833224.pdf?sequence=1',
    },
    {
      referencia: 'DIAN. (s.f.). Importación del menaje doméstico. ',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/AyudaMemoriaMenajeDomestico.pdf',
    },
    {
      referencia:
        'Secretaría de Seguridad Aérea. (2010). Inspección de aeropuertos. ',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/vigilancia/Documents/CAPITULO%203%20II.pdf',
    },
    {
      referencia:
        'Secretaría de Seguridad Aérea. (2010). Procedimiento para evaluar el manual de mercancías peligrosas. ',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/vigilancia/Documents/CAPITULO%2010.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bandeja portaequipaje',
      significado:
        'recipiente plástico ubicado a un costado de los <i>Check-in</i> y en la descarga de las bandas de llegadas, para acomodar aquel equipaje OOG (sobredimensionado), que por sus características puede generar un bloqueo o atasco en el sistema de equipajes, siendo utilizadas con el fin de reducir y/o prevenir los inconvenientes anteriormente mencionados, o bien daños de cualquier componente del sistema para evitar posibles retrasos de procesamiento de este.',
    },
    {
      termino: 'Equipaje sobredimensionado (OOG)',
      significado:
        'equipaje que, por contar con correas, reatas, cordones; por su geometría redonda o cilíndrica, tamaño menor o mayor a los límites permitidos para ingresar de manera habitual al sistema BHS debe ser manejado según características específicas en una bandeja portaequipaje o bien por el sistema de equipaje sobredimensionado con el que cuenta el aeropuerto.',
    },
    {
      termino: 'Equipaje fuera de dimensión',
      significado:
        'equipaje que, por sus accesorios, peso o dimensiones se encuentra fuera de las medidas mínimas y máximas para su tratamiento a través del Sistema de Manejo de Equipajes.',
    },
    {
      termino: 'Handling',
      terminoHtml: '<i> Handling</i>',
      significado:
        'prestación de los servicios de asistencia en tierra de la aeronave.',
    },
    {
      termino: 'PIR',
      significado:
        'del inglés <i>Property Irregularity Report</i>: Informe de Irregularidad de Propiedad.',
    },
    {
      termino: 'Precinto aduanero',
      significado:
        'conjunto formado por un fleje, cordel o elemento análogo que finaliza en un sello o marchamo y que dada su naturaleza y características permite a la autoridad, controlar efectivamente la seguridad de las mercancías contenidas dentro de una unidad de carga o unidad de transporte.',
    },
    {
      termino: 'RAC',
      significado: ' Reglamentos Aeronáuticos de Colombia.',
    },
    {
      termino: 'Zona de <i>In Bound</i> carrusel (IB)',
      significado:
        'zona determinada para la descarga y posterior recolección de equipajes por parte de los pasajeros que llegan al aeropuerto de algún viaje.',
    },
    {
      termino: 'Zona de <i>Make Up carrusel</i> (MU)',
      significado:
        'espacio establecido para la descarga de equipaje que ha sido analizado por el sistema BHS, y será recolectado por parte de las aerolíneas para su posterior desplazamiento a las aeronaves.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
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
      {
        nombre: 'Claudia Ávila',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Lida Guanumen',
        cargo: 'Experta temática de apoyo',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: ' Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
