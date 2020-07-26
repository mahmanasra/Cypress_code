import UserData from '../../support/PageObjects/UserData';

describe( 'create new account', function(){
 it('Sign up ', function(){
  cy.visit('https://react-redux.realworld.io/#/?_k=hky7m8')
  cy.get('.nav-link').contains('Sign up').click()


 const userData = new UserData()  
  //Fill data in sign up dorm
  userData.getUserName().type('testuserha1')
  cy.get('input[type="email"]').type('mhmoud@manasratest.com')
  cy.get('input[type="password"]').type('123456zX')
  cy.get('.btn').contains('Sign in').click()

 })

})