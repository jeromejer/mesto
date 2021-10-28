export default class UserInfo {
    constructor({ userName, userJob, avatar }) {
        this._userName = document.querySelector(userName);
        this._userJob = document.querySelector(userJob);
        this._avatar = document.querySelector(avatar)
    }

    //метод возвращает объект с данными пользователя
    getUserInfo() {
        const dataUser = {};
        dataUser.text_name = this._userName.textContent;
        dataUser.text_job = this._userJob.textContent;
        return dataUser;
    }

    //метод принимает новые данные пользователя
    setUserInfo({ textName, textJob}) {
        this._userName.textContent = textName;
        this._userJob.textContent = textJob;
    }

    setAvatar(url) {
        this._avatar.src = url
    }
}