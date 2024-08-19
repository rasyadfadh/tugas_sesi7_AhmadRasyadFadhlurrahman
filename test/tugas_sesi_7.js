const request = require('supertest');
 var chai = require('chai');
 chai.use(require('chai-json-schema'));
 const fs = require ('fs')

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
        //  assert.equal(response.statusCode, 200)
        //  assert.equal(response.body[0].name, "Google Pixel 6 Pro")
        //  assert.equal(response.body[0].data.color, "Cloudy White")
    
        //  expect(response.statusCode).to.equal(200)
     });


    //  const body =  {
    //      "name": "Ini request dari api automation",
    //      "data": {
    //         "year": 2019,
    //        "price": 1849.99,
    //         "CPU model": "Intel Core i9",
    //         "Hard disk size": "1 TB"
    //      }
    //   }

    //  it('Test - POST Store Object', async () => {
    //      const response = await request(BASE_URL)
    //      .post("objects")
    //      .send(body)
        
    //      console.log(response.statusCode);
    //      console.log(response.body)
     
    //      //assertion
    //      should(response.statusCode === 200)

    //      const schemaPath = "resources/jsonSchema/post-object-shcema.json"
    //      const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf8')) 
    //     assert.jsonSchema(response.body, jsonSchema)
    //  });


 });