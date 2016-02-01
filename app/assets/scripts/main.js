import {render, h} from './render.js';

/** @jsx h */

let arr = [
  {
    name: 'Stevie',
    job: 'Designer'
  },
  {
    name: 'Daniel',
    job: 'Dev'
  },
  {
    name: 'Dom',
    job: 'Dev'
  },
  {
    name: 'Zoe',
    job: 'Designer'
  }
]

let info = arr.map((item, i) =>{
  let fancyClass = i % 2 !== 0 ? 'fancy' : 'not-fancy';
  return <li class={fancyClass}>My name is {item.name} and I work as a {item.job} at IBM</li>
});

let newUser = (
  <form>
    <input type="text" placeholder="name" class="name" />
    <input type="text" placeholder="job" class="job" />
    <button type="button" id="submit">Submit</button>
  </form>
);

document.getElementById('submit').addEventListener('click', createNewUser);

function createNewUser(name, job){
  console.log(name);
  name = document.getElementsByClassName('name')[0];
  job = document.getElementsByClassName('job')[0];
  console.log(name);
  // let user = {
  //   name: name,
  //   job: job
  // };
  // arr.push(user);
}



let vdom = (
  <div>
    <p>Look, a simple jsx renderer! With lots of text</p>
    <span>And another element</span>
    <ul>
     {info}
    </ul>
    {newUser}

  </div>
);

let dom = render(vdom);

document.body.appendChild(dom);