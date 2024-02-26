
describe('Проверка на негативный кейс авторизации', function () {
    
    it('Ввести НЕ правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //проверка, что кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //ввели правильный логин
        cy.get('#loginButton').should('be.disabled'); //проверка, что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio11'); //ввели НЕ правильный пароль
        cy.get('#loginButton').should('be.enabled'); //проверка, что кнопка войти раздизейблена
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').should('be.visible'); ///видимость сообщения
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка вывода текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); ///видимость крестка
        cy.get('#exitMessageButton > .exitIcon').click(); //нажать на кнопку крестик
    })
})
