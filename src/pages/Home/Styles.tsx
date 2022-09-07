import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
     width: 100%;
     height: 100%;

     min-height: 100%;
     min-height: 100vh;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;

export const Box = styled.div`
    padding: 25px;
    padding-bottom: 50px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(50, 58, 73);
`;

export const TextTop = styled.h5`
    font-size: 12px;
    color: rgb(82, 255, 168);
    margin-bottom: 25px;
`;

export const Text = styled.h3`
    font-family: 'quote', Courier, monospace;
    font-size: 20px;
    text-align: center;
    color: rgb(206, 227, 233);
    max-width: 380px;
    margin-bottom: 30px;
`;

export const Circle = styled.button`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-top: -20px;

    text-decoration: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(82, 255, 168);

    :hover{
        background-color: rgb(149, 253, 201);
        transition:all 0.5s ease-in-out;
    };
`;

export const Spiner = styled.div`
    @keyframes spiner {
        to{ transform: rotate(0.5turn) }
    }

    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6.4px solid;
    border-color: rgb(169, 252, 210) #0000;
    
    animation: spiner 1s linear infinite;
`