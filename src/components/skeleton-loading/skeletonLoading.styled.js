import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Content = styled.div `
    margin: 8px;
    width: 90%;
    height: 335px;
    min-width: 220px;
    margin: 8px;
    justify-content: center;
    opacity: 0.6;
    border-radius: 10px;
    position: relative;
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
export const GridWrapper = styled.div`
    display: grid;
    padding: 50px 80px;
    min-height: 73.5dvh;
    grid-template-columns: 1fr;

    @media (min-width: 600px){        
        grid-template-columns: 1fr 1fr;
        padding: 50px 100px;
    }

    @media (min-width: 900px){        
        grid-template-columns: 1fr 1fr 1fr;
        padding: 50px 150px;
    }

    @media (min-width: 1270px){        
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding: 50px 200px;
    }

    @media (min-width: 1520px){      
        padding: 50px 250px;     
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;