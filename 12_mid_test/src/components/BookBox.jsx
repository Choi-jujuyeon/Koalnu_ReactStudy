import React from "react";
import styled from "styled-components";

const BookBox = ({ title, author, imageUrl, onClick }) => {
    return (
        <BoxContainer onClick={onClick}>
            <BookImage src={imageUrl} alt={title} />
            <BookDetails>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
            </BookDetails>
        </BoxContainer>
    );
};

export default BookBox;

const BoxContainer = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 200px;
    margin: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const BookImage = styled.img`
    width: 100%;
    height: 250px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    object-fit: cover;
`;

const BookDetails = styled.div`
    padding: 15px;
`;

const BookTitle = styled.h4`
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
`;

const BookAuthor = styled.p`
    font-size: 14px;
    color: #777;
    margin: 0;
`;
