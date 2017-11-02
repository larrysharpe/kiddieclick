const ColorSelectorsTemplate =
    `<div class="div-sleeve" :style="bgStyleObject">
    <header class="main-head">
    <p class="mb-0"> &nbsp; </p>
    <button @click="switchBG(color)" v-for="color in colors" :style="{backgroundColor:color}" class="btn btn-light"> </button>
    </header>
    </div>`
;



const ColorSelectors = Vue.component('color-selectors', {
    template: ColorSelectorsTemplate,
    data: function () {
        return {
            bgStyleObject: {
                "background-color": '#fff'
            },
            colors: [
                "white",
                "black",
                "red",
                "orange",
                "yellow",
                "green",
                "blue",
                "indigo",
                "violet",
                "brown",
                "pink"
            ]
        }
    },
    methods: {
        switchBG: function (color){
            this.bgStyleObject['background-color'] = color;
        }
    }
})



const Colors = Vue.component('colors-page', {
    template: `<color-selectors></color-selectors>`
})