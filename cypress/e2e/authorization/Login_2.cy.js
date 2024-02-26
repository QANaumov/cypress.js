
describe('Проверка логики восстановления пароля', function () {
    
    it('Нажать «Забыли пароль»', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //проверка, что кнопка войти задизейблена
        cy.get('#forgotEmailButton').contains('Забыли пароль?'); //видим надпись
        cy.get('#forgotEmailButton').click(); //кликаем на надпись
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //проверка вывода текста
        cy.get('#restoreEmailButton').should('be.enabled'); //проверка, что кнопка войти раздизейблена
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); ///видимость крестка
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели e-mail
        cy.get('#restoreEmailButton').click(); //нажать на кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка вывода текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); ///видимость крестка
        cy.get('#exitMessageButton > .exitIcon').click(); //нажать на крестик


    })



})
