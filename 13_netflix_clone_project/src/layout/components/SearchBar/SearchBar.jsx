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

    const toggleInput = () => {
        setIsOpen((prev) => {
            const newState = !prev;
            if (!prev && inputRef.current) {
                inputRef.current.focus();
            }
            return newState;
        });
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
                <IconButton onClick={toggleInput}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icon/search.svg`}
                        alt="search"
                        width="40px"
                    />
                </IconButton>
            )}
            <Input
                ref={inputRef}
                placeholder="search.."
                type="text"
                name="search"
                isOpen={isOpen}
                value={inputValue}
                onChange={handleInputChange}
            />
            <CloseButton visible={isOpen && inputValue} onClick={handleClear}>
                ✕
            </CloseButton>
        </InputWrapper>
    );
};

export default SearchBar;
