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
    "Para un místico, el dolor es un proceso más de la vida, por lo tanto, es elevación, transformación<br><br> RDB"
    ];
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
