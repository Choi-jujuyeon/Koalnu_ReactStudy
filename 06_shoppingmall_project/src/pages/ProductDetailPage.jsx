import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const ProductDetailPage = () => {
    //id 값을 가져온다
    let { id } = useParams();
    const [product, setProduct] = useState();

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/Choi-jujuyeon/TESTDATA/products/${id}`;

        //url fetch하는 작업
        let response = await fetch(url);
        let data = await response.json();
        // console.log("data:", data);
        setProduct(data);
    };
    // API 호출은 항상 useEffect에서 실행
    useEffect(() => {
        getProductDetail();
    }, []);
    return (
        <Container>
            <IMG>
                <img src={product?.img} alt="" />
            </IMG>
            <Detail>
                <h3>{product?.title}</h3>
                <h4>{product?.price}</h4>
                {/* 사이즈 */}
                <h6>사이즈 선택</h6>

                <RadioInput>
                    {product?.size?.map((size, index) => (
                        <Label key={index}>
                            <RadioInputStyled
                                type="radio"
                                name="size-radio"
                                value={size}
                                defaultChecked={index === 0}
                            />
                            <Text>{size}</Text>
                        </Label>
                    ))}
                </RadioInput>
                <AddToCartButton>장바구니에 추가하기</AddToCartButton>
            </Detail>
        </Container>
    );
};

export default ProductDetailPage;
const Container = styled.div`
    width: 90%;
    display: flex;
    gap: 100px;
    justify-content: space-between;
`;
const IMG = styled.div`
    height: auto;
`;
const Detail = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    h4 {
        margin-top: 8px;
    }
`;

const RadioInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 20px;
    width: 220px;
    height: 60px;
    position: relative;
    cursor: pointer;
    border-radius: 10px;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 240px;
        height: 45px;
        transform: translate(-50%, -50%);
        z-index: -1;
        border: 2px solid transparent;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    &:hover::before {
        background-color: #f4f4f4;
    }

    &:has(input:checked)::before {
        background-color: #fff0f0;
        border-color: #e60023; /* H&M 레드 */
        height: 60px;
    }
`;

const Text = styled.p`
    color: #111;
    font-weight: 600;
`;

const RadioInputStyled = styled.input.attrs({ type: "radio" })`
    appearance: none;
    background-color: #fff;
    border: 2px solid #e60023;
    width: 17px;
    height: 17px;
    border-radius: 100%;
    position: relative;

    &:checked {
        background-color: #e60023;
        animation: ${pulse} 0.7s forwards;
    }

    &::before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3.5px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        transform: scale(0);
        transition: transform 0.2s ease;
    }

    &:checked::before {
        transform: scale(1);
    }
`;
const AddToCartButton = styled.button`
    margin-top: 80px;
    width: 90%;
    background-color: #1a1a1a; /* 블랙에 가까운 다크 그레이 */
    color: white;
    border: none;
    padding: 14px 24px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #b31f2a; /* H&M 스타일 레드 */
    }

    &:active {
        transform: scale(0.98);
    }
`;
