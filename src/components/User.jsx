import React from 'react'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component {
  user = this.props.user
  render() {
    return (
      <div className='user'>
        <IoCloseCircleSharp className='delete-icon'/>
        <IoHammerSharp className='edit-icon'/>
        <h3>
          {this.user.fn} {this.user.sn}
        </h3>
        <p>{this.user.bio}</p>
        <b>{this.user.isHappy ? 'Счастлив =)' : 'Расстроен'}</b>
      </div>
    )
  }
}

export default User
