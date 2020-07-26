
class UserData {
getUserName() {
    return cy.get('input[type="text"]');
}
getEmail(){
    return cy.get('input[type="email"]');
}
getPassword(){
    return cy.get('input[type="password"]');
}

getRegisterButton() {
    return cy.get('.btn').contains('Sign in')
}
}
export default UserData