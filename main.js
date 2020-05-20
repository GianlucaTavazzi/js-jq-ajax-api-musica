var template_html = $('#templatecard').html();
var template_function = Handlebars.compile(template_html);

$('.dropdown').click(function() {
    $('.dropdown-list').toggle();
})


$.ajax({
    'url' : "https://flynn.boolean.careers/exercises/api/array/music",
    'method' : "GET",
    'success' : function (data){
        for (var i = 0; i < 10; i++) {
            var dati = data.response[i];
            console.log(dati);
            var card = {
                'img' : dati.poster,
                'primoparametro' : dati.title,
                'secondoparametro' : dati.author,
                'terzoparametro' : dati.genre,
                'quartoparametro' : dati.year,
            }
            var card_finale = template_function(card);
            $('.conteiner').append(card_finale);
        }
    },
    'error' : function() {
        alert('si è verificato un errore');
    }
})
