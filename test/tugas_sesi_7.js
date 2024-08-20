const request = require('supertest');
 var chai = require('chai');
 chai.use(require('chai-json-schema'));
 const fs = require ('fs')
 const axios = require('axios');

 const assert = chai.assert;
 const should = chai.should;
 const expect = chai.expect;

 describe('API Test for "reqres.in', () => {
 const BASE_URL = "https://reqres.in/api/"

     it('Test - GET All Objects', async () => {
         const response = await request(BASE_URL)
         .get("users?page=2");
         console.log(response.statusCode);
         console.log(response.body)
        

        //  //assertion
        const schemaPath = "resources/jsonSchema/get-object-schema.json"
        const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) 
        assert.jsonSchema(response.body, jsonSchema)
        
        assert.equal(response.statusCode, 200)
        expect(response.statusCode).to.equal(200)
     });

     const body =  {
        "name": "morpheus",
        "job": "leader"
    }

     it('Test - POST Store Object', async () => {
        const response = await request(BASE_URL)
        .post("users")
        .send(body)
       
        console.log(response.statusCode);
        console.log(response.body)
    
    //     //assertion
       should(response.statusCode === 200)

         const schemaPath = "resources/jsonSchema/post-object-shcema.json"
         const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) 
        assert.jsonSchema(response.body, jsonSchema)
    });

    it('Test - Delete a user by ID', async function() {

        try {
            const response = await axios.delete(`${BASE_URL}users/2`);
            expect(response.status).to.equal(204); 
            expect(response.data).to.be.empty; 
          } catch (error) {
            throw new Error(`Request failed with status code ${error.response.status}`);
          }
        });

        const updatebody =  {
            "name": "morpheus",
            "job": "zion resident"
        }

        it('Test - PUT Update Object', async () => {
            const response = await request(BASE_URL)
            .put("users/2")
            .send(updatebody)
           
            console.log(response.statusCode);
            console.log(response.body)
        
        //     //assertion
    
          const schemaPath = "resources/jsonSchema/put-object-schema.json"
          const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) 
          assert.jsonSchema(response.body, jsonSchema)
        });

 });