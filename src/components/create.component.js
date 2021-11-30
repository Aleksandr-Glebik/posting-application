import { Component } from "../core/component"
import { Form } from "../core/form"
import { Validators } from "../core/validators"

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this))


        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(15)]
        })
    }
}

function submitHandler(event) {
    event.preventDefault()

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }

        this.form.clear()
        console.log('Submit: -formData, -form.valaue ', formData);
    }

    /* else {
        console.warn('Form is invalid');
    } */
}