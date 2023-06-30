import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css'

const customers=[
  {
  'id':1,
  'image': 'https://i.namu.wiki/i/3JkTOG6MSOrDYDBiZEgsDt8RNdUUNTxc5jk9MwX-r7r-Zj4PHUr7k9nG7uJmAWNR4ColRwNTZnMeU-u4lciUEw.webp',
  'name':'홍길동',
  'birthday':'010112',
  'gender':'남자',
  'job':'대학생'
  },
  {
    'id':2,
    'image':'https://i.namu.wiki/i/36_AhN1b7V3gDdPCxpqTFVV0NXfydnNgpQaav-4xliUeFmYU9hrjOt_8he7V_OVwLw6-2vYU0ZFrBNIMsGnTqg.webp',
    'name':'퉁퉁이',
    'birthday':'123456',
    'gender':'남자',
    'job':'대학생'

  },
  {
    'id':3,
    'image':'https://i.namu.wiki/i/nBCg8TOs3R5G6HJH0LcNtap3dNVTFAFjkTA2goaSeD8IFKwLZo9yl3pSjgl9PQx1toQZXstgi0YoPWtyhsz7nA.webp',
    'name':'노진구',
    'birthday':'134456',
    'gender':'여자',
    'job':'디자이너'
  },

]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer key = {c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
    </div>
    )
  }
}

export default App;
