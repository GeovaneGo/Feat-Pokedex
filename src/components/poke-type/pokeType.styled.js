import styled from "styled-components";

export const PokeIconsBg = styled.a`
    font-size: 14px;
    border-radius: 5px;
    width: ${props=>props.iconbgwidth}; ;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 4px;
    background-color: ${props=>props.bgcolor};
    height:  ${props=>props.iconbgheight}; //24
    box-shadow: 0px 0px 3px #b3ffff;
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
    font-size: ${props=>props.fontSize};
    cursor: pointer;
`;

export const PokeIcons = styled.img`
    width: ${props=>props.iconwidth}; //15
    margin: 4px;
    margin-left:6px
`;