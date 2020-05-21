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
            console.log(dati.genre);
            var card_finale = template_function(card);
            $('.conteiner').append(card_finale);
        }
    },
    'error' : function() {
        alert('si è verificato un errore');
    }
})

$('.dropdown').on('click','.dropdown-list li', function () {
    var testo = $(this).text();
    $('.genre span').each(function () {
        var p = $(this).text();
        if (testo==p) {
            $(this).parents('.card').show();
        } else if (testo == 'Generi') {
            $('.card').show();
        } else {
            $(this).parents('.card').hide();
        }
    });

    
})
