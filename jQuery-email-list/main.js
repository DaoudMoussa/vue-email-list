// generare una lista di 10 indirizzi email e stamparle in pagina con vue.
// Dopo aver recuperato correttamente 10 indirizzi email e averli stampati in pagina
// in modo "grezzo",  date sfogo alla vostra creatività per rendere più accattivante la grafica della pagina
// API mails: https://flynn.boolean.careers/exercises/api/random/mail
$(document).ready(function() {
    $('.email-list-container').hide();
    let counter = 0;
    for (var i = 0; i < 10; i++) {
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            success: function(emailObject) {
                let template = $('.template .list-email-item').clone()
                let currentEmail = emailObject.response
                template.text(currentEmail)
                // console.log(template);
                $('.email-list').append(template);
                counter++
                if(counter == 10) {
                    $('.email-list-container').show();
                }
            },
            error: function() {
                console.log('Si è verifivcato un errore');
            }
        })
    }


});
