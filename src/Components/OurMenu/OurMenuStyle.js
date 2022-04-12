import Styled from "styled-components";

export const OurMenuStyle = Styled.div`
    ${(props) => {
      let theme = props.theme;
      return `
            background:rgba(${theme.gray},1);
            width:100%;
            color:rgba(${theme.secondary},1);
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            position:relative;

            >h2{
                justify-content:center;
                align-items:center;

                display:flex;
                flex-direction:column;
                position: absolute;
                top:50px;
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
            .wrapper{
                margin:0 auto; 
                display:flex;
                flex-direction:row;


                ${theme.wrapper};
                ${theme.mMX_XL}
                {
                    width:90%;
                }

                >div{
                    flex-basis:1;
                    flex-grow: 1;
                    flex-shrink: 0;
                    max-width:25%;
                    min-width:25%;
                    width:25%;
                    padding:200px 0 0 0;


                    h3{
                        ${theme.fontPrimary};
                        ${theme.f3XL};
                        font-weight:700;
                        color:rgba(${theme.secondary},1);
                        text-transform: uppercase;
                        line-height:1;
                    }
                }
                >div:nth-child(1){
                    padding-left:${theme.gLG};
                    padding-right:${theme.gMD};
                    border-right:${theme.border};
                }
                >div:nth-child(2),>div:nth-child(3){
                    padding-left:${theme.gMD};
                    padding-right:${theme.gMD};
                    border-right:${theme.border};
                }
                >div:nth-child(4){
                    padding-left:${theme.gMD};
                    padding-right:${theme.gLG};
                }

                ${theme.mMX_MD}{
                    flex-wrap:wrap;
                    >div{
                        flex-basis:1;
                        flex-grow: 1;
                        flex-shrink: 0;
                        max-width:calc(50% - 25px);
                        min-width:calc(50% - 25px);
                        width:calc(50% - 25px);
                    }
                    >div:nth-child(2){
                        padding-right:unset;
                        border-right:unset;
                    }
                }

                ${theme.mMX_DF}{
                    >div{
                        flex-basis:1;
                        flex-grow: 1;
                        flex-shrink: 0;
                        max-width:calc(100% - 25px);
                        min-width:calc(100% - 25px);
                        width:calc(100% - 25px);
                        padding-right:unset;
                        border-right:unset!important;
                    }
                }
            }
        `;
    }}
`;
