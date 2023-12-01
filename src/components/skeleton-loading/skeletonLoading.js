import { useState } from "react";
import { Container, Content, GridWrapper } from "./skeletonLoading.styled";

export const Skeleton =({props})=>{
    const [lines, setLines]=useState(props); 
    const [height, setHeight]=useState('335px'); 
    const [gap, setGap]=useState('10px'); 
    const [width, setWidth]=useState('225px')
    return (
        <Container gap={gap}>
            <GridWrapper>
                {[...Array(lines)].map((_, index)=> (
                    <Content key={index} height={height} width={width}>
                        
                    </Content>
                ))}
            </GridWrapper>
        </Container>
        
    )

}

export default Skeleton;