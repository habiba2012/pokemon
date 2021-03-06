import React from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import { searchTerm } from "../store/actions/pokemonAction";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            suggestions: [],
        };
    }

    onChange = (event, { newValue }) => {
        // eslint-disable-next-line no-shadow
        const { searchTerm } = this.props;
        searchTerm(newValue);
        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value),
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        });
    };

    // =======================================

    getSuggestions(value) {
        // eslint-disable-next-line react/destructuring-assignment
        const { eachPokemon } = this.props.state;
        const escapedValue = this.escapeRegexCharacters(value.trim());
        if (escapedValue === "") {
            return [];
        }
        const regex = new RegExp(`^${escapedValue}`, "i");
        return eachPokemon.filter((language) => regex.test(language.name));
    }

    // eslint-disable-next-line class-methods-use-this
    getSuggestionValue(suggestion) {
        return suggestion.name;
    }

    // eslint-disable-next-line class-methods-use-this
    escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // eslint-disable-next-line class-methods-use-this
    renderSuggestion(suggestion) {
        return <span>{suggestion.name}</span>;
    }

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search pokemon...",
            value,
            onChange: this.onChange,
            className: "searchPokemon__input",
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default connect((state) => ({ state: state.pokemonReducer }), {
    searchTerm,
})(App);
