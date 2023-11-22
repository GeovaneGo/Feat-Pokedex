import styled from "styled-components"

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    margin: 8px;
    width: 90%;
    min-width: 220px;
    box-shadow: 0px 0px 11px #e6e6e6;
    border-radius: 20px ;
    position: relative;
    cursor: default;
    &:hover {
        
        box-shadow: 0px 0px 12px #94e6fa;
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

export const PoketypesContainer = styled.a`
    display: flex;
    border-radius: 10px;
    width: 180px;
    height: 180px;
    justify-self: center;
    background: url(${props=>props.bgimage}) center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const DefaultImg = styled.img`
    width: 100%;    
    max-width: 160px;
    max-height: 160px;
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

export const PokeNumber = styled.strong`
    text-align: center;
    color: white;
    margin: 8px;
`;