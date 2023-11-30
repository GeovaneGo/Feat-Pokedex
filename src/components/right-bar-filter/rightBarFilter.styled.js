import styled from "styled-components";

export const DivRightBar = styled.div`
    width: 410px;
    height: 715.531px;
    position: fixed;
    z-index: 1120;
    right: ${props=>props.right};
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    background-color: #FFF;
    border-radius: 10px;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
`;

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

export const MenuBar = styled.div`
    position: absolute;
    display: flex;
    left: -70px;
    top: 20px;
    background-image: url(${props=>props.bgimage});
    background-size: cover;
    width: 70px;
    height: 70px;
    justify-content: center;
    padding: 10px;
`