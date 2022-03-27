// import {Component} from "react";
import './search-bar.styles.css'

const SearchBar = ({className, placeholder, onChangeHandler}) => (
  <input
    type='search'
    className={`search-bar ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// class SearchBar extends Component {
//   render() {
//     return (
//       <input
//         type='search'
//         className={`search-bar ${this.props.className}`}
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBar;