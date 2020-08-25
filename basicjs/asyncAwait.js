
// Standard promise function
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))



// Async Await Function
// This is an Async function.
// The await keyword says, pause the function until we have a response from the promise.
// We can use the await keyword in front of anything that returns a promise
async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause
    await movePlayer(400, 'Left'); // Pause
    await movePlayer(10, 'Right'); // Pause
    await movePlayer(330, 'Left'); // Pause         
}


// Real Life example
// Standard way of doing it    
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)


// Async Await way of doing above
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}
fetchUsers();


// Async Await of fetching data from urls
const urls = [
    'https://jsonplaceholder.typicosde.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(response => response.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (error) {
        console.log('oops', error)
    }
}

// ES9 2018 Features

// Finally
// Finally is always executed, it doesnt matter what value Promise returns. 
const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  Promise.all(urls.map(url => {
      return fetch(url).then(people => people.json())
  })).then(results => {
      console.log('1', results[0])
      console.log('2', results[1])
      console.log('3', results[2])
      console.log('4', results[3])})
  .catch(err => console.log('ughhhh fix it!', err))
  .finally(() => console.log('extra'));


// For Await Of
// 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}



// Exercises

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

//   1 - Solution
const getUsers = async function() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        users = response.json();
        console.log(users)
    } catch (error) {
        console.log('oops, ', error)
    }
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url =>
            fetch(url).then(response => response.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch (error) {
        console.log('oops', error)
    }
}

// 2 - Solution 
const getData = async function() {
    const [users, posts, albums ] = await Promise.all(
        urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
        }),
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
};



// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];

  
// 3 - Solution

    const getData = async function() {
        try {
            const [users, posts, albums ] = await Promise.all(
            urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
            }),
        );
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
        } catch (error) {
            console.log('oooooooops', error);
        }
        
    };
    