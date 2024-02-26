
describe('Проверка на позитивный кейс авторизации', function () {
    
    it('Ввожу правильные логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //проверка, что кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#loginButton').should('be.disabled'); //проверка, что кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').should('be.enabled'); //проверка, что кнопка войти раздизейблена
        cy.get('#loginButton').click(); //нажать на кнопку войти
        cy.get('#messageHeader').should('be.visible'); ///видимость сообщения
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка вывода текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); ///видимость крестка
        cy.get('#exitMessageButton > .exitIcon').click(); //нажать на кнопку крестик
    })
})
