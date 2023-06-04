const request = require("supertest")("https://reqres.in");
const expect = require("chai").expect;

async function getUserPages(page){
    const response = await request.get(`/api/users?page=${page}`)
    return response
}

describe("Get /users", function() {
    it("returns users page 2",async function(){
        const query1 = "2"
        const response = await getUserPages(query1)
        //console.log(await response.body)
        expect(await response.status).to.equal(200)
        expect(await response.body.data.length).to.equal(6)
    })

    it("return users page 3", async function(){
        const query2 = "3"
        const response = await getUserPages(query2)
        //console.log(await response.body)
        expect(await response.status).to.equal(200)
        expect(await response.body.data.length).to.equal(0);
    })
})

exports.getUserPages={getUserPages}