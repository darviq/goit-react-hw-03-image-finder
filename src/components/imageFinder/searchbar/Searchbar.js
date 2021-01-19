import React, {useState} from "react";
import Header from "./SearchbarStyled";

const Searchbar = ({searchByValue}) => {
    const [inputValue, setInputValue] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        inputValue && searchByValue(inputValue);
    };

    const inputHandler = e => setInputValue(e.target.value);

    return (
        <Header className="Searchbar">
            <form className="SearchForm" onSubmit={submitHandler}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input className="SearchForm-input" type="text" placeholder="Search images and photos" value={inputValue} onChange={inputHandler} />
            </form>
        </Header>
    );
};

export default Searchbar;
