<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Mercancías peligrosas
    .row.mb-5
      .col-lg-6
        p.mb-5 Son artículos o sustancias que son capaces de poner en riesgo la salud, la seguridad, la propiedad o el medio ambiente y son clasificadas de acuerdo con la Reglamentación de Mercancías Peligrosas. Estos artículos o sustancias se vuelven peligrosos cuando son expuestos a las condiciones normales del transporte aéreo: temperatura, presión o vibración.
          br
          br
          |Los pasajeros en sus viajes llevan un sinnúmero de elementos para el disfrute de las actividades de su viaje, pero en la mayoría de las ocasiones ellos no tienen el conocimiento de la peligrosidad de un elemento que estén transportando, a estos se les da el nombre de MERCANCÍAS PELIGROSAS OCULTAS.
        .cajon.color-acento-contenido.bg-acento-contenido-claro.p-4.mb-4
          p El funcionario de atención al pasajero tiene la responsabilidad de hacer las preguntas de seguridad al viajero, para conocer más a fondo el contenido de sus equipajes, tanto de mano como facturado y, a su vez, el pasajero tiene la responsabilidad de informar el contenido de los elementos que lleva en su equipaje y con esto poder detectar las posibles mercancías peligrosas y evitar riesgos durante el vuelo.
      .col-lg-6: img(src="@/assets/curso/img53.jpg")(data-aos="zoom-in-right")
    p.mb-5 A continuación, se relacionan algunos elementos y artículos que el pasajero puede transportar y se clasifican como mercancías peligrosas, tales como: 

    ImagenInfografica2.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img54.svg', alt='Texto que describa la imagen')
          figcaption Mercancías peligrosas
      .tarjeta.p-3(x="24.1%" y="37.7%" letra="A")
        p 
          b Aparatos dentales: 
          |incluye productos químicos como resinas o disolventes. 
      .tarjeta.p-3(x="17%" y="40.7%" letra="m")
        p Equipo eléctrico, materiales magnetizados o mercurio en los interruptores y las lámparas electrónicas. 
      .tarjeta.p-3(x="5%" y="40.7%" letra="z")
        p Productos farmacéuticos, pueden incluir productos químicos peligrosos, ya incluidos individualmente en la relación por su nombre y amparados por entradas. 
      .tarjeta.p-3(x="31%" y="36%" letra="r")
        p Frutas, verduras, etc., congeladas, pueden ir empaquetadas con hielo seco (anhídrido carbónico sólido).
      .tarjeta.p-3(x="40.5%" y="36.5%" letra="s")
        p Instrumentos, pueden ocultar barómetros, manómetros, interruptores de mercurio, tubos rectificadores, termómetros, etc., que contengan mercurio.
      .tarjeta.p-3(x="45.5%" y="36.5%" letra="dd")
        p Suministros fotográficos, pueden incluir artículos peligrosos.
      .tarjeta.p-3(x="50.3%" y="32.5%" letra="f")
        p Embriones congelados. Pueden contener nitrógeno líquido. 
      .tarjeta.p-3(x="60%" y="27.8%" letra="u")
        p Juguetes que pueden estar hechos de material inflamable.
      .tarjeta.p-3(x="66.5%" y="35.8%" letra="g")
        p Enseres domésticos. Se puede detectar pinturas, aerosoles, polvo de blanquear, etc.
      .tarjeta.p-3(x="78.6%" y="40%" letra="k")
        p Equipo de pruebas de laboratorio.
      .tarjeta.p-3(x="86.3%" y="38.6%" letra="i")
        p Equipo para acampada incluye gas inflamable, líquido inflamable. 
      .tarjeta.p-3(x="90.5%" y="38%" letra="w")
        p Muestra para diagnóstico, pueden contener sustancias infecciosas.
      .tarjeta.p-3(x="7%" y="51.8%" letra="h")
        p Equipaje que contenga líquidos inflamables de usos domésticos, sustancias limpiadoras corrosivas para hornos o limpieza en seco, gas inflamable para encendedores o botellas de gas para estufas o cocinas para acampada, cerillas, polvos para blanquear, aerosoles, etc. 
      .tarjeta.p-3(x="10.2%" y="51.4%" letra="cc")
        p Semen de toro, pueden suponer la utilización de hielo seco o gas licuado o refrigerado. 
      .tarjeta.p-3(x="22%" y="51.2%" letra="o")
        p Equipo para expediciones, explosivos (bengalas), líquidos inflamables (gasolina), gases inflamables (camping, gas) u otras mercancías peligrosas. 
      .tarjeta.p-3(x="33%" y="50%" letra="e")
        p Cajas de herramientas que pueden contener explosivos (remaches mecánicos), gases comprimidos o aerosoles, gases inflamables (botella de butano), pinturas o adhesivos inflamables, líquidos o corrosivos. 
      .tarjeta.p-3(x="41.6%" y="48.4%" letra="y")
        p Piezas de repuestos para maquinaria, pueden incluir productos químicos peligrosos (adhesivos, pinturas, materiales, selladores, disolventes, etc.).
      .tarjeta.p-3(x="46.6%" y="50%" letra="t")
        p Interruptores incorporados a equipos o instrumentos eléctricos, pueden mantener mercurio.
      .tarjeta.p-3(x="55%" y="49%" letra="p")
        p Equipos (kits) de reparación (adhesivos, pinturas de celulosa, peróxidos orgánicos, disolventes, etc).
      .tarjeta.p-3(x="64%" y="48%" letra="aa")
        p Productos químicos, frecuentemente son peligrosos. 
      .tarjeta.p-3(x="81.3%" y="49%" letra="v")
        p Muestra para ensayos, pueden contener sustancias peligrosas.
      .tarjeta.p-3(x="85.9%" y="52%" letra="ff")
        p Vacuna, pueden estar embaladas en hielo seco (anhídrido carbónico sólido). 
      .tarjeta.p-3(x="90.6%" y="51%" letra="ee")
        p Suministros médicos, pueden contener productos químicos peligrosos.
      .tarjeta.p-3(x="14.6%" y="66%" letra="q")
        p Frigoríficos, pueden contener gases o líquidos peligrosos.
      .tarjeta.p-3(x="22.5%" y="60.5%" letra="n")
        p Equipo de escenografía, espectáculo, filmación y efectos especiales tienen sustancias inflamables, explosivos. 
      .tarjeta.p-3(x="27.9%" y="60.5%" letra="d")
        p Botellas de gas comprimido.
      .tarjeta.p-3(x="37.5%" y="58.5%" letra="c")
        p Aparatos respiratorios, como botellas de oxígeno o aire comprimido. 
      .tarjeta.p-3(x="40.4%" y="65.5%" letra="bb")
        p Productos químicos para piscinas, pueden incluir artículos peligrosos.
      .tarjeta.p-3(x="54.4%" y="67.5%" letra="x")
        p Partes de automóviles (carros, motores, motocicletas), pueden contener materias húmedas, amortiguadores con soportes a base de bolsas de nitrógeno, bolsas infladoras de aire, módulos neumáticos, etc.
      .tarjeta.p-3(x="75.4%" y="60.8%" letra="l")
        p Equipo de carreras de automóviles, aerosoles inflamables, nitro metano, aditivos de combustible o baterías húmedas. 
      .tarjeta.p-3(x="81.9%" y="62.8%" letra="j")
        p Equipo de buceo incluye lámpara de alta intensidad para buceo, que pueden generar un calor extremadamente fuerte. 
      .tarjeta.p-3(x="90%" y="70.8%" letra="b")
        p Aparatos accionados eléctricamente, sillas de ruedas, cortadoras de césped, carritos de golf, etc. 
    .row.mb-5.justify-content-center
      .col-lg-10
        .tarjeta.degradado1.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.justify-content-end.d-flex
              img(src="@/assets/curso/img55.svg" style="width: 102px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Mercancías peligrosas 
                  p.text-small Para revisar la variedad de mercancías peligrosas ocultas y la normativa general se puede remitir al siguiente enlace de la autoridad competente en el país: https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/vigilancia/Documents/CAPITULO%2010.pdf  
                .col-sm-auto.me-5
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/enlace_aerocivil.pdf')" target="_blank")
                    span Enlace
                    i.fas.fa-link
    #t_3_1.titulo-segundo
      h2 3.1 Conceptos, clasificación
    p.mb-5 Al hablar de equipaje es importante tener en cuenta algunas características para poder darle el manejo correcto y que el pasajero no tenga contratiempos en su viaje, por esta razón entender la información que lleva una etiqueta y los tipos de equipaje existentes en el proceso de viaje es de gran utilidad para realizar correctamente las funciones del área; las características y clasificación más relevantes son:
    .tarjeta.bg-primario-claro3.p-4.mb-5
      SlyderA
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Etiqueta de equipaje: 
            p Documento emitido por la empresa aérea para la identificación de los equipajes entregados a la transportadora en custodia, hasta la entrega al pasajero en su destino final. Consta de un comprobante que se adjunta al equipaje y de un talón que se entrega al pasajero como constancia. En el mismo se observa la sigla identificadora de la empresa transportadora, la escala de destino y/o sus conexiones, número de vuelo y fecha, y una numeración única de identificación, nombre del pasajero, número de piezas de equipaje, peso y código de barras que servirá para identificación en las bandas transportadoras. 
          .col-md-5
            figure
              img(src='@/assets/curso/img56.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje libre permitido <i>(Free Allowance)</i>: 
            p Es la cantidad de equipaje en peso, piezas y/o en volumen que tiene derecho a llevar el pasajero con o sin costo adicional en su mismo vuelo. Y que debe estar dentro de las medidas establecidas, la cantidad de piezas, el volumen y el peso se determinarán para cada ruta y/o tarifa según políticas de cada empresa.
          .col-md-5
            figure
              img(src='@/assets/curso/img57.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje de mano: 
            p El que el pasajero lleva bajo su propia custodia y responsabilidad durante su viaje. Las medidas del equipaje de mano permitidas las determinan las políticas de cada empresa aérea o de lo contrario las dimensiones deberán ajustarse a los medidores ubicados en los aeropuertos.
          .col-md-5
            figure
              img(src='@/assets/curso/img58.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje condicional <i>(Bagagge Standby)</i>: 
            p Son los equipajes extras entregados por los pasajeros en los módulos de atención, los cuales quedan sujetos a espacio en las aeronaves por estar fuera de la política del equipaje libre permitido.
          .col-md-5
            figure
              img(src='@/assets/curso/img59.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje de transferencia entre líneas aéreas: 
            p Esto ocurre cuando los pasajeros realizan vuelos en conexión, el equipaje registrado se traslada internamente de la aeronave de una aerolínea o la aeronave de otro transportador, durante el viaje.
          .col-md-5
            figure
              img(src='@/assets/curso/img60.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje registrado: 
            p Equipaje que el pasajero registra con la aerolínea bajo la custodia del transportista para su traslado. La Compañía entrega contraseña o talón numerado e identifica la pieza con una etiqueta de la misma numeración, para su posterior entrega; este se transporta en las bodegas del avión.
          .col-md-5
            figure
              img(src='@/assets/curso/img61.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje no identificado: 
            p Son los equipajes que no tienen ninguna etiqueta ni tampoco identificación del propietario y no es reclamado por nadie en el aeropuerto.
          .col-md-5
            figure
              img(src='@/assets/curso/img62.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Equipaje no reclamado: 
            p Son los equipajes que tienen etiqueta, pero ningún pasajero los reclama. 
          .col-md-5
            figure
              img(src='@/assets/curso/img63.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Exceso de equipaje: 
            p Es el peso, volumen, o piezas adicionales de equipaje que excede al equipaje libre permitido establecido por la empresa transportadora, el cual genera un cobro adicional por el exceso.
          .col-md-5
            figure
              img(src='@/assets/curso/img64.jpg', alt='Texto que describa la imagen')
        .row.p-5
          .col-md-7.mb-4.mb-md-0
            h3 Manejo de equipaje con contenidos perecederos: 
            p Alimentos que, después de determinado tiempo, pueden presentar síntomas de descomposición y por tal razón se utilizan protocolos de verificación periódica del lugar de almacenamiento, aislar el equipaje en descomposición de los otros para evitar contaminación, se realiza un proceso de apertura del equipaje para retiro del elemento en descomposición, con antelación se pesa en presencia de personal de seguridad, se hace inventario del contenido, se retira el contenido descompuesto y se vuelve a pesar, es importante tomar fotografías para evidencias del registro de lo que había y se retira del equipaje.
          .col-md-5
            figure
              img(src='@/assets/curso/img65.jpg', alt='Texto que describa la imagen')
    br
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2 Áreas, señalización, almacenamiento 
    p.mb-5 El proceso para dar solución a las solicitudes por irregularidades de los equipajes, y cubrir todos los puntos de atención con el cliente, se enmarcan en cinco pasos básicos cumpliendo los protocolos de servicio establecidos por la línea aérea, estos son:
    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/img66.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-down")
    h3 Preparación del área de equipajes: 
    p.mb-5 Este proceso se realiza siempre para dar inicio a las operaciones aéreas y se debe tener en cuenta cumplir con las siguientes características:
    .tarjeta.bg-primario-claro3.p-5.mb-5
      .row.align-items-center
        .col-lg-3.col-md-3.col-sm-12.col-12: img(src="@/assets/curso/img67.svg").mb-sm-5.mb-xs-5
        .col-lg-9.col-md-9.col-sm-12.col-12
          h4 Alistamiento del área de equipajes de origen
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              p.mb-0 
                b Movilización de equipaje: 
                |vuelos de la aerolínea / otras aerolíneas / carga / casos especiales /  
                span.fst-italic Convert to Rush.
            li 
              i.fas.fa-angle-right 
              p Manejo de equipaje rezagado,  
                span.fst-italic priority,  
                | libre permitido y condicional / 
                span.fst-italic Standby Bag. 
            li 
              i.fas.fa-angle-right
              | Elaboración y actualización de reporte de rezagos.
            li 
              i.fas.fa-angle-right
              | Seguimiento y control para irregularidades interlíneas.
            li 
              i.fas.fa-angle-right
              | Equipaje en transferencia hacia otra aerolínea.
            li 
              i.fas.fa-angle-right
              | Equipaje con contenido perecedero.
    h3 Atención en banda de equipajes
    p.mb-5 En los aeropuertos tipo HUB (aeropuertos con gran flujo de pasajeros, por ser centro de conexiones o transferencia), y por la gran cantidad de maletas para clasificar no es posible hacer este proceso de  forma manual por ser demasiado lento y utilizar más recursos. En estos aeropuertos se deben adaptar sistemas automáticos para manejo en las bandas de equipaje; existen bandas o cintas de equipaje que ayudan a agilizar los procesos en los diferentes momentos en el manejo de maletas, entre ellos se destacan los siguientes:
    .row.mb-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario.p-3.h-100.hover-imagen
            img(src='@/assets/curso/img68.png' alt='AvatarTop' style='width: 167px').m-auto
            .p-4.text-center
              h4 Cinta transportadora
              p Se encuentra entre el mostrador de facturación y las estaciones de composición del tren de equipajes.
      .col-md-6.col-lg.mb-5.mb-lg-0
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario.p-3.h-100.hover-imagen
            img(src='@/assets/curso/img69.png' alt='AvatarTop' style='width: 167px').m-auto
            .p-4.text-center
              h4 Sistema de cintas transportadoras para clasificación automática
              p Para este las maletas se identifican con etiqueta de lectura rápida (código de barras o de lectura óptica, emisor de frecuencias). Un ordenador va siguiendo la posición de cada maleta en la cinta transportadora y este decide cuando, sale de la cinta principal a otras cintas laterales de selección que emplean empujadores neumáticos, bandejas volcadoras u otros mecanismos que agilizan el traslado y ubicación de acuerdo al destino.

      .col-md-6.col-lg.mb-5.mb-lg-0
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario.p-3.h-100.hover-imagen
            img(src='@/assets/curso/img70.png' alt='AvatarTop' style='width: 167px').m-auto
            .p-4.text-center
              h4 Colocación de los equipajes
              p Este se dispone en los vehículos o llamados diligencias para el traslado hacia el avión y deben ser ubicados en las bodegas de los aviones según su prioridad.
    .row.mb-5
      .col-lg-6
        h3 Documentación e ingreso de información en sistemas
        p Este proceso se realiza después de tomar la reclamación y para el manejo de irregularidades deben ser documentados en el sistema empleado por las compañías aéreas para dicho fin <i>(World Tracer y BHS)</i>.
          br
          br
          |Normalmente la reclamación se realiza en el documento dispuesto para tal fin, este se llama <b>PIR</b> <i>(Property Irregularity Report)</i> y en este debe ir la información de la descripción del equipaje en la tabla de identificación  
          b ID-CHART.
      .col-lg-6: img(src="@/assets/curso/img71.jpg")(data-aos="zoom-in-right")
    h3 Seguimiento del equipaje
    p.mb-5 Los archivos creados por irregularidad de equipajes deben ser documentados con toda la gestión realizada y contener mensajes de búsqueda, dejándolos adjuntos a cada archivo creado por medio del sistema 
      b BHS 
      | o <i><b>World Tracer</b></i>; solo es necesario un mensaje en el proceso diario de seguimiento.
    h3 Entrega
    p.mb-5 En la preparación de la entrega de equipaje en destino, es necesario verificar la información y es responsabilidad del agente de equipajes estar atento a datos relevantes como:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/img72.svg', alt='Texto que describa la imagen').mb-5.mb-lg-0
            .col-md-9.mb-4.mb-md-0
              p Verificar la asignación de las bandas en el área de entrega del equipaje al pasajero, tomando atenta nota de los tiempos de llegada de los equipajes de acuerdo con la prioridad de estos, <i>check list</i> de materiales.
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Revisión del <i>Action File Worldtracer</i>.
            .col-md-3
              figure
                img(src='@/assets/curso/img73.svg', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/img74.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p Anuncios de equipajes (operacional), se informa de la llegada del equipaje a las bandas para ser retirado por los pasajeros, al igual esta información debe estar publicada en las pantallas. 
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Reporte de equipaje <i>priority</i>, de acuerdo con las políticas internas de la compañía se tienen unos tiempos de entrega de los equipajes con prioridad, como pueden ser equipajes de pasajeros VIP, recomendados o en condiciones de discapacidad. 
            .col-md-3
              figure
                img(src='@/assets/curso/img75.svg', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/img76.svg', alt='Texto que describa la imagen')
            .col-md-9.mb-4.mb-md-0
              p Toma y creación de reportes por irregularidades 
                b (AHL/OHD/DPR). 
                | En el formato 
                b PIR 
                | de la compañía y con 
                b <i>Id-Chart </i>  
                | si se requiere.
          .row.align-items-center
            .col-md-9.mb-4.mb-md-0
              p 
                b Lo que se requiere para tomar una reclamación es: 
                |pasajero presente con identificación, pase de abordar, número del tiquete o <i>printer</i> de la reserva, talón o comprobante de la etiqueta de equipaje.
            .col-md-3
              figure
                img(src='@/assets/curso/img77.svg', alt='Texto que describa la imagen')
    p.mb-5 Además de los anteriores pasos para la preparación de la entrega del equipaje en destino, también se debe tener en cuenta el manejo de otras situaciones igualmente importantes que se presentan en la operación diaria como:
    .row.mb-5 
      .col-lg-6: img(src="@/assets/curso/img78.svg")(data-aos="zoom-in-right")
      .col-lg-6
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Entrega de mercancías peligrosas decomisadas por la autoridad competente.
          li 
            i.fas.fa-angle-right
            | Entrega de equipaje no abordado (vuelo cancelado o irregular).
          li 
            i.fas.fa-angle-right
            | Centralizado de equipajes y objetos olvidados no entregados.
          li 
            i.fas.fa-angle-right
            | Entrega de equipaje faltante en el domicilio del pasajero.

          li 
            i.fas.fa-angle-right
            | Entrega de equipaje faltante en aeropuerto.
          li 
            i.fas.fa-angle-right
            | Entrega de equipaje sobrante.
          li 
            i.fas.fa-angle-right
            | Entrega de objetos olvidados.
    p.mb-5 Para saber en qué área o base se presentó la irregularidad del equipaje, las aerolíneas diseñan un documento de acuerdo con las necesidades operacionales llamado <b>RL</b> <i>(Reason for Loss Codes</i> - códigos razón de la pérdida), <i><b>Fault Station</b></i> (estación de falla).
    .tarjeta.bg-secundario-claro.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img52.svg")

        .col-md.col-lg-6
          .titulo-segundo
            h3 RL - Reason for Loss Codes
          p.mb-4 Para saber en qué área o base se presentó la irregularidad del equipaje, las aerolíneas diseñan un documento de acuerdo con las necesidades operacionales, se puede conocer descargando el siguiente archivo:
          
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ANEXO_Codigos_razon_de_Perdida.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    h3 Señalización
    .row.mb-5
      .col-lg-6
        p.mb-5 Esta debe tenerse donde se estime necesario, así, las plataformas deberán tener barreras contra posibles líquidos derivados de los flujos de los motores a reacción y de las estelas de las hélices y de las turbinas. Cada empresa debe tener conos de plástico o cualquier material cubierto con pintura luminiscente para indicar los riesgos derivados de estos flujos; todo lo referente a elementos de señalización debe ser establecido en un procedimiento guiado de pasajeros a través de las plataformas de parte de cada línea o su representante. Las medidas reglamentarias para los conos mencionados son: 
        .cajon.color-acento-contenido.bg-acento-contenido-claro.p-4.mb-4
          p.mb-0 
            b Conos: 
            | altura 1,50 metros; pintura reflectiva o luminiscente; distancia del umbral; distancia del borde exterior de la pista 8 metros.
      .col-lg-6: img(src="@/assets/curso/img79.jpg")(data-aos="zoom-in-right")
    p.mb-5 La suciedad o desperdicios suponen un riesgo al actuar sobre ellos el chorro de los reactores, esto exige mantener limpias las áreas. También es objeto de constatación permanente el procedimiento de puesta en marcha de motores y de empuje para marcha atrás, por lo que se hace indispensable la presencia de los señaleros autorizados para el guiado de las aeronaves, la determinación de sus posiciones y si tienen instrucciones precisas para indicar. 
      br
      br
      |Los encargados de esta área deben asegurar el puesto de estacionamiento, chequeando que se encuentre libre de obstáculos fijos o móviles. Chequear y saber cuándo debe usar auxiliares de punta de alas observando si tienen claridad en cuanto a la acción requerida en caso de daños de las aeronaves durante el proceso de guiado para parquear por el señalero.
      br
      br
      |De igual manera, se debe constatar que los vehículos en las plataformas tengan los procedimientos establecidos y señales pintadas en el piso para determinar las direcciones de sus maniobras.
    .col-lg-6

      //todo! ENLACES ROTOS 
      a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/sistemamanejo.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              b Para conocer más acerca de este proceso, consulte el siguiente documento.
    br
    br
    br
    .row.mb-5 
      .col-lg-6
        h3 Almacenamiento
        p Es la disposición de los equipajes, bultos, cajas u otros elementos que se tienen que resguardar ya que todavía se encuentran en custodia de la empresa transportadora, mientras el pasajero los reclama se debe hacer todo el proceso documentación de ingreso a esta área y clasificarlos según el tipo de elemento guardado en la bodega de almacenamiento. 
      .col-lg-6: img(src="@/assets/curso/img80.jpg")(data-aos="zoom-in-right")
    #t_3_3.titulo-segundo
      h2 3.3 Regulación internacional
    p.mb-5 Los aeropuertos están regulados bajo normativa y medidas adoptadas de orden internacional y nacional para la gestión del área de equipajes. Los entes internacionales que regulan lo concerniente con las mercancías peligrosas en las aeronaves son los siguientes:
    .tarjetas-hover-slide.mb-3
      .tarjetas-hover-slide__img.p-3.d-flex.align-items-center.justify-content-center
        img(src="@/assets/curso/img81.svg" style="width: 190px")
        .img-hover.d-flex.align-items-center.justify-content-center
          img(src="@/assets/curso/img82.svg" style="width: 190px")

      .tarjetas-hover-slide__contenido.py-3.px-5
        h4 OACI:
        p.mb-0 Creada en 1944, reglamenta el transporte sin riesgo de mercancías peligrosas por vía aérea teniendo como base recomendaciones del Comité de Expertos de Naciones Unidas (COE de NU) y la Agencia Internacional de Energía Atómica (AIEA).  La OACI está codificada en el Anexo 18 al Convenio de Aviación Civil Internacional.
    .tarjetas-hover-slide.mb-3
      .tarjetas-hover-slide__img.p-3.d-flex.align-items-center.justify-content-center
        img(src="@/assets/curso/img83.svg" style="width: 190px")
        .img-hover.d-flex.align-items-center.justify-content-center
          img(src="@/assets/curso/img84.svg" style="width: 190px")

      .tarjetas-hover-slide__contenido.py-3.px-5
        h4 AIEA: 
        p.mb-0 
          b Organismo Internacional de Energía Atómica
          |, creado en 1957 con el fin de promover el uso seguro y pacífico de tecnologías nucleares. Establece recomendaciones a la OACI sobre el transporte seguro de materiales nucleares para el uso pacífico de los mismos.
    .tarjetas-hover-slide.mb-3
      .tarjetas-hover-slide__img.p-3.d-flex.align-items-center.justify-content-center
        img(src="@/assets/curso/img85.svg" style="width: 190px")
        .img-hover.d-flex.align-items-center.justify-content-center
          img(src="@/assets/curso/img86.svg" style="width: 190px")

      .tarjetas-hover-slide__contenido.py-3.px-5
        h4 IATA: 
        p.mb-0 
          b Asociación Internacional de Transporte Aéreo
          |, creada para publicar los requisitos para el transporte por vía aérea de mercancías peligrosas de forma segura. Es el organismo que reúne a las líneas aéreas internacionales, publica anualmente la Reglamentación sobre mercancías peligrosas, en donde se encuentran los requisitos de las instrucciones técnicas de OACI, también incluye requisitos más restrictivos.
    p.mb-5 Los convenios que se tienen en cuenta para lo relacionado con manejo de equipajes son:
    .row.mb-5.justify-content-center
      .col-lg-5
        .tarjeta.color-acento-contenido--borde.overflow-h.h-100.hover
          img(src="@/assets/curso/img87.jpg" style="width: 100% ")
          .textos.p-5
            h4 Convenio de Varsovia: 
            p.mb-0 Suscrito el 12 de octubre de 1929  para regular el tráfico aéreo, el cual obliga a hacerse responsable por la emisión del tiquete aéreo y resguardar el equipaje facturado, por las lesiones o muerte de los pasajeros durante el transporte.
      .col-lg-5
        .tarjeta.color-secundario--borde.overflow-h.h-100.hover
          img(src="@/assets/curso/img88.jpg" style="width: 100% ")
          .textos.p-5
            h4 Convenio de Montreal:  
            p.mb-0 Acordado el 28 de mayo de 1999, para la unificación de reglas para el transporte aéreo Internacional (ICAO) el cual entra en vigor el 04 de noviembre de 2003, sustituyendo el Convenio de Varsovia, compuesto por 129 países, Colombia entre ellos, y rige el transporte aéreo actualmente. Regula la responsabilidad civil y garantiza la responsabilidad del transportista del buen manejo de equipaje, carga, daños, retrasos o pérdidas y por daños personales o muerte de los pasajeros para la protección de los intereses de los usuarios otorgando indemnización. 

















</template>

<script>
import ImagenInfografica2 from '@/components/ImagenInfografica2.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfografica2,
  },
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

<style lang="sass" scoped>
.degradado1
  background: linear-gradient(to bottom, #FFDC72, #FFB74D)
.hover-imagen
  img
    transition: transform 0.3s ease-in-out
  &:hover
    img
      transform: scale(1.1)
.tarjetas-hover-slide
  display: flex
  @media (max-width: $bp-max-md)
    flex-direction: column
  &__img
    position: relative
    min-width: 300px
    .img-hover
      transition: width 0.3s ease-in-out
      position: absolute
      height: 100%
      width: 100%
      overflow: hidden
      background-color: $color-secundario
      top: 0
      left: 0
      img
        min-width: 190px
        opacity: 1

  &__contenido
    @media (max-width: $bp-max-md)
      border-radius: 0px 0px 0px 0px
    background-color: #E2DAFC
    border-radius: 0px 50px 0px 0px
  &:hover
    .img-hover
      width: 5%
      img
        opacity: 0
.border-top
  border-radius: 20px 20px 0px 0px
.overflow-h
  overflow: hidden
</style>
