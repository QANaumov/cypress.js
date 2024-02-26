
describe('Проверка на позитивный кейс на покупку нового автара тренеру', function () {
    
    it('Ввожу правильные логин и пароль', function () {
        cy.visit('https://pokemonbattle.me/login/'); //захожу на сайт
        cy.get(':nth-child(1) > .auth__input').type('Vlzshark@yandex.ru'); //ввели логин
        cy.get('#password').type('S13h04'); //ввели пароль
        cy.get('.auth__button').click(); //нажать на кнопку Войти
        cy.get('.header__btns > [href="/shop"]').click(); //нажать на иконку магазина
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(4).click(); //выбираем и нажимаем кнопку купить
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5519601808787152'); //вводим номер банковской карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //вводим код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alexandr Naumov'); //вводим имя
        cy.get('.pay-btn').click(); //нажимаем платить
        cy.get('#cardnumber').type('56456'); //вводим код
        cy.get('.payment__submit-button').click(); //нажимаем оплатить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //проверка вывода текста
        cy.get('.payment__adv').click(); //нажимаем вернуться в магазин
        //cy.get('.header__container > .header__id > .header__id-img > .k_main_photo').click(); //любуемся новым аватаром))))
        //хотел сделать вывод картинки нового аватара, но так и не "дошел" как и где подцепить ID

    })
})
