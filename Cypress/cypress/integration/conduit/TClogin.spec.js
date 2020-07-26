describe ('login',function(){
     it('sign in',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=eogrxl') 
        cy.title().should('eq','Conduit')// validat that i am in the correct page 

        cy.get('form').within(($form) => {
            // using within 
            cy.get('input[type = "email"]').type('mhmoud@manasra.com')
            cy.get('input[type = "password"]').type('123456zX')
            cy.root().submit()   // submits the form 
        })
        cy.contains('Your Feed',{timeout:10000}).should('be.visible')
     }) 
     
     it('Create new Post ', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
            
        //Fill data for create artical using within 

        cy.get('form').within(($form) => {
            cy.get('input').eq(0).type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last(2).type('Test 2')
            cy.contains('Publish Article').click()
        })
         
        cy.url().should('include','article')

        

     })
     
      


     })


 


