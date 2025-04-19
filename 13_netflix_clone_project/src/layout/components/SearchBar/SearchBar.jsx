import React, { useState, useRef } from "react";
import {
    InputWrapper,
    Input,
    IconButton,
    CloseButton,
} from "./SearchBar.style";

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const openInput = () => {
        setIsOpen(true);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClear = () => {
        setInputValue("");
        setIsOpen(false);
    };

    return (
        <InputWrapper>
            {!isOpen && (
                <IconButton onClick={openInput} aria-label="Open search">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icon/search.svg`}
                        alt="Search Icon"
                        width="40px"
                    />
                </IconButton>
            )}

            <Input
                ref={inputRef}
                placeholder="search..."
                type="text"
                name="search"
                isOpen={isOpen}
                value={inputValue}
                onChange={handleInputChange}
            />

            {isOpen && inputValue && (
                <CloseButton
                    visible={isOpen && inputValue}
                    onClick={handleClear}
                    aria-label="Clear search"
                >
                    ✕
                </CloseButton>
            )}
        </InputWrapper>
    );
};

export default SearchBar;
