import { Component } from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)

        this.tabs = []
    }

    init() {
        // console.log('navigation: ', this.$el);
        this.$el.addEventListener('click', tabClickHandler.bind(this))

    }

    registerTabs(tabs) {
        this.tabs = tabs
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
        // console.log('this.tabs',this.tabs);

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name)
        // console.log('activeTab: ', activeTab);
        this.tabs.forEach(t => t.component.hide())
        activeTab.component.show()

    }
}