import { Typography } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { getName } from './texts';

const Filter = (props) => {
    const { alignment, setAlignment, setProducts, products, categories = [] } = props;
    const navigate = useNavigate();

    const handleAlignment = (event, newAlignment) => {
        if (!newAlignment) {
            navigate('/');
            setProducts(products);
            setAlignment(newAlignment);
            return;
        }
        setAlignment(newAlignment);

        navigate('/' + (newAlignment ? newAlignment + '/page1' : ''));

        setProducts(products.filter((good) =>
            good.category.includes(newAlignment)
        ));
    };

    const giveFilter = (elementEng) => {
        let element = getName(elementEng)
        return (
            <Typography
                variant="subtitle2"
                component="span"
                sx={{
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' }
                }}>
                {element}
            </Typography>
        );
    }


    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            color='success'
            sx={{
                marginBottom: '10px',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
            }}>

            {categories.map((cat) => (
                <ToggleButton
                    key={cat}
                    value={cat}
                    sx={{
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        borderRadius: '4px !important',
                        flex: '1 0 auto',
                        minWidth: '100px',
                        padding: '10px'
                    }}>
                    {giveFilter(cat)}
                </ToggleButton>
            ))}

        </ToggleButtonGroup>
    );
}


export default Filter;