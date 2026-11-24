// Structured curriculum topics for Programmatic SEO and syllabus guidance
export const boardsData = [
  { id: 'cbse', name: 'CBSE', tag: 'Central Board of Secondary Education' },
  { id: 'kerala', name: 'Kerala', tag: 'SCERT Kerala State Syllabus' },
  { id: 'tamilnadu', name: 'Tamil Nadu', tag: 'Samacheer Kalvi State Board' },
  { id: 'karnataka', name: 'Karnataka', tag: 'KSEEB State Board' },
  { id: 'andhra', name: 'Andhra Pradesh', tag: 'AP Board of Secondary Education' },
  { id: 'telangana', name: 'Telangana', tag: 'TS SSC Board' },
  { id: 'maharashtra', name: 'Maharashtra', tag: 'MSBSHSE State Board' },
  { id: 'gujarat', name: 'Gujarat', tag: 'GSEB State Board' }
];

export const curriculumSyllabus = {
  "10": {
    grade: "Grade 10",
    subject: "Science",
    chapters: [
      {
        id: "chemical-reactions-equations",
        title: "Chemical Reactions and Equations",
        discipline: "Chemistry",
        summary: "Covers chemical equations, types of chemical reactions (combination, decomposition, displacement, double displacement, redox), and everyday effects of oxidation (corrosion, rancidity).",
        keyConcepts: [
          "Balancing chemical equations by conservation of mass",
          "Exothermic vs endothermic reactions with examples",
          "Oxidation and reduction definitions and redox reactions",
          "Prevention methods for corrosion and food rancidity"
        ],
        sampleQuestion: "Why does the color of copper sulphate solution change when an iron nail is dipped in it?"
      },
      {
        id: "acids-bases-salts",
        title: "Acids, Bases and Salts",
        discipline: "Chemistry",
        summary: "Explores indicators, chemical properties of acids and bases, the pH scale, importance of pH in everyday life, and the preparation of sodium hydroxide, bleaching powder, baking soda, washing soda, and plaster of Paris.",
        keyConcepts: [
          "Arrhenius definition and neutralization reactions",
          "pH scale logarithmic interpretation from 0 to 14",
          "Common salts and chlor-alkali process products",
          "Water of crystallization in blue vitriol and gypsum"
        ],
        sampleQuestion: "Why does dry HCl gas not change the color of dry litmus paper?"
      },
      {
        id: "metals-and-non-metals",
        title: "Metals and Non-Metals",
        discipline: "Chemistry",
        summary: "Detailed breakdown of physical and chemical properties of metals and non-metals, reactivity series, formation of ionic compounds, occurrence of metals, extraction, and corrosion prevention.",
        keyConcepts: [
          "Reactivity series and displacement reactions",
          "Ionic bond formation between sodium and chlorine",
          "Roasting vs calcination in metallurgy processes",
          "Alloy formation: brass, bronze, stainless steel, amalgam"
        ],
        sampleQuestion: "Which metal does not corrode easily and why is gold used in jewelry?"
      },
      {
        id: "carbon-and-its-compounds",
        title: "Carbon and its Compounds",
        discipline: "Chemistry",
        summary: "Delves into the tetravalency and catenation of carbon, covalent bonds, saturated and unsaturated hydrocarbons, homologous series, nomenclature, and the chemistry of soaps and detergents.",
        keyConcepts: [
          "Catenation and allotropes (diamond, graphite, fullerene)",
          "Difference between alkanes, alkenes, and alkynes",
          "Functional groups: alcohols, aldehydes, ketones, carboxylic acids",
          "Micelle mechanism of soap cleaning action"
        ],
        sampleQuestion: "Why does carbon form covalent bonds rather than ionic bonds?"
      },
      {
        id: "life-processes",
        title: "Life Processes",
        discipline: "Biology",
        summary: "Fundamental biological processes that maintain life: autotrophic and heterotrophic nutrition, cellular respiration, transport in human and plants, and the human excretory nephron system.",
        keyConcepts: [
          "Light and dark reactions of photosynthesis",
          "Aerobic vs anaerobic breakdown of glucose pathways",
          "Double circulation mechanism in the four-chambered human heart",
          "Structure and ultrafiltration function of nephrons in kidneys"
        ],
        sampleQuestion: "What is the role of bile juice and pancreatic enzymes in human digestion?"
      },
      {
        id: "control-and-coordination",
        title: "Control and Coordination",
        discipline: "Biology",
        summary: "Nervous and endocrine systems in humans and plants. Details neuron structure, synapse transmission, reflex arcs, brain anatomy, plant tropisms, and endocrine hormones.",
        keyConcepts: [
          "Structure of a neuron and chemical transmission across synapse",
          "Reflex arc pathway: receptor to sensory neuron to effector",
          "Plant hormones: auxins, gibberellins, cytokinins, abscisic acid",
          "Endocrine glands: pituitary, thyroid, pancreas, adrenal functions"
        ],
        sampleQuestion: "How does phototropism occur in the stem of a growing plant?"
      },
      {
        id: "how-do-organisms-reproduce",
        title: "How do Organisms Reproduce",
        discipline: "Biology",
        summary: "Asexual reproduction methods in single-celled organisms, sexual reproduction in flowering plants, and the human reproductive systems along with reproductive health and contraception.",
        keyConcepts: [
          "Fission, budding, spore formation, and regeneration",
          "Pollination (self vs cross) and double fertilization in angiosperms",
          "Male and female human reproductive anatomy",
          "Contraceptive methods: barrier, chemical, hormonal, and surgical"
        ],
        sampleQuestion: "What is the difference between pollination and fertilization in plants?"
      },
      {
        id: "heredity-and-evolution",
        title: "Heredity and Evolution",
        discipline: "Biology",
        summary: "Mechanisms of inheritance, Gregor Mendel's monohybrid and dihybrid cross experiments, dominant and recessive alleles, and sex determination in human offspring.",
        keyConcepts: [
          "Mendel's laws of segregation and independent assortment",
          "Genotypic vs phenotypic ratio in monohybrid crosses",
          "Chromosomal sex determination in humans (XX vs XY)",
          "Variations and evolutionary adaptation mechanisms"
        ],
        sampleQuestion: "How is the sex of a child determined genetically in human beings?"
      },
      {
        id: "light-reflection-and-refraction",
        title: "Light: Reflection and Refraction",
        discipline: "Physics",
        summary: "Ray optics fundamentals: reflection by spherical mirrors, mirror formula, magnification, refraction through rectangular glass slab, Snell's law, refractive index, and lens formula.",
        keyConcepts: [
          "Concave and convex mirror ray diagrams and image formations",
          "Mirror formula 1/f = 1/v + 1/u and sign conventions",
          "Laws of refraction and Snell's constant ratio sin(i)/sin(r)",
          "Lens formula 1/f = 1/v - 1/u and optical power in diopters"
        ],
        sampleQuestion: "Why is a convex mirror preferred as a rear-view mirror in vehicles?"
      },
      {
        id: "the-human-eye-and-colorful-world",
        title: "The Human Eye and the Colorful World",
        discipline: "Physics",
        summary: "Structure of human eye, accommodation power, defects of vision (myopia, hypermetropia, presbyopia) and corrections, prism dispersion, rainbow formation, and atmospheric refraction.",
        keyConcepts: [
          "Function of ciliary muscles and near point of distinct vision",
          "Myopia correction with concave lens vs hypermetropia with convex",
          "Dispersion of white light through glass prism into VIBGYOR",
          "Twinkling of stars and advance sunrise / delayed sunset reasons"
        ],
        sampleQuestion: "Why does the sky appear blue to an observer on Earth but dark to an astronaut in space?"
      },
      {
        id: "electricity",
        title: "Electricity",
        discipline: "Physics",
        summary: "Electric current, potential difference, Ohm's law, resistance factors, series and parallel circuits, Joule's law of heating, and electric power formulas.",
        keyConcepts: [
          "Ohm's law V = IR and V-I characteristics graph",
          "Factors affecting resistance: length, area, resistivity",
          "Equivalent resistance in series (R1 + R2) and parallel (1/R1 + 1/R2)",
          "Electric heating effect H = I²Rt and power P = VI = I²R = V²/R"
        ],
        sampleQuestion: "Why are domestic electric appliances connected in parallel rather than series?"
      },
      {
        id: "magnetic-effects-of-electric-current",
        title: "Magnetic Effects of Electric Current",
        discipline: "Physics",
        summary: "Magnetic field lines around straight conductors and solenoids, Right Hand Thumb rule, Fleming's Left Hand rule, electric motors, and domestic electric circuits.",
        keyConcepts: [
          "Properties of magnetic field lines and magnetic dipole",
          "Right-hand thumb rule and solenoid electromagnet design",
          "Fleming's left-hand rule for magnetic Lorentz force",
          "Function of earth wire, fuse, and short circuit safety"
        ],
        sampleQuestion: "State Fleming's Left Hand Rule and where it is applied."
      }
    ]
  },
  "9": {
    grade: "Grade 9",
    subject: "Science",
    chapters: [
      {
        id: "matter-in-our-surroundings",
        title: "Matter in Our Surroundings",
        discipline: "Chemistry",
        summary: "Characteristics of particles of matter, solid, liquid, gas states, effect of temperature and pressure, latent heat of fusion and vaporization, and evaporation factors.",
        keyConcepts: ["Brownian motion and diffusion", "Latent heat and Kelvin temperature scale", "Evaporation causes cooling phenomenon", "Sublimation in camphor and ammonium chloride"],
        sampleQuestion: "Why does water kept in an earthen pot (matka) become cool during summer?"
      },
      {
        id: "the-fundamental-unit-of-life",
        title: "The Fundamental Unit of Life: Cell",
        discipline: "Biology",
        summary: "Discovery of cells by Robert Hooke, prokaryotic vs eukaryotic cells, cell membrane osmosis, cell wall, nucleus, and organelles: mitochondria, plastids, endoplasmic reticulum, Golgi apparatus, lysosomes.",
        keyConcepts: ["Diffusion and osmosis across semipermeable membrane", "Hypotonic, isotonic, hypertonic solution effects on plant cells", "Mitochondria as powerhouses and ATP synthesis", "Lysosomes as suicide bags containing digestive enzymes"],
        sampleQuestion: "What would happen to the life of a cell if there was no Golgi apparatus?"
      },
      {
        id: "motion",
        title: "Motion",
        discipline: "Physics",
        summary: "Distance vs displacement, uniform and non-uniform motion, speed, velocity, acceleration, distance-time and velocity-time graphs, and derivation of three equations of motion.",
        keyConcepts: ["Equations: v = u + at, s = ut + ½at², v² = u² + 2as", "Area under v-t graph represents displacement", "Slope of distance-time graph represents speed", "Uniform circular motion and centripetal acceleration"],
        sampleQuestion: "Can an object have zero displacement even if it has moved through a distance? Give an example."
      },
      {
        id: "force-and-laws-of-motion",
        title: "Force and Laws of Motion",
        discipline: "Physics",
        summary: "Balanced and unbalanced forces, Newton's first law of motion (inertia), second law of motion (momentum and F = ma), and third law of action-reaction with conservation of momentum.",
        keyConcepts: ["Inertia of rest, motion, and direction", "Mathematical formulation of Newton's second law F = dp/dt = ma", "Action and reaction pair acting on different bodies", "Recoil velocity of a gun and rocket propulsion principles"],
        sampleQuestion: "Why does an athlete run some distance before taking a long jump?"
      },
      {
        id: "gravitation",
        title: "Gravitation",
        discipline: "Physics",
        summary: "Universal law of gravitation, gravitational constant G, acceleration due to gravity g, mass vs weight, thrust and pressure, Archimedes' principle, and relative density.",
        keyConcepts: ["Formula F = G(m1·m2)/d² and its universal significance", "Value of g on Earth vs Moon (g_moon = 1/6 g_earth)", "Buoyant force and floatation condition", "Archimedes principle applications in lactometers and hydrometers"],
        sampleQuestion: "Why is it easier to swim in sea water than in river water?"
      }
    ]
  },
  "8": {
    grade: "Grade 8",
    subject: "Science",
    chapters: [
      {
        id: "crop-production-and-management",
        title: "Crop Production and Management",
        discipline: "Biology",
        summary: "Agricultural practices: soil preparation, sowing, manure and fertilizers, modern drip irrigation vs sprinkler, harvesting, and grain storage techniques.",
        keyConcepts: ["Kharif crops vs Rabi crops with seasonal examples", "Manure organic benefits vs chemical fertilizers", "Drip irrigation water conservation benefits", "Nitrogen fixation by Rhizobium bacteria in leguminous plants"],
        sampleQuestion: "Differentiate between manure and fertilizers with examples."
      },
      {
        id: "microorganisms-friend-and-foe",
        title: "Microorganisms: Friend and Foe",
        discipline: "Biology",
        summary: "Classification into bacteria, fungi, protozoa, algae, viruses. Commercial uses of yeast, fermentation, antibiotics, vaccines, pathogens, and food preservation.",
        keyConcepts: ["Fermentation process discovered by Louis Pasteur", "Antibiotic action and penicillin discovery", "Vaccination and immune memory response", "Nitrogen cycle steps and atmospheric balance"],
        sampleQuestion: "How do vaccines work inside the human body to protect against diseases?"
      },
      {
        id: "force-and-pressure",
        title: "Force and Pressure",
        discipline: "Physics",
        summary: "Contact forces (muscular, friction) and non-contact forces (magnetic, electrostatic, gravitational). Definition of pressure P = Force / Area, and atmospheric pressure.",
        keyConcepts: ["Push or pull interaction between two objects", "Contact vs non-contact force examples", "Pressure formula and why sharp knives cut better than blunt knives", "Liquid pressure increases with depth"],
        sampleQuestion: "Why do porters place a round piece of cloth on their heads when carrying heavy loads?"
      },
      {
        id: "friction",
        title: "Friction",
        discipline: "Physics",
        summary: "Factors affecting friction, static, sliding, and rolling friction, friction as a necessary evil, and methods of increasing or reducing friction (lubricants, ball bearings, fluid drag).",
        keyConcepts: ["Microscopic irregularities causing interlocking", "Rolling friction is smaller than sliding and static friction", "Frictional wear and tear vs ability to walk and brake", "Streamlined shapes to reduce fluid friction in airplanes and fish"],
        sampleQuestion: "Why are the soles of shoes and tires of cars treaded?"
      }
    ]
  }
};
