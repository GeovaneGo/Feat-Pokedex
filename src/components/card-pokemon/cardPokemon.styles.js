import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    background-color: #f9f9f9;
    justify-content: center;
    margin: 8px;
    width: 90%;
    height: 335px;
    min-width: 220px;
    box-shadow: 0px 0px 11px #e6e6e6;
    border-radius: 10px ;
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
    border-radius: 5px;
    width: 180px;
    height: 180px;
    justify-self: center;
    background: url(${props=>props.bgimage}) center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;    
    animation: ${props=>props.pokename} 1s infinite linear;
    transition: ease all 0.5s;
    @keyframes ${props=>props.pokename} {
        100% {
            transform: rotate(${props=>props.rotate});
        }
}


`;

export const DefaultImg = styled.img`
    width: 100%;    
    max-width: 200px;
    max-height: 200px;
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
    border-radius: 5px;
`;

export const PokeNumber = styled.strong`
    text-align: center;
    color: white;
    margin: 8px;
`;