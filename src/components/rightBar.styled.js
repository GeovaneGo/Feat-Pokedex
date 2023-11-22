import styled from "styled-components";

export const DivRightBar = styled.div`
    width: 600px;
    height: 715.531px;
    position: absolute;
    ${props=>props.display};
    z-index: 1120;
    right: 0;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    background-color: #FFF;
    border-radius: 20px;
    animation: fadeIn 200ms;
    @keyframes fadeIn {
        0% {
            transform: translatex(600px);
        }            
        100% {
            transform: translatex(0px);
        }
    }
`   
export const RightBarHeader = styled.div`
    background-color: #d6d3d49e;
    height: 60px;   
    display: flex;
`;

export const RightBarFooter = styled.div`
    background-color: #d6d3d49e;
    height: 50px;     
    bottom:0;
    width:100%;
    position: absolute;
`;
