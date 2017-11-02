const SVGCircle = Vue.component('svg-circle',{
    template: `<div><svg height="700" width="700">
    <circle cx="350" cy="350" r="200" stroke="black" stroke-width="3" fill="red" />
    </svg></div>`
});



const ShapeSelectorsTemplate =
`<div class="div-sleeve">
    <header class="main-head">
    <p class="mb-0"> &nbsp; </p>
<a href="shapes/circle" v-for="shape in shapes" v-text="shape" class="btn btn-light"></a>
    </header>
    <h1 class="big_char">{{selected}}</h1>
</div>`;


var Shapes = Vue.component('shapes',{
    template: `<div>Shapes: <router-view></router-view></div>`,
    template: ShapeSelectorsTemplate,
        data: function () {
        return {
            shapes: ['circle'],
            selected: null
        }
    },
    methods: {
        switchShape: function (shape){
            this.selected = shape;
        }
    }
});