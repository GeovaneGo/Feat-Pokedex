import { DefaultLabel, MenuDiv } from "./filters.styles";

export const FiltersMenu =()=>{
    return (
        
        <MenuDiv>
          <DefaultLabel>
              Ordenar por:
          </DefaultLabel>
          <select>
            <option value="someOption">Some option</option>
            <option value="otherOption">Other option</option>
          </select>
        </MenuDiv>
    )
}

export default FiltersMenu;