// --- 1. DATOS ESTÁTICOS Y CONFIGURACIÓN ---
// Define la fuente de datos completa de tus artículos.
// Cada objeto debe tener la misma información que antes (descripción, categoría, imagen).
const ALL_ARTICLES = [
{ category:"Mujer", description:"Chamarra Juvenil", idx:"1", status:"disponible", marca:"", talla:"Grande", precio:"250" },

{ category:"Mujer", description:"Vestido de Tirantes", idx:"2", status:"disponible", marca:"", talla:"34" },

{ category:"Hombre", description:"Saco Azul Marino Caballero", idx:"3", status:"disponible", marca:"Bagliani", talla:"37", precio:"400" },

{ category:"Hombre", description:"Saco Verde Caballero", idx:"4", status:"disponible", marca:"Cavalieri", talla:" 38R Cintura 32", precio:"300" },

{ category:"Hombre", description:"Camisa Amarilla Caballero", idx:"5", status:"disponible", marca:"", talla:"Mediana", precio:"80" },

{ category:"Mujer", description:"Vestido Negro", idx:"6", status:"disponible", marca:" ", talla:"Mediana" },

{ category:"Hombre", description:"Camisa Azul Caballero", idx:"7", status:"disponible", marca:"Forza", talla:" 40|16", precio:"200" },

{ category:"Hombre", description:"Camisa Rayda Caballero", idx:"8", status:"disponible", marca:" ", talla:"Mediana", precio:"150" },

{ category:"Mujer", description:"Abrigo Beige sin manga Dama", idx:"9", status:"disponible", marca:" Things Comtempo", talla:"Mediana" },

{ category:"Mujer", description:"Sueter Verde con Blanco Dama", idx:"10", status:"disponible", marca:" Mileore", talla:"Ch" },

{ category:"nino", description:"Sueter Verde con manga Niño", idx:"11", status:"disponible", marca:"Gymboree", talla:"3" },

{ category:"nino", description:"Sueter verde con manga Niño", idx:"12", status:"disponible", marca:" Crazy 8", talla:" 28" },

{ category:"nino", description:"Chamarra Azul Niño", idx:"13", status:"disponible" },

{ category:"Mujer", description:"Playera Gris Nueva", idx:"14", status:"disponible", marca:" Optima", talla:" Mediana" },

{ category:"Mujer", description:"Playera Rosa Nueva", idx:"15", status:"disponible", marca:" Optima", talla:" Mediana" },

{ category:"Mujer", description:"Playera Roja Nueva", idx:"16", status:"disponible", marca:" Action Gear", talla:" Ch" },

{ category:"Mujer", description:" Playera supourt", idx:"17", status:"disponible", marca:" action gear", talla:" G" },

{ category:"Mujer", description:" Playera verde", idx:"18", status:"disponible", marca:" action gear", talla:" G" },

{ category:"Mujer", description:" Playera amarilla", idx:"19", status:"disponible", marca:" preferida", talla:" C" },

{ category:"Mujer", description:" Playera supourt", idx:"20", status:"disponible", marca:" action gear", talla:" G" },

{ category:"Mujer", description:"Pantalon de mezclillla", idx:"21", status:"disponible", marca:" JONES", talla:" 32" },

{ category:"Mujer", description:" Falda", idx:"22", status:"disponible", marca:" MNG Jeans", talla:" 28" },

{ category:"Mujer", description:" Pantalon marron", idx:"23", status:"disponible", marca:" PRETTY LITTLE THINGS", talla:" USA 12" },

{ category:"Mujer", description:" Pantalon de pana color chedron", idx:"24", status:"disponible", marca:" CHESTER ROCK", talla:" 34" },

{ category:"Mujer", description:" Pantalon rojo", idx:"25", status:"disponible", marca:" VANITY", talla:" 32" },

{ category:"Mujer", description:" Pantalon azul marino", idx:"26", status:"disponible", marca:" IVONE", talla:"  30" },

{ category:"Mujer", description:" Pantalon fushia", idx:"27", status:"disponible", marca:" VINCE CAMUTO", talla:"34" },

{ category:"Mujer", description:" Pantalon rosa", idx:"28", status:"disponible", marca:" JULIO", talla:" 32" },

{ category:"Mujer", description:"Pantalon mezclilla acampanado", idx:"29", status:"disponible", marca:" ALEXIS", talla:" 34" },

{ category:"Mujer", description:" jump sut", idx:"30", status:"disponible", marca:" ALEXIS Collection", talla:" 32" },

{ category:"Mujer", description:" Blusa vino", idx:"31", status:"disponible", marca:" ", talla:"32" },

{ category:"Mujer", description:" Blusa morada", idx:"32", status:"disponible", marca:" Izanami", talla:" 34" },

{ category:"Mujer", description:" Blusa hueso", idx:"33", status:"disponible", marca:" Mango Suit", talla:" M", precio:" 30" },

{ category:"Mujer", description:" Blusa estanpada verde", idx:"34", status:"disponible", marca:"", talla:"30", precio:"30" },

{ category:"Mujer", description:" Blusa rosa", idx:"35", status:"disponible", marca:" Wilol Fable", talla:" Grande", precio:" 30" },

{ category:"Mujer", description:"  Blusa estampada morado con rosa", idx:"36", status:"disponible", marca:"", talla:"30", precio:"100" },

{ category:"Mujer", description:"   Camisa de cuadros rosa", idx:"37", status:"disponible", marca:" GUESS Los Angeles", talla:" G", precio:" 100" },

{ category:"Mujer", description:" Blusa negra cuadros", idx:"38", status:"disponible", marca:"self steem", talla:" C", precio:" 50" },

{ category:"Mujer", description:" Blusa marino estampada", idx:"39", status:"disponible", marca:" ", talla:" 28", precio:"50" },

{ category:"Mujer", description:" Blusa Blanca", idx:"40", status:"disponible", marca:"", talla:"G", precio:"30" },

{ category:"Mujer", description:" Blusa estampada corazones", idx:"41", status:"disponible", marca:" Mutante", talla:"30", precio:"50" },

{ category:"Mujer", description:"Bluson", idx:"42", status:"disponible", marca:" Express", talla:"G", precio:"30" },

{ category:"Mujer", description:" Blusa azul estampada con olanes manga larga", idx:"43", status:"disponible", marca:" ", talla:"30", precio:"120" },

{ category:"Mujer", description:" Sudadera gris estampada con cierre y gorro", idx:"44", status:"disponible", marca:" aeropostale", talla:" 14", precio:"100" },

{ category:"Mujer", description:"Blusa amarilla estampada manga larga", idx:"45", status:"disponible", marca:" ", talla:"32", precio:"50" },

{ category:"Mujer", description:"Blusa negra estampada con olanes", idx:"46", status:"disponible", marca:" LizClaiborne newyoork", talla:"32", precio:"50" },

{ category:"Mujer", description:" Blusa estampada con hebilla", idx:"47", status:"disponible", marca:" Alexis", talla:"M", precio:"50" },

{ category:"Mujer", description:" Blusa plateada manga larga con corbata", idx:"48", status:"disponible", marca:" ", talla:"30", precio:"150" },

{ category:"Mujer", description:" Blusa gris manga larga", idx:"49", status:"disponible", marca:" APT .9", talla:" G", precio:" 50" },

{ category:"Mujer", description:" Bluson gris rayado con manga larga", idx:"50", status:"disponible", precio:"30" },

{ category:"Mujer", description:"Bluson Rayado estampado", idx:"51", status:"disponible" },

{ category:"Mujer", description:"Bluson gris con manga larga", idx:"52", status:"disponible", marca:"MAP", talla:"32" },

{ category:"Mujer", description:"Saco rosa", idx:"53", status:"disponible", marca:" Feruni", talla:" 32", precio:"30" },

{ category:"Mujer", description:" Saco cafe", idx:"54", status:"disponible", marca:" Pardueles", talla:" 30", precio:"30" },

{ category:"Mujer", description:" Saco Azul", idx:"55", status:"disponible", marca:" Pedro Loredo", talla:" 28", precio:"80" },

{ category:"Mujer", description:" Saco multicolor", idx:"56", status:"disponible", marca:" Karen Kein", talla:" 30", precio:"50" },

{ category:"Mujer", description:" Saco multicolor", idx:"57", status:"disponible", marca:" ", talla:"28", precio:"100" },

{ category:"Mujer", description:" Saco negro", idx:"58", status:"disponible", marca:" Julio", talla:" 34", precio:"100" },

{ category:"Mujer", description:"Saco gris", idx:"59", status:"disponible", marca:" Amori", talla:"34" },

{ category:"Mujer", description:" Chamarra verde olivo con cierre", idx:"60", status:"disponible", marca:" Mango Casual Sports Wear", talla:" 28", precio:" 100" },

{ category:"Mujer", description:" Abrigo cafe a cuadros", idx:"61", status:"disponible", marca:" JJM Glamur a tu estilo", talla:" M", precio:"200" },

{ category:"Mujer", description:" Saco a cuadro", idx:"62", status:"disponible", marca:"HOLLISTER", talla:" M", precio:"100" },

{ category:"Mujer", description:"Saco rojo", idx:"63", status:"disponible", marca:" Pardueles", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Suéter multicolor Dama", idx:"64", status:"disponible", marca:" ", talla:"Ch", precio:"50" },

{ category:"Mujer", description:"Saco negro con beige Dama", idx:"65", status:"disponible", marca:" FOLEYS", talla:" 28", precio:"150" },

{ category:"Mujer", description:" Saco gris con cinturon", idx:"66", status:"disponible", marca:" ", talla:"28", precio:"60" },

{ category:"Mujer", description:" Saco rosa oscuro", idx:"67", status:"disponible", marca:" IVONNE PETITE", talla:" 6", precio:"80" },

{ category:"Mujer", description:" Sudadera con cierre gris", idx:"68", status:"disponible", marca:" solaris", talla:" C", precio:"100" },

{ category:"Mujer", description:" Saco Dama negro", idx:"69", status:"disponible", marca:" Massimo Dutt", talla:" 30", precio:"50" },

{ category:"Mujer", description:" Abrigo vino", idx:"70", status:"disponible", marca:" ZARA BOYS", talla:"28", precio:"100" },

{ category:"Mujer", description:" Sueter cerrado cuello V", idx:"71", status:"disponible", marca:" ", talla:" 30", precio:"50" },

{ category:"Mujer", description:"Suéter largo con solapa y hebilla verde manzana", idx:"72", status:"disponible", marca:"", talla:"Mediana" },

{ category:"Mujer", description:"Saco plateado estampado", idx:"73", status:"disponible", marca:"", talla:"Ch", precio:"100" },

{ category:"Mujer", description:" Saco Dama vino estampado", idx:"74", status:"disponible", marca:"", talla:"30", precio:"80" },

{ category:"Mujer", description:" Abrigo Dama largo", idx:"75", status:"disponible", marca:" Vanity", talla:" Ch", precio:"120" },

{ category:"Mujer", description:" Saco negro de rayas de gis", idx:"76", status:"disponible", marca:" Mango", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Saco Mamey ", idx:"77", status:"disponible", marca:" Portada", talla:" 30", precio:"80" },

{ category:"Mujer", description:"Suerte largo naranja estampado", idx:"78", status:"disponible", marca:" Grifflin Paris", talla:" M", precio:" 80" },

{ category:"Mujer", description:" Chamarra palo de rosa con gorro", idx:"79", status:"disponible", marca:"Greenlander", talla:"28", precio:"100" },

{ category:"Mujer", description:" Saco Dama  a cuadros morado con negro", idx:"80", status:"disponible", marca:" IVONE", talla:" 28", precio:"100" },

{ category:"Mujer", description:"Chamarra de mezclilla", idx:"81", status:"disponible", marca:"American Eagle", talla:"28", precio:"50" },

{ category:"Mujer", description:" Saco largo Dama color camello", idx:"82", status:"disponible", marca:" vanity", talla:"30", precio:"150" },

{ category:"Mujer", description:" Abrigo Dama marino con gorro", idx:"83", status:"disponible", marca:" Zara Basic", talla:" 26", precio:" 120" },

{ category:"Mujer", description:" Abrigo marino oscuro Dama sin gorro", idx:"84", status:"disponible", marca:" Massimo Duttin", talla:" 30", precio:" 100" },

{ category:"Mujer", description:" Abrigo Dama azul turquesa sin gorro", idx:"85", status:"disponible", marca:"Ivonne", talla:" Ch", precio:"100" },

{ category:"Mujer", description:" Abrigo Dama estampado cafe con amarillo", idx:"86", status:"disponible", marca:" Ivonne", talla:" M", precio:" 100" },

{ category:"Mujer", description:" Chaleco Dama cuello alto verde manzana", idx:"87", status:"disponible", marca:" YALG", talla:"Ch", precio:"100" },

{ category:"Mujer", description:"Blusa manga larga de rayas", idx:"88", status:"disponible", marca:" Vanity", talla:" 32", precio:"100" },

{ category:"Mujer", description:" Vestido gris", idx:"89", status:"disponible", marca:" Zara Basic", talla:" 32", precio:" 100" },

{ category:"Mujer", description:" Vestido color magenta", idx:"90", status:"disponible", marca:" Ivonne Petite", talla:" 30", precio:" 150" },

{ category:"Mujer", description:" Vestido rosa", idx:"91", status:"disponible", marca:" Julio", talla:" 4", precio:"200" },

{ category:"Mujer", description:" Vestido fiusha", idx:"92", status:"disponible", marca:" Julio", talla:"4", precio:"200" },

{ category:"Mujer", description:" Vestido negro estampado manga corta", idx:"93", status:"disponible", marca:"Julio", talla:"32", precio:" 200" },

{ category:"Mujer", description:" Vestido Azul Rey", idx:"94", status:"disponible", marca:" Moon river", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Vestido marino manga larga", idx:"95", status:"disponible", marca:"Julio", talla:"32", precio:"200" },

{ category:"Mujer", description:"  Vestido tipo sueter", idx:"96", status:"disponible", marca:" Alexis", talla:" M", precio:" 80" },

{ category:"Mujer", description:" Vestido manga corta negro estampado de flores", idx:"97", status:"disponible", marca:" Julio", talla:"28", precio:"200" },

{ category:"Mujer", description:"Vestido negro manga 3 4", idx:"98", status:"disponible", marca:" Julio", talla:" 28", precio:"200" },

{ category:"Mujer", description:" Vestido tri color", idx:"99", status:"disponible", marca:" Pierre Christine", talla:" 32", precio:"120" },

{ category:"Mujer", description:" Vestido negro estampado de flores", idx:"100", status:"disponible", marca:" ExCh", talla:"Desigual", precio:"150" },

{ category:"Mujer", description:" Vestido estampado con flores", idx:"101", status:"disponible", marca:" Sostanza", talla:" M", precio:"100" },

{ category:"Mujer", description:" Vestido multi color", idx:"102", status:"disponible", marca:" Robbie Ree", talla:" 28", precio:"150" },

{ category:"Mujer", description:" Vestido estampado con rosas", idx:"103", status:"disponible", marca:" Julio", talla:"28", precio:" 200" },

{ category:"Mujer", description:" Vestido marino", idx:"104", status:"disponible", marca:" Julio", talla:" 30", precio:"200" },

{ category:"Mujer", description:" Vestido naranja", idx:"105", status:"disponible", marca:" Julio", talla:"28", precio:"200" },

{ category:"Mujer", description:" Vestido morado", idx:"106", status:"disponible", marca:" Julio", talla:"32", precio:" 200" },

{ category:"Mujer", description:" Vestido corto", idx:"107", status:"disponible", marca:" ", talla:"26", precio:"80" },

{ category:"Mujer", description:"Vestido azul plunbago de manga larga con bolsas", idx:"108", status:"disponible", marca:" Savile Row Co London", talla:" 32", precio:"150" },

{ category:"Mujer", description:"Vestido negro", idx:"109", status:"disponible", marca:" Julio", talla:" 34", precio:"150" },

{ category:"Mujer", description:" Vestido negro de rayos", idx:"110", status:"disponible", marca:" Julio", talla:" 32", precio:"200" },

{ category:"Mujer", description:" Vestido beige con flores cafes", idx:"111", status:"disponible", marca:"Mango", talla:" 32", precio:"120" },

{ category:"Mujer", description:" Vestido azul con flores", idx:"112", status:"disponible", marca:" Chaps", talla:" M", precio:"200" },

{ category:"Mujer", description:" Vestido verde olivo manga larga calado", idx:"113", status:"disponible", marca:" Just me", talla:"32", precio:"200" },

{ category:"Mujer", description:" Vestido verde botella con flores blancas con negro", idx:"114", status:"disponible", marca:" Julio", talla:" 32", precio:"200" },

{ category:"Mujer", description:" Vestido amarillo", idx:"115", status:"disponible", marca:" Julio", talla:" 32", precio:"200" },

{ category:"Mujer", description:" Vestido azul cielo", idx:"116", status:"disponible", marca:" Julio", talla:" 28", precio:"200" },

{ category:"Mujer", description:" Vestido negro con frente estampado animal print", idx:"117", status:"disponible", marca:" Julio", talla:" 30", precio:"200" },

{ category:"Mujer", description:" Vestido azul rey", idx:"118", status:"disponible", marca:" Julio", talla:"32", precio:"200" },

{ category:"Mujer", description:"Vestido palo de rosa", idx:"119", status:"disponible", marca:" Julio", talla:" 20", precio:"200" },

{ category:"Mujer", description:"Vestido marino", idx:"120", status:"disponible", marca:"Julio", talla:"28", precio:"200" },

{ category:"Mujer", description:"  Vestido negro manga larga", idx:"121", status:"disponible", marca:" Julio", talla:" 28", precio:"200" },

{ category:"Mujer", description:"  Vestido bicolor blanco con negro", idx:"122", status:"disponible", marca:" Julio", talla:"32", precio:"200" },

{ category:"Mujer", description:" Vestido artesanal oaxaqueño original manga corta estampado con flores", idx:"123", status:"disponible", marca:" ", talla:"32", precio:"200" },

{ category:"Mujer", description:"  Vestido artesanal oaxaqueño original estampado con flores manga 3 4", idx:"124", status:"disponible", marca:" ", talla:"32", precio:"200" },

{ category:"Hombre", description:" Sudadera negra con felpa sin bolsos ni gorro Caballero", idx:"125", status:"disponible", marca:"  Rewind", talla:" Ch", precio:"150" },

{ category:"Hombre", description:" Pantalon Caballero de pana gris", idx:"126", status:"disponible", marca:" Dockers", talla:" 31x32", precio:" 200" },

{ category:"Hombre", description:" Pantalon Caballero gris de casimir", idx:"127", status:"disponible", marca:" Reaction Kenneth Cole", talla:" 34x32", precio:" 200" },

{ category:"Hombre", description:" Pantalon Caballero  de mezclilla", idx:"128", status:"disponible", marca:" Old Navy", talla:" 36x32", precio:" 200" },

{ category:"Hombre", description:"Pantalon de mezclilla Caballero", idx:"129", status:"disponible", marca:" Lee", talla:" 34", precio:"200" },

{ category:"Hombre", description:" Pantalon de mezclilla Caballero", idx:"130", status:"disponible", marca:" Levis Original", talla:" 34x32", precio:" 250" },

{ category:"Hombre", description:" Pantalon de mezclilla Caballero", idx:"131", status:"disponible", marca:" Levis Original", talla:" 32x32", precio:" 250" },

{ category:"Hombre", description:" Pantalon marino Caballero de vestir", idx:"132", status:"disponible", marca:"", talla:"34", precio:"200" },

{ category:"Hombre", description:" Pantalon de mezclilla Caballero", idx:"133", status:"disponible", marca:" Lee", talla:" 34", precio:" 200" },

{ category:"Hombre", description:"Pantalon de mezclilla Caballero", idx:"134", status:"disponible", marca:" Denim 360", talla:" 36x32", precio:" 200" },

{ category:"Hombre", description:" Pantalon de mezclilla Caballero", idx:"135", status:"disponible", marca:" Gap 1969", talla:" 34x30", precio:"250" },

{ category:"Hombre", description:" Pantalon de mezclilla Caballero", idx:"136", status:"disponible", marca:" Hilfiger Denim", talla:" 36", precio:" 200" },

{ category:"Hombre", description:" Pantalon Caballero", idx:"137", status:"disponible", marca:" Levis Original", talla:" 34x30", precio:" 250" },

{ category:"Hombre", description:"Pantalon de mezclilla Caballero", idx:"138", status:"disponible" },

{ category:"Mujer", description:"  Pantalon rojo Dama", idx:"139", status:"disponible", marca:" Ivonne", talla:" 32", precio:" 50" },

{ category:"Mujer", description:" Pantalon rosa Dama", idx:"140", status:"disponible", marca:" ", talla:"30", precio:"50" },

{ category:"Mujer", description:" Pantalon morado Dama", idx:"141", status:"disponible", marca:" Alexis Basics", talla:" 30", precio:"50" },

{ category:"Mujer", description:" Pantalon coral Dama", idx:"142", status:"disponible", marca:" Julio", talla:" 32", precio:" 50" },

{ category:"Mujer", description:" Pantalon azul marino Dama", idx:"143", status:"disponible", marca:" Julio", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Pantalon rayado negro Dama", idx:"144", status:"disponible", marca:" Marsel", talla:" 34", precio:"50" },

{ category:"Mujer", description:" Pantalon gris rayado Dama de vestir", idx:"145", status:"disponible", marca:" ", talla:"32", precio:"50" },

{ category:"Mujer", description:" Pantalon beige acampanado Dama", idx:"146", status:"disponible", marca:"", talla:"30", precio:" 100" },

{ category:"Mujer", description:" Pantalon gris haspeado Dama", idx:"147", status:"disponible", marca:" amori petite", talla:" 32", precio:" 70" },

{ category:"Mujer", description:" Pantalon  camel Dama", idx:"148", status:"disponible", marca:" Oop s Jeans", talla:" 31", precio:"150" },

{ category:"Mujer", description:" Pantalon negro Dama", idx:"149", status:"disponible", marca:" Julio", talla:" 28", precio:" 150" },

{ category:"Mujer", description:" Pantalon marino Dama", idx:"150", status:"disponible", marca:" Soho", talla:" M", precio:"100" },

{ category:"Mujer", description:" Pantalon marino Dama", idx:"151", status:"disponible", marca:" Ralph Lauren Golph", talla:" 32", precio:" 150" },

{ category:"Mujer", description:" Pantalon Negro de vestir Dama", idx:"152", status:"disponible", marca:" Julio", talla:"26", precio:"100" },

{ category:"Mujer", description:" Pantalon Rojo Dama", idx:"153", status:"disponible", marca:" Julio", talla:" 26", precio:" 100" },

{ category:"Mujer", description:" Pantalon Cafe de Vestir Dama", idx:"154", status:"disponible", marca:" Ivonne", talla:" 26", precio:"100" },

{ category:"Mujer", description:" Pantalon Cafe de Vestir Dama", idx:"155", status:"disponible", marca:" Julio", talla:" 26", precio:" 100" },

{ category:"Mujer", description:" Pantalon Negro de Vestir Dama", idx:"156", status:"disponible", marca:" Julio", talla:" 28", precio:" 100" },

{ category:"Mujer", description:" Pantalon Casual Beige con negro Dama", idx:"157", status:"disponible", marca:" Mango", talla:" Ch", precio:"80" },

{ category:"Mujer", description:"Pantalon Gris Dama", idx:"158", status:"disponible", marca:" Levis", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Pantalon de mezclilla Dama", idx:"159", status:"disponible", marca:" Kut", talla:" 32", precio:" 100" },

{ category:"Mujer", description:" Pantalon de mezclilla Dama", idx:"160", status:"disponible", marca:" Guess Jeans", talla:" 26", precio:" 100" },

{ category:"Mujer", description:" Pantalon de mezclilla Dama", idx:"161", status:"disponible", marca:" Gap", talla:" 28", precio:"100" },

{ category:"Mujer", description:" Vermuda marino Dama", idx:"162", status:"disponible", marca:" Optima", talla:" 32", precio:" 60" },

{ category:"nina", description:" Pantalon mezclilla Niña", idx:"163", status:"disponible", marca:" Adrenaline", talla:" 12", precio:" 50" },

{ category:"nina", description:"Pantalon Mezclilla Niña", idx:"164", status:"disponible", marca:" ", talla:"14", precio:"50" },

{ category:"Mujer", description:" Vermuda Blanca Dama", idx:"165", status:"disponible", marca:" Banana Republic", talla:" 6", precio:" 50" },

{ category:"Mujer", description:" Vermuda beige Dama", idx:"166", status:"disponible", marca:" Ralph Lauren", talla:" 6", precio:" 100" },

{ category:"nina", description:" Vermuda hueso Niña", idx:"167", status:"disponible", marca:" So", talla:" 14", precio:"100" },

{ category:"nino", description:" Playera Azul claro Niño", idx:"168", status:"disponible" },

{ category:"nino", description:" Playera Tigre Blanco Niño", idx:"169", status:"disponible", marca:" ", talla:"4" },

{ category:"nino", description:" Saco Gris Niño", idx:"170", status:"disponible", marca:"", talla:"2" },

{ category:"nino", description:" Piyama azul niño", idx:"171", status:"disponible", marca:"", talla:"4" },

{ category:"nino", description:"Playera con mangas Niño", idx:"172", status:"disponible", marca:" ", talla:"4" },

{ category:"nino", description:"Camisa azul Niño", idx:"173", status:"disponible", marca:" ", talla:"4" },

{ category:"nino", description:" Playera nike Niño", idx:"174", status:"disponible", marca:" ", talla:"4" },

{ category:"nino", description:" Pantalon mostaza Niño", idx:"175", status:"disponible", marca:"", talla:"4" },

{ category:"nino", description:"  Camisa Blanca Niño", idx:"176", status:"disponible", marca:"", talla:"10" },

{ category:"nino", description:" Playera amarilla con manga Niño", idx:"177", status:"disponible", marca:" ", talla:"10" },

{ category:"nino", description:" Piyama verde Niño", idx:"178", status:"disponible", marca:" ", talla:"10" },

{ category:"nino", description:" Piyama de rayas azul claro Niño", idx:"179", status:"disponible", marca:" ", talla:"10" },

{ category:"nino", description:" Polo blanco Niño", idx:"180", status:"disponible", marca:" ", talla:"10" },

{ category:"nino", description:" Playera verde con oso cafe Niño", idx:"181", status:"disponible", marca:" ", talla:"10" },

{ category:"nino", description:" Playera con manga larga amarilla Niño", idx:"182", status:"disponible", marca:"", talla:"10" },

{ category:"nino", description:" Piyama Azul marino Niño", idx:"183", status:"disponible", marca:" ", talla:"10" },

{ category:"nina", description:" Falda morada nina", idx:"184", status:"disponible", marca:" ", talla:"6" },

{ category:"nino", description:"  Camisa mas Pantalon mamey Niño", idx:"185", status:"disponible", marca:" ", talla:"3" },

{ category:"nino", description:" Camisa blanca Niño", idx:"186", status:"disponible", marca:" ", talla:"5" },

{ category:"nino", description:" Playera azul con manga largar Niño", idx:"187", status:"disponible", marca:" ", talla:"8" },

{ category:"nino", description:" Pantalon de Pana gris Niño", idx:"188", status:"disponible", marca:" ", talla:"18 24 month" },

{ category:"nino", description:" Chaleco azul marino Niño", idx:"189", status:"disponible", marca:" ", talla:"2 anos" },

{ category:"nino", description:" Polo amarillo Niño", idx:"190", status:"disponible", marca:" ", talla:"2 anos" },

{ category:"nino", description:" Playera blanca Niño", idx:"191", status:"disponible", marca:"", talla:"4" },

{ category:"nino", description:" Playera verde Niño", idx:"192", status:"disponible", marca:"", talla:"2" },

{ category:"nino", description:" Playera blanca Niño", idx:"193", status:"disponible", marca:" Optima", talla:" 10" },

{ category:"nino", description:" Polo azul marino Niño", idx:"194", status:"disponible", marca:" ", talla:"3A" },

{ category:"nino", description:" Pantalon piyama gris Niño", idx:"195", status:"disponible", marca:" ", talla:" 2A" },

{ category:"nino", description:" Pantalon azul piyama Niño", idx:"196", status:"disponible", marca:"", talla:"2A" },

{ category:"nino", description:" Pantalon amarillo Niño", idx:"197", status:"disponible", marca:"", talla:"2A" },

{ category:"nino", description:" Pantalon mostaza Niño", idx:"198", status:"disponible", marca:" ", talla:"2A" },

{ category:"nino", description:" Playera Niño", idx:"199", status:"disponible", marca:"", talla:"2A" },

{ category:"nino", description:" Playera Niño", idx:"200", status:"disponible", marca:"", talla:"2A" },

{ category:"nino", description:" sueter de rayas Niño", idx:"201", status:"disponible", marca:" ", talla:"3" },

{ category:"nino", description:" Playera azul Niño", idx:"202", status:"disponible", marca:" ", talla:"3A" },

{ category:"nino", description:" Playera gris Niño", idx:"203", status:"disponible", marca:" ", talla:"3A" },

{ category:"nina", description:" Playera de manga corta gris nina", idx:"204", status:"disponible", marca:"", talla:"3A" },

{ category:"nina", description:" Sudadera de rayas azul nina", idx:"205", status:"disponible", marca:"", talla:"3A" }
];

const ITEMS_PER_PAGE = 6; // Cuántos elementos cargar por scroll
let currentPage = 0;
let articlesInDOM = 0; // Contador global de cuántos artículos están visibles

// --- 2. FUNCIONES PRINCIPALES DE CARGA Y RENDERIZADO ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar los primeros artículos al inicio
    loadArticles();
    
    // 2. Configurar el evento de scroll para la carga infinita
    window.addEventListener('scroll', handleInfiniteScroll);
});

/**
 * Genera el HTML de una tarjeta de artículo.
 * @param {object} article - El objeto de datos del artículo.
 * @returns {string} - La cadena HTML de la tarjeta.
 */
function createArticleHTML(article) {
    const statusText = article.status === 'disponible' ? 'Disponible' : 'Vendido';
    const articleId = article.idx.trim(); // Asume que 'article.idx' es el identificador único/número
    
    let html = `<div id="${articleId}" class="article-card" data-category="${article.category}">`;
    html += '<div class="image-container">';
    
    // **CORRECCIÓN CLAVE:** Inyectar el span del número de artículo aquí.
    // Usamos el ID del artículo como el contenido del número (como lo hacía tu initializeArticleNumbers).
    html+='<div class="loader"></div>';
    html += `<img src="Bazar_web_img_reducidas_webp/${articleId}.webp" alt="${article.description}" loading="lazy">`;
        html += `<span class="article-number">${articleId}</span>`; 
    html += '</div>';
    html += `<p class="description">${article.description}</p>`;
    html += `<ul class="details">`;
    
    if (article.marca !== undefined && article.marca !== null && article.marca !== "" && article.marca !== " ") {
        html += `<li><span class="label">Marca:</span> ${article.marca}</li>`;
    }
    if (article.talla !== undefined && article.talla !== null && article.talla !== "" && article.talla !== " ") {
        html += `<li><span class="label">Talla:</span> ${article.talla}</li>`;
    }
    if (article.precio !== undefined && article.precio !== null && article.precio !== "" && article.precio !== " ") {
        html += `<li><span class="label">Precio:</span> $${article.precio}</li>`;
    }
    
    // Aquí cambié la disponibilidad para usar 'article.status' si existe, si no usa 'disponible' como fallback
    html += `<div class="availability-status" data-status="${article.status || 'disponible'}">Disponibilidad: <span>${statusText}</span></div>`;
    html += '</ul>';
    html += '</div>';
    
    return html;
}

/**
 * Carga el siguiente conjunto de artículos en la página.
 * @param {boolean} [reset=false] - Si es true, reinicia el grid y los contadores.
 * @param {string} [filter='all'] - La categoría a filtrar.
 */
function loadArticles(reset = false, filter = 'all') {
    const articlesGrid = document.getElementById('articlesGrid');

    if (reset) {
        articlesGrid.innerHTML = ''; // Limpiar el grid
        currentPage = 0;
        articlesInDOM = 0;
    }

    const filteredArticles = ALL_ARTICLES.filter(article => 
        (filter === 'all' || article.category === filter)&&filterByInputText(article)
    );

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    if (startIndex >= filteredArticles.length) {
        return;
    }

    const articlesToLoad = filteredArticles.slice(startIndex, endIndex);

    let htmlContent = '';
    articlesToLoad.forEach(article => {
        htmlContent += createArticleHTML(article);
    });

    articlesGrid.insertAdjacentHTML('beforeend', htmlContent);

    // ⬇️ INICIALIZAR TODOS LOS NUEVOS WRAPPERS
    const newWrappers = articlesGrid.querySelectorAll(".image-container:not(.init)");
    newWrappers.forEach(wrapper => {
        wrapper.classList.add("init");
        initImageWrapper(wrapper);
    });

    currentPage++;
    articlesInDOM += articlesToLoad.length;
}


// --- 3. DETECCIÓN DE SCROLL ---

/**
 * Verifica si el usuario ha hecho scroll cerca del final de la página
 * y dispara la carga de más artículos.
 */
function handleInfiniteScroll() {
    // 1. Calcular si el scroll está cerca del final
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Margen de 300px antes del final
    if (scrollPosition >= documentHeight - 300) {
        // 2. Obtener el filtro de categoría activo
        const activeCategoryButton = document.querySelector('.category-menu .active');
        const activeCategory = activeCategoryButton ? activeCategoryButton.getAttribute('onclick').match(/'(.*?)'/)[1] : 'all';
        
        // 3. Cargar más artículos con el filtro actual
        loadArticles(false, activeCategory);
    }
}


// --- 4. FUNCIONALIDAD DE FILTRADO Y BÚSQUEDA ---

/**
 * Filtra los artículos al hacer clic en un botón de categoría.
 */
function filterByCategory(category, element) {
    // 1. Quitar la clase 'active' de todos los botones y añadirla al botón clicado
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    // 2. Limpiar la barra de búsqueda y el grid, y cargar los artículos filtrados.
    document.getElementById('searchInput').value = '';
    loadArticles(true, category); // Reinicia la carga con el filtro
}

/**
 * Filtra los artículos basándose en el texto introducido en la barra de búsqueda.
 * @param {object} article - El objeto de datos del artículo.
 * @returns {boolean} - True si el artículo coincide con el texto de búsqueda.
 */
function filterByInputText(article) {
    const inputEl = document.getElementById('searchInput');
    if (!inputEl) return true; // Si no hay input, no filtramos

    const filterText = inputEl.value.trim().toUpperCase();
    // Si el texto de búsqueda está vacío, dejamos pasar todos los artículos
    if (filterText === '') return true;

    const descriptionText = (article.description || '').toUpperCase();
    const numberText = String(article.idx || '').toUpperCase().trim();

    return descriptionText.includes(filterText) || numberText.includes(filterText);
}


function initImageWrapper(wrapper) {
    const img = wrapper.querySelector("img");
    const loader = wrapper.querySelector(".loader");

    if (!img) return;

    const finishLoad = () => {
        img.classList.add("loaded");
        wrapper.classList.add("loaded");
    };

    // Si la imagen ya está cargada (cache)
    if (img.complete) {
        finishLoad();
    } else {
        img.addEventListener("load", finishLoad, { once: true });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-container").forEach(initImageWrapper);
});
