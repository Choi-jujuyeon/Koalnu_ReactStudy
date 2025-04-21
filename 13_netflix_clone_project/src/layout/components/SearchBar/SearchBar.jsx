import React, { useState, useRef } from "react";
import styled from "styled-components";

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

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
    @media (max-width: 700px) {
        display: none;
    }
`;

const Input = styled.input`
    height: 45px;
    width: ${({ isOpen }) => (isOpen ? "250px" : "40px")};
    outline: none;
    border: none;
    background-color: #141414;
    color: #fff;
    font-size: 18px;
    transition: all 0.5s cubic-bezier(0, 0.11, 0.35, 2);
    border-bottom: ${({ isOpen }) => (isOpen ? "3px solid #e50914" : "none")};

    &::placeholder {
        color: ${({ isOpen }) => (isOpen ? "#b7b7b7" : "#141414")};
        opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
        transition: opacity 0.3s;
    }
`;

const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background-color: transparent;
    transition: 0.3s linear;
`;

const CloseButton = styled.button`
    display: ${({ visible }) => (visible ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
`;
