import { DefaultLabel, GridItem, GridMenu, MenuDiv } from "./filters.styles";
import Select from 'react-select'

export const FiltersMenu =()=>{
    const options = [
      { value:"sortNumber", label:"Maior Número"},
      { value:"revertNumber", label:"Menor Número"},
      { value:"sortName", label:"Maior Nome"},
      { value:"revertName", label:"Menor Nome"},
    ]
    return (        
      <MenuDiv>
        <GridMenu>
          <GridItem>
          </GridItem>
          <GridItem>
            <DefaultLabel>
              Ordenar por:
            </DefaultLabel>
            <Select 
              className="basic-single selectComponent"       
              classNamePrefix="sortNumber"
              defaultValue={options[0]}
              options={options}
            />
          </GridItem>
        </GridMenu>
      </MenuDiv>
    )
};

export default FiltersMenu;