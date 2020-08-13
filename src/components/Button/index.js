import styled from 'styled-components';

const Button = styled.button `
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    }
    
    @media (max-width: 800px) {
        background-color: var(--primary);
        border-radius: 0;
        border: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        right: 0;
        position: fixed;
        outline: 0;
        text-align: center;
    }
}
`;

export default Button;