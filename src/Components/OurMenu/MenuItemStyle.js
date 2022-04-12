import Styled from "styled-components";

export const MenuItemStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            margin:${theme.g2XL} 0;
            display:flex;
            flex-direction:column;

            >b{
                ${theme.fontSecondary};
                ${theme.fLG};
                font-weight:700;
                text-transform: uppercase;
            }
            >p{
                margin:${theme.gMD} 0;
            }

            >span{
                border:1px solid rgba(${theme.primary},1);
                width: fit-content;
                padding:${theme.gSM};
            }
      `;
    }}
`;
