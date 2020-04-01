var nightmare = require('nightmare');
var expect = require('chai').expect;
var axios = require('axios');

var n;
const url = 'http://localhost:8080';

describe('hello-express', function () {
  this.timeout(6500);
  this.slow(3000);

  beforeEach(()=> {
    n = nightmare();
  })

  it('should have the correct page title', () =>
    n
      .goto(url)
      .evaluate(function () {
        return document.querySelector('body').innerText
      })
      .end()
      .then(function (text) {
        expect(text).to.equal('Hello World');
      })
  );

  it('returns the correct status code', () => axios.get('http://localhost:8080')
    .then((response) => {
        return expect(response.status === 200)
    })
  )
});
