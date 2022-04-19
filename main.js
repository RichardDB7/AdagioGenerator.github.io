let quoteText = document.getElementById('quote');
const twitterBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');
let boton = document.getElementById('quote-container');

function generate(){
    var firstname = ["Cuando algo es verdadero, no nesecita ser demostrado  <br><br>  Abraham Abulafia",
    "Solo podras tocar el cielo con el corazon <br><br> Rumi",
    "El regalo mas grande del amor es hacer sagrado todo lo que toca <br><br> Rumi",
    "No sean como los siervos que sirven esperando recompensa de su Rab, Mas bien sirvan a su Rab sin esperar recompensa, Y que el temor de los cielos este sobre ustedes <br><br> Antigonos Ish Soho",
    "Las mareas calmas no crean marineros hábiles <br><br> Yehuda Berg","Todo ocultamiento tiene como destino la revelacion <br><br> Rabí Moshe Jaim Luzzatto",
    "Todo lo que tiene raíces nunca muere <br><br> Abraham Abulafia",
    "El mal surge cuando el bien se encuentra en un lugar que no le corresponde <br><br> Iosef de Gikatilla",
    "Yo no llegué a un grado espiritual alto porque me lo otorgaron del cielo, sino por mi propio esfuerzo personal <br><br> Isaac Luria",
    "Los días pasan y se han ido y uno encuentra que nunca tuvo el tiempo suficiente para estar con uno mismo <br><br> Najman de Bratzlav",
    "Todos los mundos, tanto los superiores como los inferiores, se encuentran en nuestro interior <br><br> Rabí Yehudá Ashlag",
    "Los filósofos solo pueden deducir lo que existe en el dominio metafísico, mientras que los cabalistas lo podemos ver de hecho <br><br> Rabí Moshe Cordovero",
    "Todas las definiciones de Dios llevan a la herejía <br><br> Rabí Abraham Kook",
    "La verdad de uno muere con uno y no es posible comunicarla <br><br> Najman de Bratzlav",
    "Quién es un maestro? Quien deshace el temor con amor y el que reduce la soledad de los hombres a su mínima expresión <br><br> Baal Shem Tov",
    "Cuando pensamos nos conectamos con la raiz del infinito <br><br> Isaac El Ciego",
    "La mística es un continuo destruir todas las formas que solo emergen para ser nuevamente destruidas <br><br> Gershom Scholem ",
    "Cuida de limpiar tus pensamientos de la locura del mundo <br><br> Abraham Abulafia",
    "El descenso siempre constituye una parte del proceso para avanzar y cada descenso nos situará en un lugar más elevado <br><br> Shneur Zalman de Liadi",
    "Las conversaciones sobre las vanidades del Mundo impurifican el alma <br><br> Shneur Zalman de Liadi",
    "El ego te infla, el yo te fortalece, la nada te ennoblece <br><br> Mario Javier Sabán",
    "Acepto todo de Dios, pero no me resigno a nada <br><br> Mario Javier Sabán",
    "Yo os enseñaré la mejor manera de comprender la Torá. Debéis dejar de ser conscientes de vosotros. Debéis oír lo que el universo os dice en vuestro interior. Y cuando regrese vuestra voz, deteneos <br><br> El Maguid de Mezritch",
    "La única venganza que tiene el bien sobre el mal es hacer el bien <br><br> Mario Javier Sabán",
    "Observemos a la gente en las calles corriendo de un lado para el otro solo para obtener comida y bebida. Hoy aquí y mañana en la tumba. Para qué vino el alma del hombre a este mundo? El alma vino a conocer el universo y el Infinito, lo demás son vanidades <br><br> Moshe Jaim Luzzatto",
    "Mientras estudias, no hay necesidad de buscar la unión con Dios, porque el estudio es una de las formas más sublimes de unirse con Él <br><br> Jaim ben Isaac de Volozhin",
    "Para un místico, el dolor es un proceso más de la vida, por lo tanto, es elevación, transformación<br><br> RDB",
    "No quiero ni el cielo ni el infierno, te quiero a ti HaShem! <br><br> Ione Szalay",
    "Si usted esta buscando un camino, usted ya está en el camino <br><br> Shalom Sharabi",
    "Todo lo que hago en cualquier momento si lo hago con conciencia me conduce al Ein Sof <br><br> Abraham Abulafia",
    "Los Mekubalim, aquellos que pueden ver através de la ilusión <br><br> RDB",
    "Solamente se puede amar a Dios en la medida que se le conoce <br><br> Rabi Moshé Ben Maimón",
    "Toda rama está relacionada con su raíz y aún cuando no podamos llegar a la raíz de la perfección,la rama siempre transmite algo de la información de la raíz,y cuando la rama obtiene la mayor información de la raíz,entonces alcanza la iluminación <br><br> Rabí Moshe Jaim Luzzato",
    "Del Daat para arriba, el alma encuentra toda la fuerza que necesita para llegar a Dios <br><br> El Ramak",
    "Existe un secreto muy profundo:Maljut es la espalda de Kéter <br><br> El Ramak",
    "Una persona puede estar haciendo cosas físicas,pero si mientras tanto medita sobre conceptos elevados,puede causar una unificación con Dios en cualquier momento <br><br> Baal Shem Tov",
    "Cuando una persona se mejora a sí misma, se le otorga un alma de un nivel superior <br><br> Moshe Jaim Luzzato",
    "Todo ocultamiento tiene como destino la revelación <br><br> Rabí Moshé Jaim Luzzatto",
    "El único poder que tenemos es reconocer nuestras debilidades <br><br> Mario Sabán",
    "El que profundiza, su mente no vuelve a ser como antes <br><br> Rabí David Ibn Zimra",
    "El que busca tiene miedo de lo que puede encontrar, pero si la felicidad de la búsqueda supera al miedo, nada te detiene para ascender hacia Keter <br><br>Mario Sabán",
    "Aunque el sabio pretenda conocer no por ello es capaz de comprender <br><br> Eclesiastés 8:17",
    "Tu camino es Tu camino y no es el camino del Otro, no obligues al Otro a cambiar Su camino, Por qué anulaste el camino del Otro que era su camino? Tu camino no es el camino del Otro, ni el camino del Otro tu camino <br><br> Rabí Abraham Abulafia",
    "Sed críticos y dudad de todo. Lo más importante es liberarse de todo tipo de prejuicios, educacionales y opiniones públicas. Liberarse de todos estos factores externos e intentar absorber lo que tu naturaleza te dice. Eso sería lo más cercano a la verdad, porque cualquier tipo de educación, cualquier opinión externa, supone coerción <br><br> Rabí Baruj Ashlag",
    "Prefiero pecar por amor gratuito que por odio gratuito <br><br> Rabí Abraham Kook",
    "No lleves al extremo la misericordia para con los demás, ya que, al olvidarte de ti mismo, lograrás anular la misericordia contigo <br><br> Mario Sabán",
    "La fuerza de retener nuestra fuerza es siempre superior a la fuerza de desplegarla <br><br> Mario Sabán",
    "Las verdaderas victorias son aquellas que no cuestan sangre y que son conseguidas sobre uno mismo <br><br> Rabí Ben Zomá",
    "Formo la Luz y creo las Tinieblas, hago la paz y creo el mal: Yo soy HaShem que hace todo esto <br><br> Isaías 45:6",
    "Lo que es malo en relación a lo finito no es malo en relación al Infinito <br><br> Maimónides",
    "Todas las almas presentes en este mundo, que harán el esfuerzo de conocer a su Creador a través de Sus escrituras secretas, ascenderán más alto que todas las otras almas que no estudiaron ni comprendieron, y serán primeras en el tiempo de la resurrección <br><br> Zohar Vayeshev",
    "Todos los ídolos son falsos incluso Dios como ídolo <br><br> Jaime Barylko",
    "La energía es el recipiente de la información <br><br> Moshé Cordovero",
    "¿Quién es un intelecto inmaduro? Quien se enfurece por cosas triviales <br><br> Schneur Zalman de Liadí",
    "En toda transformación de la realidad y en cada cambio se cruza el abismo de la nada <br><br> Rabí Yosef ben Shalom de Barcelona",
    "La consciencia es el Espíritu Santo, Daat es el Rúaj Ha-Kodesh <br><br> Rashi",
    "Tenemos la potencia para ir, pero no sabemos a donde <br><br> Mario Sabán",
    "Hay que hacer bajar a la Biná y no quedarse en estado de flujo sin materializar los actos <br><br> Yitzhak Ginsburgh",
    "Rabí Yossi dijo: «¡Ay de los seres humanos que ven, pero no conocen lo que ven, que existen, pero que no conocen sobre lo que existe!» <br><br> Jaguigá 12.b",
    "HaShem dijo: Necio, esta noche vienen a pedirte tu alma; y lo que has conseguido, de quién será? Así es el que hace para sí tesoro, y no es rico para con HaShem <br><br> Iehoshua Mi'Natzrat",
    "El ser humano nace como un egoísta absoluto, y esta cualidad es tan visceral que puede hacer que se convenza de que ya se convirtió en alguien justo y que se ha librado de todo egoísmo <br><br> Talmud Hagigá",
    "La Torá es la Luz del Creador, y solamente a la persona que recibe esta luz se le considera que está aprendiendo la Torá <br><br> Zohar Metzorá",
    "La Torá está encubierta. Sólo es revelada a los que han alcanzado el nivel de los justos <br><br> Talmud Hagigá",
    "Cuando una persona, por medio de sus estudios, alcanza el nivel en el cual no desea nada más que la elevación espiritual y en el que sólo acepta lo estrictamente necesario de la vida para sustentar su existencia física, no para el placer, constituye el primer paso de su ascenso al mundo espiritual <br><br> Talmud Psajím",
    "Cuanto más baja se siente una persona, más cerca llega a estar de su estado verdadero y del Creador <br><br> Talmud Sotá",
    "No se desesperen una vez hayan entrado en el sendero, pues el Creador nos asegura el éxito si la dirección de nuestras aspiraciones es correcta <br><br> Talmud Psajim",
    "El aspecto más importante de una persona es sus aspiraciones, y no sus logros, porque es el egoísmo el que requiere logros <br><br> Talmud Yavamot",
    "Así como una persona debe esforzarse en sentir la insignificancia de sus características innatas, de igual forma debe estar orgullosa de su trabajo y propósito espirituales <br><br> Talmud Brajot",
    "El individuo debe imaginarse que está solo en el mundo con el Creador. Los diversos caracteres y relatos en la Biblia significan las diversas cualidades de una persona y de toda la gente, así como de las diversas etapas del sendero espiritual de dicha persona. Las cualidades y las etapas son catalogadas por nombres de gente, sus acciones, y sitios geográficos <br><br> Talmud Kidushín",
    "El individuo no tiene que desesperarse cuando del estudio y el trabajo en mejorarse en el esfuerzo de lograr la elevación espiritual, llega a verse a sí mismo como estando en una condición aún peor que la previa al estudio de la Cabalá. La naturaleza verdadera del egoísmo es revelada a la persona cuyo nivel es superior al de los demás, y por esta razón la persona, según su punto de vista, empeora, pese a que en realidad se ha convertido en alguien mejor <br><br> Talmud Meguilá",
    "No presten atención al hecho que el mundo entero está continuamente persiguiendo placeres, mientras que sólo unos cuantos ascienden al Creador <br><br> Talmud Rosh Hashaná",
    "La peor manifestación del egoísmo es la arrogancia y la altivez <br><br> Talmud Sota",
    "La persona debe sacar fuerzas de la comprensión del propósito de la Creación, regocijándose de antemano con la reforma inevitable del mundo entero y la llegada de la paz para la humanidad <br><br> Talmud Trumá",
    "La fe es el único camino hacia la redención. En todo el resto de cualidades, la persona puede llegar a estar confundida por el egoísmo, pero la fe es la única base para el ascenso de una persona al reino espiritual <br><br> Talmud Makot",
    "La fe no puede manifestarse en una persona sin estar acompañada por el temor, porque el egoísmo se doblega solamente al miedo <br><br> Talmud Shabat",
    "La unificación de un individuo con el Creador nada más puede ser alcanzada a través de la congruencia de sus cualidades <br><br> Talmud Sotá",
    "Por que crees en lo que crees? <br><br> RDB"];
    
    var rand_first = Math.floor(Math.random()*firstname.length); 
    document.getElementById('result').innerHTML = "<div class='quote-container'>"+ firstname[rand_first];  
    
}


    // Twitter 
        function tweetQuote() {
            const quote = quoteText.innerText;
            const author = authorText.innerText;
            const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
            window.open(twitterUrl, '_blank'); 
        }
        
// Event listening
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);



//On Load
        getQuote(); 
