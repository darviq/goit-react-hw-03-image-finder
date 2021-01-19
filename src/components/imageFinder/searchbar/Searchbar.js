import React, {Component} from "react";
import Header from "./SearchbarStyled";

export default class Searchbar extends Component {
    state = {
        inputValue: "",
    };

    submitHandler = e => {
        e.preventDefault();
        if (this.state.inputValue) {
            this.props.setSearchValue(this.state.inputValue);
        }
    };

    inputHandler = e => {
        this.setState({
            inputValue: e.target.value,
        });
    };

    render() {
        return (
            <Header className="Searchbar">
                <form className="SearchForm" onSubmit={this.submitHandler}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input className="SearchForm-input" type="text" placeholder="Search images and photos" value={this.state.inputValue} onChange={this.inputHandler} />
                    {/* <input className="SearchForm-input" type="text" autocomplete="off" autofocus placeholder="Search images and photos" /> */}
                </form>
            </Header>
        );
    }
}
