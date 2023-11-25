import { DefaultLabel, GridItem, GridMenu, MenuDiv } from "./filters.styles";
export const FiltersMenu =()=>{
    /*const options = [
      { value:"sortNumber", label:"Maior Número"},
      { value:"revertNumber", label:"Menor Número"},
      { value:"sortName", label:"Maior Nome"},
      { value:"revertName", label:"Menor Nome"},
    ]*/
    return (        
      <MenuDiv>
        <GridMenu>
          <GridItem>
            <DefaultLabel>
              Buscar:
            </DefaultLabel>
          </GridItem>
          <GridItem>             
          </GridItem>
        </GridMenu>
      </MenuDiv>
    )
};

export default FiltersMenu;