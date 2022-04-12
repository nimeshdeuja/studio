import Styled from "styled-components";

export const CommunityStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            background:rgba(${theme.white},1);
            width:100%;
            color:rgba(${theme.secondary},1);
            padding:${theme.g2XL} 0;

            .wrapper{
                margin:0 auto; 
                display:flex;
                flex-direction:column;


                ${theme.wrapper};
                ${theme.mMX_XL}
                {
                    width:90%;
                }

                >h2{
                    margin-top:${theme.g2XL};
                    justify-content:center;
                    align-items:center;
                    width: fit-content;
                    align-self: center;

                    margin-bottom:${theme.g2XL};
    
                    display:flex;
                    flex-direction:column;
                    position: relative;
                    ${theme.f4XL};
                    line-height:42px;
    
                    ::after{
                        position: absolute;
                        content: "";
                        height: 5px;
                        background-color: #242424;
                        width: 110%;
                        top: calc(100% - 65px);
                        background:rgba(${theme.primary},1);
                    }
    
                    >span{
                        height:30px;
                        ${theme.fLG};
                        background:rgba(${theme.primary},1);
                        width: fit-content;
                        margin-top:${theme.gLG};
                        text-transform: uppercase;
                        justify-content:center;
                        align-items:center;
                        display:flex;
                        padding:0 ${theme.gSM};
                        
                    }
                    
                }

            }
        `;
    }}
`;
