import React, { useState } from 'react';
import './Box.css';

const arysrc = [
  'https://picsum.photos/350/350',
  "https://picsum.photos/id/237/350/350",
  "https://picsum.photos/seed/picsum/350/350"
]

let users = [{
  name: 'hillel',
  city: 'netivot',
  id:'sadsadsa1d2',
  gender: 'male'
}, {
  name: 'shirel',
  city: 'ashklon',
  id:'15161asdsad',
  gender: 'female'
}, {
  name: 'dudu',
  city: 'jruslem',
  id:'2134214SAFfsa',
  gender: 'male'
}, {
  name: 'ali',
  city: 'paris',
  id:'546546saffsasaf',
  gender: 'female'
}]


// let foruser = ''

// user.forEach(elm => {
//   foruser += '<div>' +elm.name+ '</div>'
// })

// const foruser = user.map((ele => `<p>${ele.name}</p>`));

// user.forEach(elm => {
//   foruser += '<div>' +elm.name+ '</div>'
// })



function Box(props) {
  const [imgg, setimgg] = useState(arysrc[0])
  const [text, textplus] = useState(1)

  function imgover() {
    const randomimg = Math.floor(Math.random() * arysrc.length)
    setimgg(arysrc[randomimg])
  }

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Name: {user.name}, City: {user.city}</p>
            <p>id: {user.id}</p>
            <h1>{user.gender === 'female' ? '👩' : '👨' }</h1>
            </div>
        )
      })}
    </div>
  )
}

export default Box;