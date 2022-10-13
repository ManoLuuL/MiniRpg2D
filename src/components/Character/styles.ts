import  styled  from 'styled-components';

export const Container = styled.div<{
    Left: number;
    Top: number;
    Size: number;
    sidePosition: number;
}>`
    width: ${p => p.Size}px;
    height: ${p => p.Size}px;
    position: absolute;
    left: ${p => p.Left}px;
    top: ${p => p.Top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${p => p.sidePosition}px;
`;

export const NameBox = styled.div`
    background-color: #000;
    padding: 3px;
    border-radius: 5px;
    position: absolute;
    font-size: 10px;
    text-align: center;
    margin-top: -20px;
`;