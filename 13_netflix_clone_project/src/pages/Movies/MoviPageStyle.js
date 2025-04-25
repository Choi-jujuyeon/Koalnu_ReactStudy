import styled from "styled-components";

export const Container = styled.div`
    background-color: #141414;
    padding: 20px;
    color: white;
`;

export const FilterSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 30px;
    padding: 0 20px;

    label {
        display: flex;
        flex-direction: column;
        color: #e50914;
        font-size: 1.2rem;
        font-weight: 600;

        select {
            margin-top: 8px;
            padding: 10px 16px;
            border: none;
            border-radius: 6px;
            background-color: #1c1c1c;
            color: white;
            font-size: 1rem;
            min-width: 200px;
            transition: all 0.3s ease;

            &:hover {
                background-color: #2a2a2a;
            }

            &:focus {
                outline: none;
                background-color: #333;
                box-shadow: 0 0 5px rgba(229, 9, 20, 0.5);
            }
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const MovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 0 10px;
`;

export const MovieCardWrapper = styled.div`
    width: 100%;
    max-width: 250px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const LoadingWrapper = styled.div`
    text-align: center;
    color: #fff;
    font-size: 2rem;
`;

export const ErrorWrapper = styled.div`
    text-align: center;
    color: red;
    font-size: 2rem;
    min-height: 200px;
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Pagination = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding: 20px 0;
`;

export const PageItem = styled.li`
    padding: 10px 15px;
    border-radius: 8px;
    background-color: transparent;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #e50914;
        color: white;
    }

    &.active {
        background-color: #e50914;
        border-radius: 8px;
        padding: 10px 10px;
        color: white;
        font-weight: bold;
        box-shadow: 0 0 10px rgba(229, 9, 20, 0.5);
    }

    &.disabled {
        background-color: #333;
        color: #777;
        cursor: not-allowed;
        transform: none;

        &:hover {
            background-color: #333;
        }
    }
`;
