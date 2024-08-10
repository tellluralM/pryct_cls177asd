let stories = [
    {
        "story_id": "1",
        "inputs": 8,
        "title": "¡Hoy fuimos al zoológico!",
        "story": `¡Hoy fuimos al zoológico! Lo primero que vimos fue un <span class="rep_input">_____</span> <span class="rep_input">_____</span> <span class="rep_input">_____</span>. El encargado nos dijo que eso era normal, excepto en <span class="rep_input">_____</span>. ¡Fue una <span class="rep_input">_____</span> aventura! A la próxima, recordaré que, si alguna vez veo <span class="rep_input">_____</span> <span class="rep_input">_____</span>, debo <span class="rep_input">_____</span> hacia el otro lado.`,
        "words": ["Gran", "Gorilla", "Negro", "Madagascar", "Agradable", "Tigres", "Blancos", "Moverme"]
    },
    {
        "story_id": "2",
        "inputs": 7,
        "title": "Día de Picnic",
        "story": `El <span class="rep_input">_____</span> nos vamos de picnic. Iré con mi <span class="rep_input">_____</span> y mi <span class="rep_input">_____</span> favorito. Para comer, comeremos <span class="rep_input">_____</span> y beberemos <span class="rep_input">_____</span>. Terminaremos el día con un <span class="rep_input">_____</span> juego de <span class="rep_input">_____</span>.`,
        "words": ["Domingo", "Tía", "Perro", "Hamburguesas", "Refrescos", "Agradable", "Cartas"]
    },
    {
        "story_id": "3",
        "inputs": 12,
        "title": "Cuento de un animal simplón",
        "story": `Había una vez un <span class="rep_input">_____</span> <span class="rep_input">_____</span> de <span class="rep_input">_____</span>. Nadie sabía que era un <span class="rep_input">_____</span> porque tenía el pelaje <span class="rep_input">_____</span> y comía <span class="rep_input">_____</span> <span class="rep_input">_____</span> cada día. Le gustaba <span class="rep_input">_____</span> y cantar <span class="rep_input">_____</span>. Cuando estaba <span class="rep_input">_____</span>, empezaba a hablar de forma <span class="rep_input">_____</span>. Entonces se sentía <span class="rep_input">_____</span>.`,
        "words": ["Gato", "Apestoso", "California", "Gato", "Azul", "3", "Peces", "Bailar", "Canciones", "Triste", "Infantil", "Feliz"]
    }
]
$(document).ready(function () {
    displayStory();
})
$(function () {
    $(".input_field").keyup(function () {
        let id = $(this).attr("id");
        let input_number = id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val());
    })

    $("#submit_story").click(function () {
      
	  let = []
      for (let i=0; i<$(".input_field").length; i++){
        values.push($("input_field").eq(i).val())
      }
	  
      let data={
        "story_id": $("story_is") .val(),
        "values":values
      }

    })
})



function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    $("#bank_words").empty();

    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Entrada ${i + 1}"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
    
    $("#story_id").val(story.story_id)

    $(".inputfield").keyup(function () {
        let id = $(this).attr("id");
        let input_number = id.split("")[1]
        $(".rep_input").eq(input_number).html($(this).val());
    })
}