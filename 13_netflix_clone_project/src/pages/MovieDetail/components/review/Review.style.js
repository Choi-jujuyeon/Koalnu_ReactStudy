import styled from "styled-components";

// 전체 리뷰를 담는 컨테이너 스타일
const ReviewContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
    scroll-snap-type: x mandatory;
    justify-content: center;
    margin: auto;
    /* padding: auto; */

    /* align-items: center; */
    width: 70%;
    /* background-color: red; */

    &::-webkit-scrollbar {
        height: 8px;
        /* margin-bottom: 100px; */
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }
`;

const ReviewCard = styled.div`
    flex: 0 0 auto;
    min-width: 300px;
    max-width: 300px;
    scroll-snap-align: start;
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: transform 0.2s;
    /* background-color: aqua; */

    &:hover {
        transform: scale(1.03);
    }
`;

// 작성자 이름 스타일
const Author = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

// 리뷰 내용 스타일
const Content = styled.p`
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    white-space: pre-line;
    word-wrap: break-word;
`;

// 상세 리뷰 스타일 (선택된 리뷰)
const DetailedReview = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    transition: transform 0.3s ease;
    /* background-color: red; */
`;

// 더보기 버튼 스타일
const MoreButton = styled.button`
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export {
    ReviewContainer,
    ReviewCard,
    Author,
    Content,
    DetailedReview,
    MoreButton,
};
