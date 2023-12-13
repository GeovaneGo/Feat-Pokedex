import styled from "styled-components";

export const PokeIconsBg = styled.div`
    font-size: 14px;
    border-radius: 5px;
    width: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 4px;
    background-color: ${props=>props.bgcolor};
    height:  24px;
    cursor: pointer;
    &:hover {
        animation: tilt 200ms;
        @keyframes tilt {
            0% {
                transform: translatey(0px);
            }            
            50% {
                transform: translatey(-5px);
            }
            100% {
                transform: translatey(0px);
            }
        }
    }
`;

export const TypesGrid = styled.div`
    display: flex;
    justify-content: center;
    min-width: 210px;
    margin-top: 25px;
`;

export const TypeLabel = styled.label`
    text-align: center;
    margin: 4px;
    font-size: 16;
    cursor: pointer;
`;

export const PokeIcons = styled.img`
    width: 15px; //15
    margin: 4px;
    margin-left:6px
`;