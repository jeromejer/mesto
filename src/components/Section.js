export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //создаём карточки
    //метод, который отвечает за отрисовку всех элементов
    setItem() {
        this._items.forEach(item => {
            //отрисовка одного элемента
            this.addItem(this._renderer(item));
        })
    }


    //добавляем карточку в разметку
    addItem(item) {
        this._container.prepend(item);
    }
}