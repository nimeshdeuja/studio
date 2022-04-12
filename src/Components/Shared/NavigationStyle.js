import Styled from "styled-components";

export const NavigationStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            width:calc(100% - 10px);
            height:40px;
            color:rgba(${theme.secondary},1);

            padding:0 5px;

            display:flex;
            justify-content:flex-start;
            align-items:center;
            text-transform: uppercase;

            position:fixed;
            z-index:100;

            h1{
                ${theme.f2XL};
                ${theme.fontSecondary};
            }

            ul{
                display:flex;
                margin-left:${theme.gXL};
                ${theme.fontSecondary};
                font-weight:400;

                li{
                    margin:0 ${theme.gSM};
                    
                    a{
                        color:rgba(${theme.secondary},1);
                    }
                    
                    a.active{
                        color:rgba(${theme.black},1);
                    }
                }
            }


            ul:last-child{
                margin-left: auto;
            }
        `;
    }}
`;
