import React from 'react'

class Users extends React.Component {
  users = [
    {
      id: 1,
      fn: 'Bob',
      sn: 'Marley',
      bio: 'fanat ArigamiWalker',
      isHappy: true
    },
    { id: 2, fn: 'John', sn: 'Doe', bio: 'fanat ArigamiV', isHappy: false }
  ]
  render() {
    if (this.users.length > 0)
      return (
        <div>
          {this.users.map(user => (
            <div className='user' key={user.id}>
              <h3>
                {user.fn} {user.sn}
              </h3>
              <p>{user.bio}</p>
              <b>{user.isHappy ? "Счастлив =)" : "Расстроен"}</b>
            </div>
          ))}
        </div>
      )
    else
      return (
        <div className='user'>
          <h3>Пользователей нет</h3>
        </div>
      )
  }
}

export default Users
