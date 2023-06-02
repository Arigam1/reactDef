import React from 'react'

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        fn: "",
        ln: "",
        bio: "",
        isHappy: "",
    }
  }
  render() {
    return (
      <form>
        <input placeholder='Имя' onChange={(e) => this.setState({fn: e.target.value})}/>
        <input placeholder='Фамилия' onChange={(e) => this.setState({ln: e.target.value})}/>
        <textarea placeholder='Биография' onChange={(e) => this.setState({bio: e.target.value})}/>
        <label htmlFor='isHappy'>Счастлив?</label>
        <input type='checkbox' id='isHappy' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
        <button type='Button' onClick={() => this.props.onAdd({
          fn: this.state.fn,
          sn: this.state.sn,
          bio: this.state.bio,
          isHappy: this.state.isHappy
        })}>Добавить</button>
      </form>
    )
  }
}

export default AddUser
