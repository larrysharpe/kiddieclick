const LetterSelectorsTemplate =
`<div class="div-sleeve">
    <p class="mb-0"><a href="#" @click="uppercase">Uppercase</a> | <a href="#" @click="lowercase">Lowercase</a></p>
    <header class="main-head">
        <button @click="switchLtr(ltr)" v-for="ltr in letters" v-text="ltr" class="btn btn-light"></button>
    </header>
        <h1 class="big_char">{{selected}}</h1>
    </div>`;

const letters_list = 'abcdefghijklmnopqrstuvwxyz';

const LetterSelectors = Vue.component('letter-selectors',{
    template: LetterSelectorsTemplate,
    data: function () {
        return {
            letters_list,
            letters:  letters_list.split(''),
            selected: null
        }
    },

    methods: {
        lowercase: function () {
            this.letters = letters_list.toLowerCase().split('');
        },
        switchLtr: function (ltr){
            this.selected = ltr;
        },
        uppercase: function () {
            this.letters = letters_list.toUpperCase().split('');
        }
    }
});


const Letters = Vue.component('letters',{
    template: `<letter-selectors></letter-selectors>`
});