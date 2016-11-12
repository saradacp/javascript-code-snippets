/**  Alternative to for loops **/

// for each 
function getStockSymbols(stocks) {
  var symbols = [];
  stocks.forEach(function(stock) {
    symbols.push(stock.symbol);
  })

  return symbols;
}
var symbols = getStockSymbols([
  { symbol: "AAPL", price: 110.00, volume: 200 },
  { symbol: "FB", price: 120.00, volume: 300 },
  { symbol: "PANW", price: 150.00, volume: 100 }
]);
console.log(symbols);

/** map function actual implementation **/
Array.prototype.map = function(projection) {
  var results = [];
  this.forEach(function(item) {
    results.push(projection(item));
  });
  return results;
}

// map : manipulate array values : Increase the stock price by hundred$
function getStockPrices(stocks) {
  var prices = [];
  stocks.forEach(function(stock) {
    prices.push(stock.price  + 100 );
  })

  return prices;
}
var prices = getStockPrices([
  { symbol: "AAPL", price: 110.00, volume: 200 },
  { symbol: "FB", price: 120.00, volume: 300 },
  { symbol: "PANW", price: 150.00, volume: 100 }
]);
console.log(prices);

/** filter **/
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter( (number) => {
    return number > 50;
})

//another - return the comments for postId 4
var post = {id:4, title:"New Post"};
var comments = [
{postId :4, content:"awesome post"},
{postId:3, content:"it was ok"},
{postId:4,content:"neat"}
];
function commentsForPost(post, comments) {
return comments.filter( (comment) => {
return comment.postId === post.id;
});

}
commentsForPost(post, comments);

// find - return the admin user
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find((user) => {
    return user.admin;
});

// .find a ladder whose 'height' property was '20 feet';
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
function findWhere(array, criteria) {
  return array.find( ( arr ) => {
      var property = Object.keys(criteria)[0];
      console.log(property);
      if (property && arr[property] == criteria[property]) {
        return arr;
      }
  })
}

//every and some array functions

var computer = [
  { name:'Apple', ram:24 },
  { name:'Compaq',ram:4 },
  { name:'Ace',ram:32 }
]

computers.every( (computer) => {
  return computer.ram > 16;
});//false
computers.some( (computer) => {
  return computer.ram > 16;
});//true

