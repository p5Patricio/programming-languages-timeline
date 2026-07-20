export const languages = [
  {
    id: "fortran",
    year: 1957,
    creator: "John Backus (IBM)",
    colorBrand: "#7015B3",
    impact: 4,
    paradigms: ["Imperative", "Procedural", "Structured"],
    en: {
      name: "Fortran",
      tagline: "The pioneer of scientific high-level computing.",
      description: "Formula Translation revolutionized computing as the first commercially successful high-level language, moving developers away from tedious assembly programming.",
      achievements: [
        "Programmed NASA's Voyager 1 and Voyager 2 space probes.",
        "Crucial for nuclear simulation telemetry in the Cold War era.",
        "Still used in weather forecasting and climate modeling supercomputers."
      ],
      intrigue: "John Backus created it because he disliked writing assembly. IBM kept the compiler proprietary for years, which slowed wider adoption, but its performance in mathematical calculations remained legendary.",
      milestones: [
        { year: 1957, title: "Fortran I Release", desc: "First commercial compiler released, optimizing code as well as a human programmer." },
        { year: 1977, title: "Fortran 77 Standard", desc: "Introduced structured programming, including block IF-THEN-ELSE statements." },
        { year: 1990, title: "Fortran 90 Upgrade", desc: "Added array programming, recursion, and modular programming, modernizing the language." }
      ]
    },
    es: {
      name: "Fortran",
      tagline: "El pionero de la informática científica de alto nivel.",
      description: "Formula Translation revolucionó la informática como el primer lenguaje de alto nivel comercialmente exitoso, alejando a los desarrolladores de la tediosa programación en ensamblador.",
      achievements: [
        "Programó las sondas espaciales Voyager 1 y Voyager 2 de la NASA.",
        "Crucial para la telemetría de simulación nuclear en la era de la Guerra Fría.",
        "Todavía se utiliza en supercomputadoras de previsión meteorológica y modelado climático."
      ],
      intrigue: "John Backus lo creó porque no le gustaba escribir en ensamblador. IBM mantuvo el compilador propietario durante años, lo que ralentizó su adopción, pero su rendimiento en cálculos matemáticos siguió siendo legendario.",
      milestones: [
        { year: 1957, title: "Lanzamiento de Fortran I", desc: "Se lanza el primer compilador comercial, optimizando el código tan bien como un programador humano." },
        { year: 1977, title: "Estándar Fortran 77", desc: "Introdujo la programación estructurada, incluyendo sentencias de bloque IF-THEN-ELSE." },
        { year: 1990, title: "Actualización Fortran 90", desc: "Añadió programación de vectores/arreglos, recursividad y programación modular." }
      ]
    }
  },
  {
    id: "lisp",
    year: 1958,
    creator: "John McCarthy (MIT)",
    colorBrand: "#F43F5E",
    impact: 4,
    paradigms: ["Functional", "Multi-paradigm", "Meta-programming"],
    en: {
      name: "Lisp",
      tagline: "The foundation of artificial intelligence and symbolic computation.",
      description: "List Processing pioneered code-as-data (homoiconicity), dynamic typing, and garbage collection, serving as the language of early Artificial Intelligence research.",
      achievements: [
        "Powering early DARPA defense research projects.",
        "Used extensively in NASA's Remote Agent spacecraft autonomous control experiment.",
        "Embedded inside AutoCAD (AutoLISP) for aerospace and structural modeling."
      ],
      intrigue: "McCarthy designed it as a mathematical notation for recursive functions. It introducing garbage collection, which developers initially hated because of the performance overhead, though it is now standard in most modern languages.",
      milestones: [
        { year: 1958, title: "Mathematical Design", desc: "John McCarthy publishes his design based on Alonzo Church's Lambda Calculus." },
        { year: 1962, title: "Lisp 1.5", desc: "First widely distributed implementation, defining the core semantics of the language." },
        { year: 1984, title: "Common Lisp", desc: "Industry standards converge to unify various dialects into a single powerful language." }
      ]
    },
    es: {
      name: "Lisp",
      tagline: "La base de la inteligencia artificial y el cálculo simbólico.",
      description: "List Processing fue pionero en el concepto de código-como-datos (homoiconicidad), tipado dinámico y recolección de basura, sirviendo como el lenguaje de la investigación inicial en IA.",
      achievements: [
        "Potenció los primeros proyectos de investigación de defensa de DARPA.",
        "Utilizado extensamente en el experimento de control autónomo de la nave espacial Remote Agent de la NASA.",
        "Incrustado dentro de AutoCAD (AutoLISP) para el modelado aeroespacial y estructural."
      ],
      intrigue: "McCarthy lo diseñó como una notación matemática para funciones recursivas. Introdujo la recolección de basura, que al principio no gustaba a los desarrolladores por su impacto en el rendimiento, pero hoy en día es estándar.",
      milestones: [
        { year: 1958, title: "Diseño Matemático", desc: "John McCarthy publica su diseño basado en el Cálculo Lambda de Alonzo Church." },
        { year: 1962, title: "Lisp 1.5", desc: "Primera implementación ampliamente distribuida, definiendo la semántica central del lenguaje." },
        { year: 1984, title: "Common Lisp", desc: "Los estándares de la industria convergen para unificar varios dialectos en un lenguaje potente." }
      ]
    }
  },
  {
    id: "cobol",
    year: 1959,
    creator: "Grace Hopper & CODASYL",
    colorBrand: "#1E3A8A",
    impact: 5,
    paradigms: ["Imperative", "Procedural", "Structured"],
    en: {
      name: "COBOL",
      tagline: "The invisible giant backing the global financial ecosystem.",
      description: "Common Business-Oriented Language was designed to be readable, business-friendly, and highly precise with decimals, running the world's most critical financial systems.",
      achievements: [
        "Processes over 95% of ATM transactions worldwide.",
        "Maintains trillions of dollars in banking, mortgage, and pension records.",
        "Forms the backbone of the US Social Security Administration and tax systems."
      ],
      intrigue: "Created under heavy US Department of Defense pressure, which threatened computer manufacturers that they wouldn't buy their machines unless they supported COBOL. Grace Hopper's vision of readable, English-like code became a gold standard.",
      milestones: [
        { year: 1959, title: "CODASYL Creation", desc: "A committee of industry and government experts completes specifications in six months." },
        { year: 2002, title: "Object-Oriented COBOL", desc: "Support for classes and object-oriented paradigms is added to keep up with modern trends." },
        { year: 2020, title: "Pandemic Resurgence", desc: "Governments scramble to hire retired COBOL programmers to upgrade legacy unemployment systems." }
      ]
    },
    es: {
      name: "COBOL",
      tagline: "El gigante invisible que respalda el ecosistema financiero global.",
      description: "Common Business-Oriented Language se diseñó para ser legible, orientado a los negocios y altamente preciso con decimales, ejecutando los sistemas financieros más críticos.",
      achievements: [
        "Procesa más del 95% de las transacciones de cajeros automáticos en todo el mundo.",
        "Mantiene billones de dólares en registros bancarios, hipotecas y pensiones.",
        "Forma la columna vertebral de la Administración del Seguro Social y sistemas tributarios de EE.UU."
      ],
      intrigue: "Creado bajo fuerte presión del Departamento de Defensa de EE.UU., que amenazó a los fabricantes con no comprar sus computadoras si no soportaban COBOL. La visión de Grace Hopper de un código legible similar al inglés se convirtió en estándar.",
      milestones: [
        { year: 1959, title: "Creación de CODASYL", desc: "Un comité de expertos del gobierno y la industria completa las especificaciones en seis meses." },
        { year: 2002, title: "COBOL Orientado a Objetos", desc: "Se añade soporte para clases y paradigmas orientados a objetos." },
        { year: 2020, title: "Resurgimiento en la Pandemia", desc: "Los gobiernos se apresuran a contratar programadores de COBOL jubilados para actualizar sistemas de desempleo." }
      ]
    }
  },
  {
    id: "basic",
    year: 1964,
    creator: "John Kemeny & Thomas Kurtz",
    colorBrand: "#EA580C",
    impact: 4,
    paradigms: ["Imperative", "Procedural", "Non-structured (early)"],
    en: {
      name: "BASIC",
      tagline: "Democratized coding for the masses and sparked the microcomputer revolution.",
      description: "Beginner's All-purpose Symbolic Instruction Code was designed to make computers accessible to students in non-scientific fields, eventually shipping on almost all early home computers.",
      achievements: [
        "Altair BASIC became Micro-soft's first product, starting the company's empire.",
        "Shipped in the ROM of the Apple II, Commodore 64, and IBM PC.",
        "Taught programming to the first generation of software hobbyists and entrepreneurs."
      ],
      intrigue: "Edsger Dijkstra famously wrote: 'It is practically impossible to teach good programming to students that have had a prior exposure to BASIC: as potential programmers they are mentally mutilated beyond hope of regeneration.' Kurtz and Kemeny, however, wanted computing to be a free public service.",
      milestones: [
        { year: 1964, title: "First Run", desc: "The first BASIC program runs on Dartmouth's time-sharing system early in the morning." },
        { year: 1975, title: "Altair BASIC", desc: "Bill Gates and Paul Allen write a BASIC interpreter for the Altair 8800, launching Microsoft." },
        { year: 1991, title: "Visual Basic 1.0", desc: "Microsoft turns BASIC into a graphical drag-and-drop development tool for Windows." }
      ]
    },
    es: {
      name: "BASIC",
      tagline: "Democratizó la programación y desató la revolución de las microcomputadoras.",
      description: "Beginner's All-purpose Symbolic Instruction Code se diseñó para hacer las computadoras accesibles a estudiantes no científicos, incluyéndose en casi todas las primeras computadoras caseras.",
      achievements: [
        "Altair BASIC se convirtió en el primer producto de Micro-soft, iniciando el imperio de la empresa.",
        "Se incluyó en la ROM de la Apple II, Commodore 64 e IBM PC.",
        "Enseñó programación a la primera generación de aficionados y emprendedores."
      ],
      intrigue: "Edsger Dijkstra escribió célebremente: 'Es prácticamente imposible enseñar buena programación a estudiantes que han tenido exposición previa a BASIC... están mutilados mentalmente'. Kurtz y Kemeny, sin embargo, querían que la informática fuera gratuita y accesible.",
      milestones: [
        { year: 1964, title: "Primera Ejecución", desc: "El primer programa BASIC se ejecuta en el sistema de tiempo compartido de Dartmouth." },
        { year: 1975, title: "Altair BASIC", desc: "Bill Gates y Paul Allen escriben un intérprete de BASIC para la Altair 8800, fundando Microsoft." },
        { year: 1991, title: "Visual Basic 1.0", desc: "Microsoft convierte a BASIC en una herramienta gráfica de arrastrar y soltar para Windows." }
      ]
    }
  },
  {
    id: "c",
    year: 1972,
    creator: "Dennis Ritchie (Bell Labs)",
    colorBrand: "#0284C7",
    impact: 5,
    paradigms: ["Imperative", "Procedural", "Structured"],
    en: {
      name: "C",
      tagline: "The bedrock of modern operating systems and high-performance engineering.",
      description: "Designed for system programming at Bell Labs, C provides low-level memory access while maintaining structure, forming the foundation of Unix, Linux, Windows, and macOS.",
      achievements: [
        "Powers the kernel of almost all operating systems on Earth (Linux, Windows, macOS).",
        "Used for Apollo and Space Shuttle mission-critical command control architectures.",
        "Underpins modern embedded systems, from automotive brakes to defense aircraft telemetry."
      ],
      intrigue: "Dennis Ritchie and Ken Thompson created C because they wanted to rewrite the Unix operating system to be portable. Since AT&T (Bell Labs' parent) was a regulated monopoly forbidden from selling computer software, Unix and C source code were distributed to universities for free, fueling global software cooperation.",
      milestones: [
        { year: 1972, title: "Unix Rewrite", desc: "Dennis Ritchie creates C at Bell Labs specifically to rewrite the Unix kernel." },
        { year: 1978, title: "The C Programming Language", desc: "Ritchie and Brian Kernighan publish the 'K&R' book, defining the language informally." },
        { year: 1989, title: "ANSI C Standard", desc: "The language is standardized as ANSI C (C89), solidifying its role in commercial software." }
      ]
    },
    es: {
      name: "C",
      tagline: "La base de los sistemas operativos modernos y la ingeniería de alto rendimiento.",
      description: "Diseñado para la programación de sistemas en Bell Labs, C proporciona acceso a memoria de bajo nivel manteniendo la estructura, formando la base de Unix, Linux, Windows y macOS.",
      achievements: [
        "Potencia el núcleo de casi todos los sistemas operativos de la Tierra (Linux, Windows, macOS).",
        "Utilizado para arquitecturas de control de misiones críticas de Apolo y transbordadores espaciales.",
        "Sustenta los sistemas embebidos modernos, desde frenos de automóviles hasta telemetría de aviones de defensa."
      ],
      intrigue: "Dennis Ritchie y Ken Thompson crearon C porque querían reescribir el sistema Unix para que fuera portátil. Como AT&T (matriz de Bell Labs) tenía prohibido vender software, el código fuente se distribuyó gratis a las universidades, impulsando la informática moderna.",
      milestones: [
        { year: 1972, title: "Reescritura de Unix", desc: "Dennis Ritchie crea C en Bell Labs específicamente para reescribir el núcleo de Unix." },
        { year: 1978, title: "Publicación de K&R", desc: "Ritchie y Brian Kernighan publican el famoso libro K&R, definiendo la especificación de facto." },
        { year: 1989, title: "Estándar ANSI C", desc: "El lenguaje es estandarizado como ANSI C (C89), consolidando su uso comercial." }
      ]
    }
  },
  {
    id: "sql",
    year: 1974,
    creator: "Donald Chamberlin & Raymond Boyce (IBM)",
    colorBrand: "#06B6D4",
    impact: 5,
    paradigms: ["Declarative", "Domain-specific"],
    en: {
      name: "SQL",
      tagline: "The language of relational data and transactional integrity.",
      description: "Structured Query Language implements Edgar F. Codd's relational database model, managing and querying structured data with algebraic set transactions.",
      achievements: [
        "Handles transactional processing for global stock markets and credit cards.",
        "The standard for SQLite, powering database storage inside billions of mobile phones.",
        "Ensures transaction atomicity and safety (ACID) for global banking databases."
      ],
      intrigue: "Originally named SEQUEL, IBM renamed it to SQL due to a trademark dispute with the British Hawker Siddeley aircraft company. Larry Ellison read IBM's research papers, realized they were slow to commercialize it, and beat IBM to market by launching Oracle Database.",
      milestones: [
        { year: 1974, title: "SEQUEL Paper", desc: "Chamberlin and Boyce publish the specification for a query language based on relational algebra." },
        { year: 1979, title: "Oracle Commercialization", desc: "Relational Software (later Oracle) releases the first commercial SQL database." },
        { year: 1986, title: "ANSI SQL Standard", desc: "SQL is officially ratified by ANSI, establishing a universal querying interface." }
      ]
    },
    es: {
      name: "SQL",
      tagline: "El lenguaje de los datos relacionales y la integridad transaccional.",
      description: "Structured Query Language implementa el modelo de bases de datos relacionales de Edgar F. Codd, gestionando y consultando datos estructurados con transacciones algebraicas.",
      achievements: [
        "Maneja el procesamiento transaccional para mercados bursátiles globales y tarjetas de crédito.",
        "El estándar para SQLite, que potencia el almacenamiento de datos en miles de millones de teléfonos móviles.",
        "Garantiza la atomicidad y seguridad de las transacciones (ACID) en bases de datos bancarias."
      ],
      intrigue: "Originalmente llamado SEQUEL, IBM lo renombró a SQL debido a una disputa de marca con la compañía aérea británica Hawker Siddeley. Larry Ellison leyó los documentos de IBM, se dio cuenta de que tardaban en comercializarlo y lanzó Oracle.",
      milestones: [
        { year: 1974, title: "Documento de SEQUEL", desc: "Chamberlin y Boyce publican la especificación basada en el álgebra relacional." },
        { year: 1979, title: "Comercialización de Oracle", desc: "Relational Software (más tarde Oracle) lanza la primera base de datos SQL comercial." },
        { year: 1986, title: "Estándar ANSI SQL", desc: "SQL es ratificado oficialmente por ANSI, estableciendo una interfaz de consulta universal." }
      ]
    }
  },
  {
    id: "cpp",
    year: 1985,
    creator: "Bjarne Stroustrup (Bell Labs)",
    colorBrand: "#6366F1",
    impact: 5,
    paradigms: ["Multi-paradigm", "Object-Oriented", "Generic", "Procedural"],
    en: {
      name: "C++",
      tagline: "Low-level performance meets powerful high-level abstraction.",
      description: "Beginning as 'C with Classes', C++ introduced object-oriented programming, deterministic resource management (RAII), and generic programming without sacrificing execution speed.",
      achievements: [
        "Powers the flight control software of the Lockheed Martin F-35 Joint Strike Fighter.",
        "Runs the real-time high-frequency trading (HFT) engines on Wall Street.",
        "Controls NASA's Mars Exploration Rovers and real-time gaming engines (Unreal Engine)."
      ],
      intrigue: "Stroustrup began working on C++ because his Ph.D. simulator projects required Simula (which was clean but painfully slow) and C (which was fast but lacked structure). He combined the two, but the language had no formal standard for 13 years, causing massive compiler wars.",
      milestones: [
        { year: 1979, title: "C with Classes", desc: "Stroustrup starts adding classes, default arguments, and strong typing to C at Bell Labs." },
        { year: 1985, title: "Commercial Release", desc: "First commercial release of C++ alongside the publication of Stroustrup's reference book." },
        { year: 1998, title: "C++98 Standard", desc: "ISO ratifies the first formal standard, including the Standard Template Library (STL)." },
        { year: 2011, title: "C++11 Revolution", desc: "Modern C++ arrives with auto, smart pointers, lambda expressions, and move semantics." }
      ]
    },
    es: {
      name: "C++",
      tagline: "Rendimiento a bajo nivel combinado con potentes abstracciones.",
      description: "Comenzando como 'C con Clases', C++ introdujo la programación orientada a objetos y gestión determinista de recursos (RAII) sin sacrificar la velocidad de ejecución.",
      achievements: [
        "Controla el software de vuelo del caza de combate Lockheed Martin F-35.",
        "Ejecuta los motores de negociación de alta frecuencia (HFT) en tiempo real en Wall Street.",
        "Controla los Mars Rovers de la NASA y motores de videojuegos en tiempo real (Unreal Engine)."
      ],
      intrigue: "Stroustrup comenzó a trabajar en C++ porque sus simulaciones necesitaban Simula (que era limpio pero lento) y C (rápido pero sin estructura). Los combinó, pero el lenguaje no tuvo estándar formal durante 13 años, provocando guerras de compiladores.",
      milestones: [
        { year: 1979, title: "C con Clases", desc: "Stroustrup añade clases, argumentos por defecto y tipado estricto a C." },
        { year: 1985, title: "Lanzamiento Comercial", desc: "Primer lanzamiento comercial de C++ junto con el libro de referencia de Stroustrup." },
        { year: 1998, title: "Estándar C++98", desc: "ISO ratifica el primer estándar formal, incluyendo la Standard Template Library (STL)." },
        { year: 2011, title: "Revolución C++11", desc: "Llega el C++ moderno con inferencia de tipos 'auto', punteros inteligentes y expresiones lambda." }
      ]
    }
  },
  {
    id: "python",
    year: 1991,
    creator: "Guido van Rossum",
    colorBrand: "#F59E0B",
    impact: 5,
    paradigms: ["Multi-paradigm", "Object-Oriented", "Functional", "Structured"],
    en: {
      name: "Python",
      tagline: "Elegant readability powering artificial intelligence and big data.",
      description: "Designed with a philosophy of readability and minimalist syntax, Python became the language of choice for scientific computing, web backends, and the modern AI boom.",
      achievements: [
        "Primary scripting language for Google infrastructure and Instagram backend.",
        "Powers astronomical data pipelines for the Event Horizon Telescope (Black Hole image).",
        "The standard language for machine learning frameworks (PyTorch, TensorFlow)."
      ],
      intrigue: "Named after the comedy group 'Monty Python' rather than the reptile. Guido van Rossum served as the 'Benevolent Dictator for Life' (BDFL) until 2018, when he stepped down due to intense personal attacks over the proposal of PEP 572 (assignment expressions).",
      milestones: [
        { year: 1991, title: "Initial Release", desc: "Guido van Rossum publishes Python 0.9.0 on alt.sources, featuring classes and exception handling." },
        { year: 2000, title: "Python 2.0", desc: "Introduces list comprehensions, garbage collection, and Unicode support." },
        { year: 2008, title: "Python 3.0", desc: "A major, backwards-incompatible cleanup release designed to fix design flaws." }
      ]
    },
    es: {
      name: "Python",
      tagline: "Legibilidad elegante que potencia la inteligencia artificial y el Big Data.",
      description: "Diseñado bajo una filosofía de legibilidad y sintaxis minimalista, Python se convirtió en el lenguaje preferido para la computación científica, backends web y el auge actual de la IA.",
      achievements: [
        "Lenguaje de scripting principal para la infraestructura de Google y el backend de Instagram.",
        "Potencia el procesamiento de datos del Event Horizon Telescope (primera foto de agujero negro).",
        "El lenguaje estándar para frameworks de aprendizaje automático (PyTorch, TensorFlow)."
      ],
      intrigue: "Llamado así por el grupo de comedia 'Monty Python' en lugar del reptil. Guido van Rossum actuó como 'Dictador Benévolo de por Vida' (BDFL) hasta 2018, cuando renunció tras recibir ataques personales por el operador morsa (PEP 572).",
      milestones: [
        { year: 1991, title: "Lanzamiento Inicial", desc: "Guido van Rossum publica Python 0.9.0 en alt.sources, con clases y manejo de excepciones." },
        { year: 2000, title: "Python 2.0", desc: "Introduce comprensiones de listas, recolección de basura y soporte Unicode." },
        { year: 2008, title: "Python 3.0", desc: "Una actualización importante y no retrocompatible diseñada para corregir fallos de diseño." }
      ]
    }
  },
  {
    id: "java",
    year: 1995,
    creator: "James Gosling (Sun Microsystems)",
    colorBrand: "#EF4444",
    impact: 5,
    paradigms: ["Object-Oriented", "Structured", "Concurrent"],
    en: {
      name: "Java",
      tagline: "Write once, run anywhere enterprise architecture.",
      description: "Java introduced portable bytecode running inside the Java Virtual Machine (JVM), becoming the corporate and institutional standard for cross-platform secure code.",
      achievements: [
        "Underpins Android's app runtime and ecosystem (billions of devices).",
        "Runs backends of major banks, NASA's rover ground operations, and the SWIFT payment network.",
        "Powers Minecraft, the best-selling video game of all time."
      ],
      intrigue: "Originally named 'Oak' and intended for interactive television set-top boxes, which was too early for the market. Oracle's acquisition of Sun Microsystems in 2010 led to a massive, decade-long copyright lawsuit against Google over Android API usage, settled in the Supreme Court.",
      milestones: [
        { year: 1995, title: "JDK 1.0 Release", desc: "Sun Microsystems launches Java, promoting its 'Write Once, Run Anywhere' promise." },
        { year: 2004, title: "Java 5 (J2SE 5.0)", desc: "Introduces generics, metadata annotations, autoboxing, and enhanced for loops." },
        { year: 2014, title: "Java 8", desc: "Adds functional programming capabilities through lambda expressions and streams." }
      ]
    },
    es: {
      name: "Java",
      tagline: "Escribe una vez, ejecútalo en cualquier lugar.",
      description: "Java introdujo un bytecode portátil ejecutado dentro de la Máquina Virtual Java (JVM), convirtiéndose en el estándar corporativo para código seguro y multiplataforma.",
      achievements: [
        "Sustenta el tiempo de ejecución y ecosistema de aplicaciones de Android.",
        "Ejecuta backends de bancos principales, operaciones terrestres de rovers de la NASA y la red SWIFT.",
        "Potencia Minecraft, el videojuego más vendido de todos los tiempos."
      ],
      intrigue: "Originalmente llamado 'Oak' y pensado para decodificadores de televisión interactiva. La adquisición de Sun por parte de Oracle en 2010 desató una demanda multimillonaria contra Google por las APIs de Android, resuelta en el Tribunal Supremo.",
      milestones: [
        { year: 1995, title: "Lanzamiento de JDK 1.0", desc: "Sun Microsystems lanza Java con la promesa de 'Escribe una vez, ejecútalo donde sea'." },
        { year: 2004, title: "Java 5", desc: "Introduce tipos genéricos, anotaciones, autoboxing y bucles for-each." },
        { year: 2014, title: "Java 8", desc: "Añade capacidades de programación funcional con expresiones lambda y flujos (Streams)." }
      ]
    }
  },
  {
    id: "javascript",
    year: 1995,
    creator: "Brendan Eich (Netscape)",
    colorBrand: "#FBBF24",
    impact: 5,
    paradigms: ["Multi-paradigm", "Prototype-based", "Event-driven", "Functional"],
    en: {
      name: "JavaScript",
      tagline: "The engine that animated and unified the World Wide Web.",
      description: "Created to add scripts to web browsers, JavaScript has expanded through Node.js to power full-stack applications, interactive maps, and modern web application frameworks.",
      achievements: [
        "Runs natively on 99% of web browsers, rendering the entire interactive modern web.",
        "Powers massive backend and real-time APIs via Node.js.",
        "Drives frontend interfaces for global banking dashboards, trading terminals, and SaaS products."
      ],
      intrigue: "Eich wrote the prototype of JavaScript in only 10 days in May 1995 under extreme pressure to ship it in Netscape Navigator. Originally named Mocha, then LiveScript, Netscape renamed it JavaScript to piggyback on Java's popularity, creating decades of confusion.",
      milestones: [
        { year: 1995, title: "Written in 10 Days", desc: "Brendan Eich creates the prototype for Netscape to beat Microsoft's browser efforts." },
        { year: 1997, title: "ECMAScript 1", desc: "Standardized as ECMA-262 to maintain cross-browser compatibility." },
        { year: 2009, title: "Node.js & ES5", desc: "Ryan Dahl creates Node.js, freeing JavaScript from the browser; ES5 modernizes the syntax." },
        { year: 2015, title: "ES6 / ES2015", desc: "The biggest update to the language, adding classes, arrows, promises, and modules." }
      ]
    },
    es: {
      name: "JavaScript",
      tagline: "El motor que animó y unificó la World Wide Web.",
      description: "Creado para añadir scripts a los navegadores, JavaScript se ha expandido mediante Node.js para potenciar aplicaciones full-stack, mapas interactivos y frameworks web modernos.",
      achievements: [
        "Se ejecuta de forma nativa en el 99% de los navegadores, renderizando la web interactiva.",
        "Potencia APIs masivas en tiempo real y backends mediante Node.js.",
        "Impulsa las interfaces frontend de paneles bancarios globales, terminales de trading y SaaS."
      ],
      intrigue: "Eich escribió el prototipo en solo 10 días en mayo de 1995 bajo una intensa presión. Originalmente llamado Mocha, luego LiveScript, Netscape lo renombró a JavaScript para aprovechar la popularidad de Java, creando décadas de confusión.",
      milestones: [
        { year: 1995, title: "Escrito en 10 Días", desc: "Brendan Eich crea el prototipo para Netscape para competir contra el navegador de Microsoft." },
        { year: 1997, title: "ECMAScript 1", desc: "Se estandariza como ECMA-262 para mantener la compatibilidad entre navegadores." },
        { year: 2009, title: "Node.js y ES5", desc: "Ryan Dahl crea Node.js, liberando a JS del navegador; ES5 moderniza la sintaxis." },
        { year: 2015, title: "ES6 / ES2015", desc: "La mayor actualización, añadiendo clases, funciones flecha, promesas y módulos." }
      ]
    }
  },
  {
    id: "php",
    year: 1995,
    creator: "Rasmus Lerdorf",
    colorBrand: "#8B5CF6",
    impact: 4,
    paradigms: ["Multi-paradigm", "Object-Oriented", "Imperative"],
    en: {
      name: "PHP",
      tagline: "The pragmatic web workhorse driving a massive share of the internet.",
      description: "Personal Home Page tools was designed simply to template server HTML files. It evolved into PHP: Hypertext Preprocessor, running the backends of millions of blogs, forums, and shops.",
      achievements: [
        "Powers over 75% of websites using server-side languages.",
        "Underpins WordPress (which powers over 40% of the web) and early Facebook.",
        "Runs massive eCommerce web stores and enterprise content management architectures."
      ],
      intrigue: "Lerdorf did not intend to design a programming language; it was just a collection of C binaries to track visits to his online resume. Because of its organic growth, early versions suffered from inconsistent function names and security issues.",
      milestones: [
        { year: 1995, title: "Personal Home Page Tools", desc: "Lerdorf releases his collection of CGI scripts to the public." },
        { year: 1998, title: "PHP 3.0 Rewrite", desc: "Zeev Suraski and Andi Gutmans rewrite the parser, creating the foundation for PHP as a true language." },
        { year: 2020, title: "PHP 8.0 & JIT", desc: "Introduces Just-In-Time compilation, massively boosting execution speeds." }
      ]
    },
    es: {
      name: "PHP",
      tagline: "El caballo de batalla pragmático que impulsa una gran parte de la web.",
      description: "Personal Home Page tools se diseñó originalmente para plantillas HTML de servidor. Evolucionó a PHP: Hypertext Preprocessor, ejecutando millones de blogs, foros y tiendas.",
      achievements: [
        "Potencia más del 75% de los sitios web que usan lenguajes de servidor.",
        "Sustenta WordPress (que impulsa más del 40% de la web) y las primeras versiones de Facebook.",
        "Ejecuta tiendas web de comercio electrónico y arquitecturas empresariales de gestión de contenido."
      ],
      intrigue: "Lerdorf no tenía intención de crear un lenguaje; solo era una colección de binarios en C para rastrear visitas a su currículum. Debido a su crecimiento orgánico, las primeras versiones tenían nombres de funciones inconsistentes y problemas de seguridad.",
      milestones: [
        { year: 1995, title: "Lanzamiento de PHP Tools", desc: "Lerdorf publica su colección de scripts CGI al público." },
        { year: 1998, title: "Reescritura de PHP 3.0", desc: "Zeev Suraski y Andi Gutmans reescriben el analizador, sentando las bases del lenguaje actual." },
        { year: 2020, title: "PHP 8.0 y JIT", desc: "Introduce compilación en tiempo de ejecución (JIT), aumentando masivamente la velocidad." }
      ]
    }
  },
  {
    id: "csharp",
    year: 2000,
    creator: "Anders Hejlsberg (Microsoft)",
    colorBrand: "#10B981",
    impact: 5,
    paradigms: ["Multi-paradigm", "Object-Oriented", "Functional", "Structured"],
    en: {
      name: "C#",
      tagline: "Enterprise reliability, cloud power, and interactive game engines.",
      description: "Designed for Microsoft's .NET initiative, C# combines C++ power with Java's managed simplicity, serving as the language of enterprise architectures, Windows apps, and indie gaming.",
      achievements: [
        "Primary programming language for Microsoft .NET enterprise backends.",
        "Powers the Unity engine, behind over 50% of the world's mobile, console, and VR games.",
        "Core framework for cloud banking, payment networks, and logistics databases."
      ],
      intrigue: "Originally codenamed 'Cool' (C-like Object Oriented Language). Microsoft built it after Sun Microsystems sued them for modifying Java in Windows. Microsoft had to drop Java support and built their own modern runtime (.NET) instead.",
      milestones: [
        { year: 2000, title: "C# Unveiled", desc: "Microsoft announces C# at the Professional Developers Conference to compete with Java." },
        { year: 2005, title: "C# 2.0 Generics", desc: "Adds generics, partial classes, and anonymous methods, leapfrogging Java's implementation." },
        { year: 2016, title: ".NET Core 1.0", desc: "Microsoft takes .NET open-source and cross-platform, allowing C# to run natively on Linux." }
      ]
    },
    es: {
      name: "C#",
      tagline: "Fiabilidad empresarial, potencia en la nube y motores de juego interactivos.",
      description: "Diseñado para la iniciativa .NET de Microsoft, C# combina la potencia de C++ con la simplicidad gestionada de Java, sirviendo como el lenguaje de arquitecturas empresariales y videojuegos.",
      achievements: [
        "Lenguaje principal para los backends empresariales de Microsoft .NET.",
        "Potencia el motor Unity, detrás de más del 50% de los juegos móviles, consolas y VR.",
        "Marco central para la banca en la nube, redes de pago y bases de datos logísticas."
      ],
      intrigue: "Originalmente llamado en código 'Cool' (C-like Object Oriented Language). Microsoft lo construyó después de que Sun Microsystems los demandara por modificar Java en Windows, obligando a Microsoft a crear su propia plataforma (.NET).",
      milestones: [
        { year: 2000, title: "Presentación de C#", desc: "Microsoft anuncia C# en la PDC para competir directamente con la plataforma Java." },
        { year: 2005, title: "C# 2.0 y Genéricos", desc: "Añade tipos genéricos, clases parciales y métodos anónimos." },
        { year: 2016, title: ".NET Core 1.0", desc: "Microsoft hace que .NET sea de código abierto y multiplataforma, permitiendo ejecutar C# en Linux." }
      ]
    }
  },
  {
    id: "go",
    year: 2009,
    creator: "Robert Griesemer, Rob Pike, Ken Thompson",
    colorBrand: "#00ADD8",
    impact: 4,
    paradigms: ["Concurrent", "Procedural", "Structured"],
    en: {
      name: "Go",
      tagline: "Ultra-fast compilation and simple concurrency for cloud infrastructures.",
      description: "Created at Google to solve developer productivity and scale, Go features simple syntax, fast native compilation, and structural channels (Goroutines) for concurrent tasks.",
      achievements: [
        "Powers the entire modern cloud infrastructure (Docker and Kubernetes are written in Go).",
        "Runs backend microservices at Google, Netflix, Uber, and Twitch.",
        "Underpins financial transaction routers handling millions of operations per second."
      ],
      intrigue: "The language was conceived during a 45-minute wait for a massive C++ build at Google. The creators designed it by explicitly leaving out features they disliked in C++, such as inheritance, templates, and exceptions.",
      milestones: [
        { year: 2009, title: "Open Source Announcement", desc: "Google releases Go as an open-source project, inviting the community to contribute." },
        { year: 2012, title: "Go 1.0 Release", desc: "The specification is frozen to guarantee backward compatibility for applications." },
        { year: 2022, title: "Go 1.18 Generics", desc: "After ten years of debate, type parameters (generics) are added to the language." }
      ]
    },
    es: {
      name: "Go",
      tagline: "Compilación ultra rápida y concurrencia simple para la nube.",
      description: "Creado en Google para resolver problemas de productividad a gran escala. Destaca por su sintaxis simple, compilación nativa y canales estructurados (Goroutines) para tareas concurrentes.",
      achievements: [
        "Potencia toda la infraestructura moderna en la nube (Docker y Kubernetes están escritos en Go).",
        "Ejecuta microservicios de backend en Google, Netflix, Uber y Twitch.",
        "Sustenta enrutadores de transacciones financieras que manejan millones de operaciones por segundo."
      ],
      intrigue: "El lenguaje fue concebido durante una espera de 45 minutos para compilar un sistema en C++ en Google. Los creadores lo diseñaron omitiendo las características que detestaban de C++ (como herencia y excepciones).",
      milestones: [
        { year: 2009, title: "Anuncio de Código Abierto", desc: "Google lanza Go al público, invitando a la comunidad a contribuir." },
        { year: 2012, title: "Lanzamiento de Go 1.0", desc: "Se congela la especificación del lenguaje para garantizar la compatibilidad hacia atrás." },
        { year: 2022, title: "Go 1.18 y Genéricos", desc: "Después de diez años de debate, se añaden parámetros de tipo (genéricos) al lenguaje." }
      ]
    }
  },
  {
    id: "typescript",
    year: 2012,
    creator: "Anders Hejlsberg (Microsoft)",
    colorBrand: "#3178C6",
    impact: 5,
    paradigms: ["Multi-paradigm", "Static typing"],
    en: {
      name: "TypeScript",
      tagline: "Brings type safety and architectural scale to the JavaScript ecosystem.",
      description: "A strict syntactical superset of JavaScript, TypeScript adds optional static typing and class interfaces, compiled down to clean, standard JavaScript for any browser.",
      achievements: [
        "Standard for major modern frontend frameworks (React, Angular, NestJS, Vue).",
        "Crucial in enterprise setups for banking portals, preventing runtime interface crashes.",
        "Adopted by almost all large tech firms to manage codebase refactoring scale."
      ],
      intrigue: "Originally developed in secret inside Microsoft, the open-source community met it with deep suspicion as Microsoft's historical 'embrace, extend, and extinguish' strategy. It won them over completely because it was fully open source and integrated with existing JavaScript libraries.",
      milestones: [
        { year: 2012, title: "Public Release (0.8)", desc: "Microsoft releases the first public preview, demonstrating it in Visual Studio." },
        { year: 2016, title: "TypeScript 2.0", desc: "Introduces read-only properties, non-nullable types, and simplified declaration files." },
        { year: 2023, title: "TypeScript 5.0", desc: "Optimizes speed and package size, adding decorators matching TC39 standards." }
      ]
    },
    es: {
      name: "TypeScript",
      tagline: "Aporta seguridad de tipos y escala arquitectónica al ecosistema de JavaScript.",
      description: "Un superconjunto estricto de JavaScript que añade tipado estático opcional e interfaces de clase, compilando a JavaScript estándar para cualquier navegador.",
      achievements: [
        "El estándar para los principales frameworks frontend modernos (React, Angular, NestJS, Vue).",
        "Crucial en configuraciones empresariales para portales bancarios, evitando caídas en tiempo de ejecución.",
        "Adoptado por casi todas las grandes empresas tecnológicas para gestionar la escala de refactorización."
      ],
      intrigue: "Originalmente desarrollado en secreto en Microsoft, la comunidad lo recibió con recelo por la estrategia histórica de 'adoptar, extender y extinguir'. Se los ganó porque es de código abierto e integra perfectamente con librerías JS existentes.",
      milestones: [
        { year: 2012, title: "Lanzamiento Público (0.8)", desc: "Microsoft publica la primera vista previa pública, demostrándola en Visual Studio." },
        { year: 2016, title: "TypeScript 2.0", desc: "Introduce propiedades de solo lectura, tipos que no admiten nulos y archivos de declaración simplificados." },
        { year: 2023, title: "TypeScript 5.0", desc: "Optimiza la velocidad y tamaño, añadiendo decoradores que coinciden con los estándares TC39." }
      ]
    }
  },
  {
    id: "rust",
    year: 2015,
    creator: "Graydon Hoare (Mozilla)",
    colorBrand: "#D97706",
    impact: 5,
    paradigms: ["Concurrent", "Functional", "Imperative", "Structured"],
    en: {
      name: "Rust",
      tagline: "Guarantees thread safety and memory safety without a garbage collector.",
      description: "Rust solves the age-old problem of memory corruption bugs through a strict compiler checking borrow checker, achieving raw speed equivalent to C++ with bulletproof safety.",
      achievements: [
        "Officially accepted into the Linux kernel code, the first alternative to C.",
        "Used by NASA for flight software prototypes and core web components.",
        "Underpins Android system security layers to prevent privilege escalation exploits."
      ],
      intrigue: "Started as a personal project by Mozilla employee Graydon Hoare, who was inspired after returning to his apartment building and finding the elevator out of service due to a software crash in its C++ firmware. He set out to build a language that couldn't crash because of memory bugs.",
      milestones: [
        { year: 2006, title: "Personal Hobby", desc: "Graydon Hoare begins working on Rust as a personal systems programming language project." },
        { year: 2010, title: "Mozilla Sponsorship", desc: "Mozilla officially backs the project, rewriting their experimental browser engine, Servo, in Rust." },
        { year: 2015, title: "Rust 1.0 Stable", desc: "The language is declared stable, guaranteeing API stability and launch safety." }
      ]
    },
    es: {
      name: "Rust",
      tagline: "Garantiza seguridad de memoria y subprocesos sin un recolector de basura.",
      description: "Rust resuelve el antiguo problema de la corrupción de memoria mediante un riguroso validador de referencias (borrow checker), logrando velocidades equivalentes a C++ con seguridad absoluta.",
      achievements: [
        "Aceptado oficialmente en el núcleo Linux, siendo la primera alternativa a C.",
        "Utilizado por la NASA para prototipos de software de vuelo y componentes web centrales.",
        "Sustenta las capas de seguridad de Android para evitar exploits de escalada de privilegios."
      ],
      intrigue: "Comenzó como un proyecto personal de Graydon Hoare (empleado de Mozilla), quien se inspiró al volver a su apartamento y ver el ascensor fuera de servicio por un fallo de software en su firmware C++. Decidió crear un lenguaje que no pudiera fallar de esa forma.",
      milestones: [
        { year: 2006, title: "Proyecto Personal", desc: "Graydon Hoare comienza a trabajar en Rust como un lenguaje de programación de sistemas." },
        { year: 2010, title: "Patrocinio de Mozilla", desc: "Mozilla respalda oficialmente el proyecto, reescribiendo en Rust su motor de navegador experimental Servo." },
        { year: 2015, title: "Rust 1.0 Estable", desc: "El lenguaje se declara estable, garantizando compatibilidad de API a largo plazo." }
      ]
    }
  },
  {
    id: "linux",
    year: 1991,
    creator: "Linus Torvalds",
    colorBrand: "#FCC624",
    impact: 5,
    paradigms: ["Kernel", "C", "Open Source"],
    type: "milestone",
    en: {
      name: "Linux Kernel",
      tagline: "The open-source backbone of modern global computing.",
      description: "Linus Torvalds released the Linux kernel as a hobby project, which went on to revolutionize the server market, cloud infrastructure, and the open-source movement.",
      achievements: [
        "Powers 100% of the world's top 500 supercomputers.",
        "Forms the foundational core of Android, powering billions of mobile devices.",
        "Serves as the infrastructure base for almost all cloud hosting providers (AWS, Azure, GCP)."
      ],
      intrigue: "Linus Torvalds wanted to call it 'Freax' (a combination of 'free', 'freak', and the letter 'X' for Unix). The administrator of the FTP server disliked the name and renamed the directory to 'linux' on his own authority.",
      milestones: [
        { year: 1991, title: "Initial Release", desc: "Linus Torvalds posts on Usenet about his free operating system kernel for 386 computers." },
        { year: 1996, title: "Tux the Penguin", desc: "Tux is officially selected as the mascot of Linux after Linus was bitten by a penguin." },
        { year: 2020, title: "Linux on Mars", desc: "NASA's Perseverance Rover lands on Mars, running Linux on its Ingenuity helicopter." }
      ]
    },
    es: {
      name: "Núcleo Linux",
      tagline: "La columna vertebral de código abierto de la informática mundial.",
      description: "Linus Torvalds lanzó el núcleo Linux como un proyecto personal, el cual revolucionó el mercado de servidores, la infraestructura en la nube y el movimiento de software libre.",
      achievements: [
        "Hace funcionar el 100% de las 500 supercomputadoras más potentes del mundo.",
        "Forma el núcleo fundamental de Android, alimentando miles de millones de dispositivos móviles.",
        "Sirve de base de infraestructura para casi todos los proveedores de la nube (AWS, Azure, GCP)."
      ],
      intrigue: "Linus Torvalds quería llamarlo 'Freax' (fusión de 'free', 'freak' y la 'X' de Unix). El administrador del servidor FTP rechazó el nombre y renombró el directorio a 'linux' por su propia cuenta.",
      milestones: [
        { year: 1991, title: "Lanzamiento Inicial", desc: "Linus Torvalds publica en Usenet sobre su núcleo de sistema operativo libre para PC 386." },
        { year: 1996, title: "Tux el Pingüino", desc: "Tux es adoptado oficialmente como la mascota de Linux después de que Linus fuera mordido por un pingüino." },
        { year: 2020, title: "Linux en Marte", desc: "El rover Perseverance de la NASA aterriza en Marte, ejecutando Linux en el helicóptero Ingenuity." }
      ]
    }
  },
  {
    id: "git",
    year: 2005,
    creator: "Linus Torvalds",
    colorBrand: "#F05032",
    impact: 5,
    paradigms: ["Version Control", "Distributed", "Collaboration"],
    type: "milestone",
    en: {
      name: "Git",
      tagline: "Revolutionizing developer collaboration and source code control.",
      description: "Frustrated by existing tools, Linus Torvalds designed Git in just a few weeks to manage the Linux kernel development. It became the global standard for version control.",
      achievements: [
        "Powers GitHub, GitLab, and Bitbucket, facilitating collaboration for millions of developers.",
        "Tracks history for virtually all major open-source and proprietary software repositories.",
        "Allows developers to work asynchronously with its highly efficient branching model."
      ],
      intrigue: "Linus Torvalds named the tool Git, which is British slang for an 'unpleasant or stupid person'. He joked: 'I'm an egotistical bastard, and I name all my projects after myself. First Linux, now Git.'",
      milestones: [
        { year: 2005, title: "Creation of Git", desc: "Linus Torvalds writes Git in about two weeks to replace BitKeeper for Linux kernel development." },
        { year: 2008, title: "GitHub Launches", desc: "GitHub opens, providing hosting and social coding, driving Git's mass adoption." },
        { year: 2018, title: "Microsoft Acquires GitHub", desc: "Microsoft acquires GitHub for $7.5 billion, representing a massive shift in corporate open-source strategy." }
      ]
    },
    es: {
      name: "Git",
      tagline: "Revolucionando la colaboración y el control del código fuente.",
      description: "Frustrado por las herramientas existentes, Linus Torvalds diseñó Git en pocas semanas para gestionar el núcleo Linux, convirtiéndose en el estándar mundial de control de versiones.",
      achievements: [
        "Sustenta GitHub, GitLab y Bitbucket, facilitando la colaboración de millones de programadores.",
        "Registra el historial de casi todos los repositorios importantes de código libre y propietario.",
        "Permite trabajar de forma asíncrona mediante su eficiente modelo de ramificación (branching)."
      ],
      intrigue: "Linus Torvalds llamó a la herramienta Git, que en argot británico significa 'persona desagradable o estúpida'. Bromeó: 'Soy un bastardo egocéntrico, y nombro todos mis proyectos como yo. Primero Linux, ahora Git'.",
      milestones: [
        { year: 2005, title: "Creación de Git", desc: "Linus Torvalds escribe Git en dos semanas para reemplazar BitKeeper en el desarrollo del núcleo Linux." },
        { year: 2008, title: "Lanzamiento de GitHub", desc: "GitHub abre sus puertas, facilitando el alojamiento de código y disparando la adopción masiva de Git." },
        { year: 2018, title: "Microsoft Adquiere GitHub", desc: "Microsoft adquiere GitHub por 7.500 millones de dólares, marcando un hito en la aceptación corporativa del código abierto." }
      ]
    }
  },
  {
    id: "react",
    year: 2013,
    creator: "Jordan Walke (Facebook)",
    colorBrand: "#61DAFB",
    impact: 5,
    paradigms: ["Declarative", "Component-Based", "Frontend"],
    type: "framework",
    en: {
      name: "React",
      tagline: "Component-based UI development that redefined web engineering.",
      description: "React introduced the Virtual DOM and declarative UI, changing how developers build fast, interactive single-page web applications.",
      achievements: [
        "Powers the frontend of Facebook, Instagram, Airbnb, Netflix, and millions of websites.",
        "Spawned React Native, allowing cross-platform mobile development with shared JavaScript codebase.",
        "Popularized component-driven design systems, hooks, and uni-directional data flow."
      ],
      intrigue: "When React was first open-sourced at JSConf US 2013, the audience hated it. Most developers called it a 'regression' because it mixed HTML-like syntax (JSX) inside JavaScript files, breaking the traditional separation of concerns.",
      milestones: [
        { year: 2011, title: "FaxJS Prototype", desc: "Jordan Walke creates FaxJS, an early prototype of React used on Facebook's news feed." },
        { year: 2013, title: "Open Source Launch", desc: "Facebook open-sources React, facing initial skepticism from the developer community." },
        { year: 2016, title: "React Fiber & Hooks", desc: "Major internal rewrites improve rendering efficiency and introduce Hooks, eliminating class components." }
      ]
    },
    es: {
      name: "React",
      tagline: "Desarrollo de UI basado en componentes que redefinió la ingeniería web.",
      description: "React introdujo el DOM Virtual y la interfaz declarativa, cambiando cómo se construyen aplicaciones web SPA rápidas e interactivas.",
      achievements: [
        "Alimenta la interfaz de Facebook, Instagram, Airbnb, Netflix y millones de sitios web.",
        "Dio origen a React Native, permitiendo el desarrollo móvil multiplataforma compartiendo lógica JS.",
        "Popularizó los sistemas de diseño basados en componentes, los hooks y el flujo de datos unidireccional."
      ],
      intrigue: "Cuando React se presentó en JSConf US 2013, la audiencia lo rechazó. Muchos lo consideraron una 'regresión' porque mezclaba sintaxis similar a HTML (JSX) dentro de archivos de JavaScript, rompiendo la clásica separación de conceptos.",
      milestones: [
        { year: 2011, title: "Prototipo FaxJS", desc: "Jordan Walke crea FaxJS, un prototipo temprano de React utilizado en el muro de Facebook." },
        { year: 2013, title: "Lanzamiento Libre", desc: "Facebook lanza React como código abierto, enfrentando el escepticismo de la comunidad." },
        { year: 2016, title: "React Fiber y Hooks", desc: "Reescrituras internas mejoran la eficiencia e introducen Hooks, eliminando la necesidad de componentes de clase." }
      ]
    }
  },
  {
    id: "docker",
    year: 2013,
    creator: "Solomon Hykes (dotCloud)",
    colorBrand: "#2496ED",
    impact: 5,
    paradigms: ["Containerization", "DevOps", "Infrastructure"],
    type: "milestone",
    en: {
      name: "Docker",
      tagline: "Unified packaging that solved the 'works on my machine' dilemma.",
      description: "Docker brought containerization to the masses by packaging code, runtime, system tools, and libraries into isolated, predictable containers.",
      achievements: [
        "Standardized application deployment across local development, testing, and production cloud systems.",
        "Paved the way for microservices architecture and cloud-native container orchestration (Kubernetes).",
        "Empowers millions of developers via Docker Hub with instantly runnable, pre-configured software containers."
      ],
      intrigue: "dotCloud, the parent company behind Docker, was struggling to survive. To keep the company afloat, Solomon Hykes decided to open-source Docker, which was their internal deployment tool. The software exploded in popularity, leading them to pivot the entire company around it.",
      milestones: [
        { year: 2013, title: "Open Source Launch", desc: "Docker is open-sourced at PyCon, immediately capturing the DevOps and developer mindshare." },
        { year: 2015, title: "OCI Standard", desc: "The Open Container Initiative is formed to establish vendor-neutral container runtime standards." },
        { year: 2020, title: "Kubernetes Transition", desc: "Kubernetes deprecates direct dockershim support, shifting to container-runtime interface (CRI), proving Docker's legacy API standardization." }
      ]
    },
    es: {
      name: "Docker",
      tagline: "Empaquetado unificado que resolvió el dilema de 'funciona en mi máquina'.",
      description: "Docker popularizó la contenedorización al empaquetar código, entornos de ejecución y dependencias en contenedores aislados y reproducibles.",
      achievements: [
        "Estandarizó el despliegue de software en entornos locales, de pruebas y de producción en la nube.",
        "Allanó el camino para la arquitectura de microservicios y la orquestación en la nube (Kubernetes).",
        "Facilita contenedores listos para usar en segundos a millones de programadores mediante Docker Hub."
      ],
      intrigue: "dotCloud, la empresa matriz de Docker, estaba al borde del cierre. Para salvarla, Solomon Hykes decidió liberar Docker, que era su herramienta interna de despliegue. El éxito fue tan abrumador que cambiaron el nombre de toda la empresa a Docker.",
      milestones: [
        { year: 2013, title: "Lanzamiento Libre", desc: "Docker se lanza como código abierto en PyCon, ganando popularidad inmediata en DevOps." },
        { year: 2015, title: "Estándar OCI", desc: "Se crea la Open Container Initiative para establecer estándares abiertos y neutrales de contenedores." },
        { year: 2020, title: "Transición de Kubernetes", desc: "Kubernetes elimina el soporte directo de dockershim, consolidando la API abierta inspirada por Docker." }
      ]
    }
  },
  {
    id: "gpt4",
    year: 2023,
    creator: "OpenAI",
    colorBrand: "#10A37F",
    impact: 5,
    paradigms: ["AI Models", "LLM", "Deep Learning"],
    type: "ai",
    en: {
      name: "GPT-4",
      tagline: "The dawn of reasoning LLMs and multimodal AI capabilities.",
      description: "OpenAI's GPT-4 set a new benchmark for artificial intelligence, demonstrating human-level performance on professional, academic, and creative tasks.",
      achievements: [
        "Passed the Uniform Bar Exam in the 90th percentile and solved complex advanced coding challenges.",
        "Accelerated coding productivity globally by powering GitHub Copilot and conversational coding assistants.",
        "Triggered a massive global boom in generative AI products, investments, and regulatory discussions."
      ],
      intrigue: "OpenAI spent over 6 months safety-testing and fine-tuning GPT-4 before its public release. They kept the model size, training compute, and dataset mixtures entirely secret, sparking heated community debates about research transparency and open-source models.",
      milestones: [
        { year: 2022, title: "ChatGPT Release", desc: "OpenAI launches ChatGPT (based on GPT-3.5), becoming the fastest-growing web application in history." },
        { year: 2023, title: "GPT-4 Multimodal", desc: "GPT-4 is released, introducing visual input support and advanced logic reasoning." },
        { year: 2024, title: "Real-time Voice", desc: "Omni-multimodal models (GPT-4o) allow instantaneous, emotional voice interaction and live vision." }
      ]
    },
    es: {
      name: "GPT-4",
      tagline: "El amanecer de los modelos de lenguaje con razonamiento y capacidades multimodales.",
      description: "GPT-4 de OpenAI redefinió los límites de la inteligencia artificial, mostrando rendimiento de nivel humano en exámenes profesionales, académicos y de programación.",
      achievements: [
        "Aprobó el examen del colegio de abogados de EE. UU. en el percentil 90 y resolvió retos avanzados de código.",
        "Aceleró drásticamente la productividad de desarrollo de software al impulsar copilotos de código autónomos.",
        "Provocó una fiebre global de productos de IA generativa, inversiones y debates sobre regulación y ética."
      ],
      intrigue: "OpenAI dedicó más de 6 meses a realizar pruebas de seguridad y alineación antes de lanzar GPT-4. Mantuvieron en secreto el tamaño de los parámetros y los datos de entrenamiento, dividiendo al sector en debates sobre transparencia e IA abierta.",
      milestones: [
        { year: 2022, title: "Lanzamiento de ChatGPT", desc: "OpenAI lanza ChatGPT (basado en GPT-3.5), convirtiéndose en la aplicación web de más rápido crecimiento de la historia." },
        { year: 2023, title: "Lanzamiento de GPT-4", desc: "Se lanza GPT-4, introduciendo capacidad de razonamiento lógico avanzado y entradas de imágenes." },
        { year: 2024, title: "Modelos Omni (GPT-4o)", desc: "Modelos en tiempo real permiten comunicación de voz instantánea y análisis visual en vivo." }
      ]
    }
  },
  {
    id: "antigravity",
    year: 2026,
    creator: "AI Community / DeepMind",
    colorBrand: "#00E5FF",
    impact: 5,
    paradigms: ["AI Agents", "Agentic Coding", "Autonomy"],
    type: "ai",
    en: {
      name: "Agentic AI (Antigravity)",
      tagline: "Autonomous coding agents executing complex software engineering tasks.",
      description: "AI evolved from passive text autocomplete assistants to fully autonomous agent teams (such as Antigravity) that plan, research, write, verify, and document codebase features independently.",
      achievements: [
        "Maintains complex codebases and applies multi-file refactors with automated verification and testing.",
        "Leverages persistent memory (Engram) and specialized subagents to coordinate engineering phases.",
        "Transforms developers into software orchestrators, dramatically amplifying building speed."
      ],
      intrigue: "Unlike simple chat prompts, agentic AI operates in loops—reflecting on compiler errors, running tests, refuting its own designs, and only completing when requirements are mathematically and logically validated.",
      milestones: [
        { year: 2023, title: "AutoGPT & Early Agents", desc: "Initial experiments with autonomous loops show potential but struggle with infinite loops and state loss." },
        { year: 2025, title: "Engram & Tools Integration", desc: "Agents receive persistent cross-session memory and strict verification interfaces (facades)." },
        { year: 2026, title: "Production Grade Autonomy", desc: "Agentic software networks independently build, deploy, and maintain commercial-grade applications under human supervision." }
      ]
    },
    es: {
      name: "IA Agéntica (Antigravity)",
      tagline: "Agentes autónomos de programación que ejecutan tareas complejas de desarrollo.",
      description: "La IA evoluciona de autocompletadores pasivos a equipos de agentes de programación autónomos (como Antigravity) que planifican, investigan, programan y prueban código de forma independiente.",
      achievements: [
        "Mantiene repositorios complejos y aplica refactorizaciones multi-archivo con verificación automática.",
        "Utiliza memoria persistente (Engram) y subagentes especializados para coordinar fases de ingeniería.",
        "Transforma a los programadores en directores de orquesta de software, amplificando la velocidad de desarrollo."
      ],
      intrigue: "A diferencia de un chat estático, la IA agéntica trabaja en bucles de retroalimentación: compila, lee errores del compilador, ejecuta tests, refuta sus propios diseños y solo termina cuando se validan los requisitos.",
      milestones: [
        { year: 2023, title: "AutoGPT y Primeros Lazos", desc: "Primeros experimentos con bucles autónomos muestran potencial pero fallan por bucles infinitos y pérdida de estado." },
        { year: 2025, title: "Memoria y Herramientas", desc: "Los agentes reciben memoria persistente entre sesiones (Engram) y fachadas de verificación de código rigurosas." },
        { year: 2026, title: "Autonomía de Grado de Producción", desc: "Redes agénticas construyen y mantienen plataformas completas bajo supervisión y aprobación humana." }
      ]
    }
  }
];
