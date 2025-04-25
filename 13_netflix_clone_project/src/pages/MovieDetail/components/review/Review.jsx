import React, { useState } from "react";
import useMovieReviews from "../../../../hooks/useMovieReviews";
import {
    ReviewContainer,
    ReviewCard,
    Author,
    Content,
    DetailedReview,
    MoreButton,
} from "./Review.style";

const Review = ({ id }) => {
    const { data: reviews } = useMovieReviews(id);
    const [selectedReview, setSelectedReview] = useState(null);

    const handleReviewClick = (review) => {
        setSelectedReview(selectedReview?.id === review.id ? null : review);
    };

    return (
        <div>
            {reviews?.length === 0 ? (
                <p
                    style={{
                        textAlign: "center",
                        color: "#777",
                        margin: "20px 0",
                    }}
                >
                    리뷰가 없습니다.
                </p>
            ) : (
                <ReviewContainer>
                    {reviews?.map((review) => (
                        <ReviewCard
                            key={review.id}
                            onClick={() => handleReviewClick(review)}
                        >
                            <Author>{review.author}</Author>
                            <Content>
                                {review.content.substring(0, 100)}...
                            </Content>
                        </ReviewCard>
                    ))}
                </ReviewContainer>
            )}

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
