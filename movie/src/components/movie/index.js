import React from 'react';
import { StyledWrapper, Title, Year, Description } from './styles';

const Movie = ({title, year, description}) => (
    <StyledWrapper>
        <Title>{title}</Title>
        <Year>Year: {year}</Year>
        <Description>{description}</Description>
    </StyledWrapper>
);

export default Movie;