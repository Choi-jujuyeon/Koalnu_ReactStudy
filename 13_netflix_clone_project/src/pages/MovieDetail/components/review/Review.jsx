import React, { useState } from "react";
import useMovieReviews from "../../../../hooks/useMovieReviews";
import styled from "styled-components";

// 전체 리뷰를 담는 컨테이너 스타일
const ReviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
`;

// 리뷰 카드 스타일 (가로로 배열될 때의 스타일)
const ReviewCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 280px;
    cursor: pointer;
    transition: transform 0.3s ease;
    flex: 0 0 30%;
    margin-bottom: 15px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 768px) {
        flex: 0 0 45%;
    }

    @media (max-width: 480px) {
        flex: 0 0 100%;
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
    margin-top: 20px;
    transition: transform 0.3s ease;
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

const Review = ({ id }) => {
    const { data: reviews } = useMovieReviews(id);
    const [selectedReview, setSelectedReview] = useState(null);

    // 리뷰 클릭 시 더 보기
    const handleReviewClick = (review) => {
        setSelectedReview(selectedReview?.id === review.id ? null : review);
    };

    return (
        <div>
            {/* 리뷰 카드들이 가로로 배열됨 */}
            <ReviewContainer>
                {reviews?.map((review) => (
                    <ReviewCard
                        key={review.id}
                        onClick={() => handleReviewClick(review)}
                    >
                        <Author>{review.author}</Author>
                        <Content>{review.content.substring(0, 100)}...</Content>
                    </ReviewCard>
                ))}
            </ReviewContainer>

            {/* 선택된 리뷰는 아래에 상세하게 표시 */}
            {selectedReview && (
                <DetailedReview>
                    <Author>{selectedReview.author}</Author>
                    <Content>{selectedReview.content}</Content>
                    <MoreButton onClick={() => setSelectedReview(null)}>
                        닫기
                    </MoreButton>
                </DetailedReview>
            )}
        </div>
    );
};

export default Review;
