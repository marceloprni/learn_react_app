import styled from "styled-components";


const DivPersonalizada = styled.div`
    width:  ${props => props.width};
    border: ${props => props.border};
    padding: 25px;
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
    border-radius: ${props => props.borderRadius};
`;

const NavBarPrincipal = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-principal);
   

    li {    
        float: left;
        &:last-child {
            float: right;
        }

        &:first-child {
           margin-left: 20px;
        }
    }

    li a, li Link {
        display: block;
        color: white;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;

        &:hover {
            background-color: var(--cor-setima);
        }
    }
`;



export {
    DivPersonalizada,
    NavBarPrincipal
}