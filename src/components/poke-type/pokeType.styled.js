import styled from "styled-components";

export const PokeIconsBg = styled.div`
    font-size: 14px;
    border-radius: 10px;
    width: ${props=>props.iconbgwidth}; ;
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 4px;
    background-color: ${props=>props.bgcolor};
    height:  ${props=>props.iconbgheight}; //24
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
    font-size: ${props=>props.fontSize};;
`;

export const PokeIcons = styled.img`
    width: ${props=>props.iconwidth}; //15
    margin: 4px;
    margin-left:6px
`;