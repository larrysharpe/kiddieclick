const NumberSelectorsTemplate =
`<div class="div-sleeve">
    <header class="main-head">
        <p class="mb-0"> &nbsp; </p>
    <button @click="switchNum(num)" v-for="num in numbers" v-text="num" class="btn btn-light"></button>
    </header>
    <h1 class="big_char">{{selected}}</h1>
</div>`;


const NumberSelectors = Vue.component('number-selectors',{
    template: NumberSelectorsTemplate,
    data: function () {
        return {
            numbers: [0,1,2,3,4,5,6,7,8,9,10],
            selected: null
        }
    },
    methods: {
        switchNum: function (num){
            this.selected = num;
        }
    }
});


const Numbers = Vue.component('numbers',{
    template: `<number-selectors></number-selectors>`
});