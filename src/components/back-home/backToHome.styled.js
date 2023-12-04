import styled from "styled-components";

export const PokeLogo = styled.img`
    cursor: pointer;
    max-width: 150px;
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
`