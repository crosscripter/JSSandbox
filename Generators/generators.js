'use strict'
const fetch = require('node-fetch')
// const co = require('co')

// Using Promises
fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(resp => resp.json())
  .then(post => console.log(`Promise: Post ${post.id} title is ${post.title}`))
  .catch(e => conosle.error(e.stack))


// Implementation of a coroutine trampoline
let co = (generator) => {
  const iterator = generator()
  const iteration = iterator.next()

  let iterate = (iteration) => {
    if (iteration.done) return iteration.value
    const promise = iteration.value
    return promise.then(x => iterate(iterator.next(x)))
  }

  return iterate(iteration)
}

// Using Generators and Coroutines!
co(function *() {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1'
  let post  = yield fetch(uri).then(p => p.json())
  let id = post.id
  let title = post.title
  // let {id, title} = post
  console.log(`Coroutine: Post ${id} title is ${title}`)
}).catch(e => console.error(e.stack))
  .then(x => conosle.log(x))
