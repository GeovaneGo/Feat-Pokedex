import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${props=>props.gap};
`

export const Content = styled.div `
    min-height: 350px;
    min-width: 240px;
    max-width: 300px;
    width: ${props=>props.width};
    height: ${props=>props.height};
    opacity: 0.6;
    border-radius: 5px;
    background: linear-gradient(
        90deg,
        #647a80 0%,
        #dad4d4 50%,
        #647a80 100%        
    );
    background-size: 400% 400%;
    animation: animator 1.2s ease-in-out infinite;
    @keyframes  animator {
        from {            
            background-position: 0% 0%;
        }
        to {
            background-position: 135% 135%;
        }
    }
`