import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialUserDetailsList}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeleteUser = uniqueNo => {
    console.log(`uniqueNo: ${uniqueNo}`)
    const {userDetailsList} = this.state
    const filteredusersData = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailsList: filteredusersData,
    })
  }
  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)

    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <h1 className="title">Users List</h1>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              onDeleteUser={this.onDeleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
