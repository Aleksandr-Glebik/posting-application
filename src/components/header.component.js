import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        // console.log('$el: ', this.$el);

       const btn = this.$el.querySelector('.js-header-start')
       console.log('btn: ', btn);
       btn.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler() {
    // console.log('this.$el.buttonHandler: ', this.$el);
    // this.$el.classList.add('hide')
    this.hide()
}