import { Component } from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        // console.log('navigation: ', this.$el);
        this.$el.addEventListener('click', tabClickHandler.bind(this))

    }

}

function tabClickHandler(event) {
    event.preventDefault()
    if (event.target.classList.contains('tab')) {
       Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
           tab.classList.remove('active')
       })
        // console.log('event.target: ', event.target);
        event.target.classList.add('active')
    }
}