// generare una lista di 10 indirizzi email e stamparle in pagina con vue.
// Dopo aver recuperato correttamente 10 indirizzi email e averli stampati in pagina
// in modo "grezzo",  date sfogo alla vostra creatività per rendere più accattivante la grafica della pagina
// API mails: https://flynn.boolean.careers/exercises/api/random/mail
const app = new Vue({
    el: '#root',
    data: {
        emails: []
    },
    mounted() {
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                const email = result.data.response;
                if (!this.emails.includes(email)) {
                    this.emails.push(email);
                };
            });
        }

    }
});

// const app = new Vue({
//     el: '#root',
//     data: {
//         emails: []
//     },
//     methods: {
//         getEmail() {
//             axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//             .then((result) => {
//                 const email = result.data.response;
//                 if (!this.emails.includes(email)) {
//                     this.emails.push(email);
//                 };
//                 this.repeat();
//             });
//         },
//         repeat() {
//             if(this.emails.length < 10) {
//                 this.getEmail();
//             }
//         }
//
//     },
//     mounted() {
//         this.getEmail();
//     }
// });
