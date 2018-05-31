'use strict'
fetch = require 'node-fetch'
# co = require 'co'

# Using Promises
fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then((resp) -> resp.json())
  .then((post) -> console.log("Promise: Post #{post.id} title is #{post.title}"))
  .catch((e) -> conosle.error(e.stack))

# Implementation of a coroutine trampoline
co = (generator) ->
  iterator = generator()
  iteration = iterator.next()

  iterate = (iteration) -> 
    return iteration.value if iteration.done
    promise = iteration.value
    promise.then((x) -> iterate(iterator.next(x)))

  iterate(iteration)

# Using Generators and Coroutines!
co( ->
  uri = 'http://jsonplaceholder.typicode.com/posts/1'
  post  = yield fetch(uri).then((p) -> p.json())
  {id, title} = post
  console.log("Coroutine: Post #{id} title is #{title}")
).catch((e) -> console.error(e.stack))
  .then((x) -> conosle.log(x))
