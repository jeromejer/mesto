export default class Section {
    constructor(render, containerSelector) {
        this._renderer = render;
        this._container = document.querySelector(containerSelector);
    }

    //создаём карточки
    //метод, который отвечает за отрисовку всех элементов
    setItems(list) {
        list.forEach(item => {
            //отрисовка одного элемента
            this.addItem(item);
        })
    }


    //добавляем карточку в разметку
    addItem(data) {
        const item = this._renderer(data);
        this._container.prepend(item);
    }
}