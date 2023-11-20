import styled from "styled-components"

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    margin: 8px;
    width: 90%;
    min-width: 220px;
    cursor: pointer;
    box-shadow: 0px 0px 11px #e6e6e6;
    border-radius: 20px ;
    position: relative;
    &:hover {
        animation: tilt 200ms;
        @keyframes tilt {
            0% {
                transform: translatey(0px);
            }            
            50% {
                transform: translatey(-10px);
            }
            100% {
                transform: translatey(0px);
            }
        }
    }
`;


export const PokeName = styled.strong`
    color: #368389;
    font-size: 20px;
    justify-self: center;
    height: 24px;
`;

export const DefaultImg = styled.img`
    width: 100%;    
    max-width: 175px;
    max-height: 175px;
    opacity: 0.85;
    margin: auto;
`;

export const CardTypeBg = styled.div`
    background-color: #6f737b;
    text-align: center;
    height: 24px;    
    min-width: 200px;
    font-family: 'Poppins', sans-serif;
    bottom:0;
    width:100%;
    border-radius: 10px;
`;

export const PoketypesContainer = styled.div`
    display: flex;
    border-radius: 10px;
    width: 180px;
    height: 180px;
    justify-self: center;
    background-color: #d2dcdd69;
`;

export const TypesGrid = styled.div`
    display: flex;
    justify-content: center;
    min-width: 210px;
`;

export const PokeIconsBg = styled.div`
    font-size: 14px;
    border-radius: 10px;
    width: 90px;
    padding: 4px;
    display: flex;
    align-items: center;
    margin: 4px;
    background-color: ${props=>props.bgColor};
    height: 24px;
`;

export const PokeIcons = styled.img`
    width: 15px;
    height: 15px;
    margin: 4px;
`;

export const PokeNumber = styled.strong`
    text-align: center;
    color: white;
    margin: 8px;
`;