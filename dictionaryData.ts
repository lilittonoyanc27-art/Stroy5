export interface DictionaryEntry {
  es: string;
  hy: string;
}

export interface DictionaryCategory {
  title: string;
  entries: DictionaryEntry[];
}

export const DICTIONARY_DATA: DictionaryCategory[] = [
  {
    title: "1. Աշխատանք փնտրելու համար",
    entries: [
      { es: "Busco trabajo en construcción.", hy: "Ես աշխատանք եմ փնտրում շինարարության ոլորտում։" },
      { es: "Tengo experiencia en construcción.", hy: "Ես շինարարության փորձ ունեմ։" },
      { es: "Puedo trabajar en una obra.", hy: "Ես կարող եմ աշխատել շինհրապարակում։" },
      { es: "Puedo empezar mañana.", hy: "Կարող եմ սկսել վաղը։" },
      { es: "Estoy disponible.", hy: "Ես ազատ եմ / պատրաստ եմ աշխատել։" },
      { es: "Tengo documentos.", hy: "Ես փաստաթղթեր ունեմ։" },
      { es: "No tengo documentos todavía.", hy: "Ես դեռ փաստաթղթեր չունեմ։" },
      { es: "¿Necesitan trabajadores?", hy: "Ձեզ աշխատողներ պե՞տք են։" },
      { es: "¿Cuánto pagan por día?", hy: "Օրը ինչքա՞ն եք վճարում։" },
      { es: "¿Cuánto pagan por hora?", hy: "Ժամը ինչքա՞ն եք վճարում։" }
    ]
  },
  {
    title: "2. Մասնագիտություններ",
    entries: [
      { es: "Soy albañil.", hy: "Ես քարագործ / շինարար եմ։" },
      { es: "Soy pintor.", hy: "Ես ներկարար եմ։" },
      { es: "Soy electricista.", hy: "Ես էլեկտրիկ եմ։" },
      { es: "Soy fontanero.", hy: "Ես սանտեխնիկ եմ։" },
      { es: "Soy soldador.", hy: "Ես եռակցող եմ։" },
      { es: "Soy carpintero.", hy: "Ես փայտագործ եմ։" },
      { es: "Soy ayudante.", hy: "Ես օգնական եմ։" },
      { es: "Soy obrero de construcción.", hy: "Ես շինարարության բանվոր եմ։" }
    ]
  },
  {
    title: "3. Շինհրապարակում",
    entries: [
      { es: "¿Dónde está la obra?", hy: "Որտե՞ղ է շինհրապարակը։" },
      { es: "Trabajo en una obra.", hy: "Ես աշխատում եմ շինհրապարակում։" },
      { es: "Hoy trabajo aquí.", hy: "Այսօր այստեղ եմ աշխատում։" },
      { es: "¿A qué hora empezamos?", hy: "Ժամը քանի՞սին ենք սկսում։" },
      { es: "¿A qué hora terminamos?", hy: "Ժամը քանի՞սին ենք ավարտում։" },
      { es: "¿Dónde dejo las herramientas?", hy: "Գործիքները որտե՞ղ թողնեմ։" },
      { es: "¿Qué tengo que hacer?", hy: "Ի՞նչ պետք է անեմ։" },
      { es: "No entiendo. ¿Puede repetir?", hy: "Չեմ հասկանում։ Կարո՞ղ եք կրկնել։" },
      { es: "Muéstrame, por favor.", hy: "Ցույց տվեք ինձ, խնդրում եմ։" }
    ]
  },
  {
    title: "4. Գործիքներ",
    entries: [
      { es: "el martillo", hy: "մուրճ" },
      { es: "el destornillador", hy: "պտուտակահան" },
      { es: "el taladro", hy: "դրել / գայլիկոն" },
      { es: "la sierra", hy: "սղոց" },
      { es: "la pala", hy: "բահ" },
      { es: "la escalera", hy: "սանդուղք" },
      { es: "el nivel", hy: "մակարդակաչափ" },
      { es: "la cinta métrica", hy: "չափման ժապավեն" },
      { es: "los guantes", hy: "ձեռնոցներ" },
      { es: "el casco", hy: "սաղավարտ" },
      { es: "Necesito un martillo.", hy: "Ինձ մուրճ է պետք։" },
      { es: "¿Dónde está el taladro?", hy: "Որտե՞ղ է գայլիկոնը։" },
      { es: "Dame la pala, por favor.", hy: "Տուր բահը, խնդրում եմ։" },
      { es: "Trae la escalera.", hy: "Բեր սանդուղքը։" }
    ]
  },
  {
    title: "5. Գործողություններ շինարարությունում",
    entries: [
      { es: "construir", hy: "կառուցել" },
      { es: "romper", hy: "կոտրել / քանդել" },
      { es: "cortar", hy: "կտրել" },
      { es: "medir", hy: "չափել" },
      { es: "pintar", hy: "ներկել" },
      { es: "limpiar", hy: "մաքրել" },
      { es: "cargar", hy: "բեռնել / տանել ծանր բան" },
      { es: "descargar", hy: "բեռնաթափել" },
      { es: "subir", hy: "բարձրացնել / բարձրանալ" },
      { es: "bajar", hy: "իջեցնել / իջնել" },
      { es: "arreglar", hy: "վերանորոգել" },
      { es: "instalar", hy: "տեղադրել" },
      { es: "Tengo que medir la pared.", hy: "Պետք է չափեմ պատը։" },
      { es: "Voy a pintar esta pared.", hy: "Ես ներկելու եմ այս պատը։" },
      { es: "Hay que limpiar aquí.", hy: "Այստեղ պետք է մաքրել։" },
      { es: "Ayúdame a cargar esto.", hy: "Օգնիր ինձ սա բարձրացնել / տանել։" }
    ]
  },
  {
    title: "6. Հրամաններ և կարճ ֆրազներ",
    entries: [
      { es: "Ven aquí.", hy: "Արի այստեղ։" },
      { es: "Ve allí.", hy: "Գնա այնտեղ։" },
      { es: "Trae esto.", hy: "Բեր սա։" },
      { es: "Lleva esto allí.", hy: "Տար սա այնտեղ։" },
      { es: "Espera un momento.", hy: "Սպասիր մի պահ։" },
      { es: "Hazlo despacio.", hy: "Դա արա դանդաղ։" },
      { es: "Hazlo rápido.", hy: "Դա արա արագ։" },
      { es: "Cuidado.", hy: "Զգույշ։" },
      { es: "Ten cuidado.", hy: "Զգույշ եղիր։" },
      { es: "No toques eso.", hy: "Դրան մի դիպչիր։" },
      { es: "Está pesado.", hy: "Ծանր է։" },
      { es: "Está roto.", hy: "Կոտրված է։" },
      { es: "Está listo.", hy: "Պատրաստ է։" }
    ]
  },
  {
    title: "7. Անվտանգություն",
    entries: [
      { es: "Necesito casco.", hy: "Ինձ սաղավարտ է պետք։" },
      { es: "Necesito guantes.", hy: "Ինձ ձեռնոցներ են պետք։" },
      { es: "Es peligroso.", hy: "Վտանգավոր է։" },
      { es: "Hay electricidad.", hy: "Էլեկտրականություն կա։" },
      { es: "No es seguro.", hy: "Անվտանգ չէ։" },
      { es: "Tengo cuidado.", hy: "Ես զգույշ եմ։" },
      { es: "Me he cortado.", hy: "Ես կտրվել եմ։" },
      { es: "Me duele la mano.", hy: "Ձեռքս ցավում է։" }
    ]
  },
  {
    title: "8. Աշխատավարձ և գրաֆիկ",
    entries: [
      { es: "¿Cuál es el horario?", hy: "Ինչպիսի՞ն է գրաֆիկը։" },
      { es: "Trabajo de lunes a viernes.", hy: "Ես աշխատում եմ երկուշաբթիից ուրբաթ։" },
      { es: "¿Hay trabajo los sábados?", hy: "Շաբաթ օրերին աշխատանք կա՞։" },
      { es: "¿Cuándo pagan?", hy: "Ե՞րբ եք վճարում։" },
      { es: "¿Pagan cada semana?", hy: "Ամեն շաբա՞թ եք վճարում։" },
      { es: "¿El pago es en efectivo?", hy: "Վճարումը կանխի՞կ է։" },
      { es: "¿El pago es por transferencia?", hy: "Վճարումը փոխանցո՞ւմով է։" }
    ]
  },
  {
    title: "9. Շատ կարևոր բառեր",
    entries: [
      { es: "la obra", hy: "շինհրապարակ / օբյեկտ" },
      { es: "el jefe", hy: "ղեկավար / շեֆ" },
      { es: "el trabajador", hy: "աշխատող" },
      { es: "la herramienta", hy: "գործիք" },
      { es: "el material", hy: "նյութ" },
      { es: "el cemento", hy: "ցեմենտ" },
      { es: "la arena", hy: "ավազ" },
      { es: "el ladrillo", hy: "աղյուս" },
      { es: "la pared", hy: "պատ" },
      { es: "el suelo", hy: "հատակ" },
      { es: "el techo", hy: "առաստաղ / տանիք" },
      { es: "la puerta", hy: "դուռ" },
      { es: "la ventana", hy: "պատուհան" }
    ]
  },
  {
    title: "10. Ամենաանհրաժեշտ նախադասությունները",
    entries: [
      { es: "Soy trabajador de construcción.", hy: "Ես շինարարության աշխատող եմ։" },
      { es: "Tengo experiencia.", hy: "Ես փորձ ունեմ։" },
      { es: "Puedո aprender rápido.", hy: "Ես կարող եմ արագ սովորել։" },
      { es: "Puedo trabajar muchas horas.", hy: "Ես կարող եմ շատ ժամեր աշխատել։" },
      { es: "Necesito trabajo estable.", hy: "Ինձ կայուն աշխատանք է պետք։" },
      { es: "Quiero trabajar legalmente.", hy: "Ես ուզում եմ օրինական աշխատել։" },
      { es: "Estoy listo para empezar.", hy: "Ես պատրաստ եմ սկսել։" }
    ]
  }
];
