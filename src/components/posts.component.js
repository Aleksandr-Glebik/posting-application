import { Component } from "../core/component"
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template";
export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        // console.log('Posts onShow!!!');
        const fbData = await apiService.fetchPosts()
        // console.log('Data: ', data);
        const posts = TransformService.fbObjectToArray(fbData)
        // console.log('posts: ', posts);
        const html = posts.map(post => renderPost(post, {withButton: true}))
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '))
    }

    onHide() {
        this.$el.innerHTML = ''
    }
}

function buttonHandler(event) {
    // console.log('event btnHandler: ', event);
    const $el = event.target
    const id = $el.dataset.id
    const title = $el.dataset.title

    if (id) {
        // console.log('id: ', id);
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const candidate = favorites.find(p => p.id === id)
        // console.log('favorites :', favorites);
        if (candidate) {
            // удалить элемент
            $el.textContent = 'Сохранить'
            $el.classList.add('button-primary')
            $el.classList.remove('button-danger')
            favorites = favorites.filter(p => p.id !== id)
        } else {
            // добавить эл-т
            $el.textContent = 'Удалить'
            $el.classList.add('button-danger')
            $el.classList.remove('button-primary')
            favorites.push({id, title})
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
}