import React from 'react';
import { Box, Typography } from "@mui/material";

export const titleForFilterPage = (name, num) => {
    return (
        "Купити " + name + " для жінок та чоловіків " +
        "- висока якість і низькі ціни з доставкою в Київ та по Україні в " +
        "інтернет магазині Wear and Enjoy it - сторінка " + num
    );
};

export const descriprionForFilterPage = (name, num) => {
    return (
        "20% заробітку йде на благодійність! " +
        "Гарантія повернення, накладений платіж, купити якісні " + name + " недорого. " +
        "Спробуйте! Магазин чоловічого та жіночого одягу. - сторінка " + num
    );
};

export const titleForPaginationPages = (num) => {
    return (
        "Купити чоловічий та жіночий одяг - висока якість і " +
        "низькі ціни з доставкою в Київ та по Україні в " +
        "інтернет магазині Wear and Enjoy it" + (num ? (" - сторінка " + num) : "")
    );
};

export const descriptionForPaginationPages = (num) => {
    return (
        "Гарантія повернення, накладений платіж, " +
        "швидка доставка. Спробуйте! Доступні ціни, недорого. " +
        "Купити cтильний та якісний одяг для чоловіків та жінок в магазині одягу." +
        (num ? (" - сторінка " + num) : "")
    );
};

export const welcomeText = (categories = []) => {
    const text = [
        "Вітаємо в нашому інтернет магазині😄",
        "Тут зможете купити якісні товари",
        "Детальніше на ст.",
        "про нас"
    ]

    return (
        <><Typography component="p" variant="h5" style={{ fontWeight: 500, marginBottom: '0.2rem' }}>
            {text[0]}
        </Typography>
            <Typography component="h1">
                {text[1]}
                {categories.length > 0 && ", зокрема: "}
                {categories.map((cat, index) => (
                    <React.Fragment key={cat}>
                        <a style={{ color: 'green', textDecoration: 'none', }} href={`/${cat}/page1`}>{getName(cat)}</a>
                        {index < categories.length - 1 ? ", " : "."}
                    </React.Fragment>
                ))}
            </Typography>
            <Box sx={{ marginBottom: '0.5rem' }}>
                {text[2]}{" "}<a href="/about-as" style={{ color: 'green', fontWeight: 600, textDecoration: 'none' }}>{text[3]}</a>
            </Box></>
    )
}

export const page404text = () => {
    return (
        <h1>Не можу знайти цю сторінку :((</h1>
    )
}

export const getName = (value) => {
    const translations = {
        'hoodies': 'Худі',
        'T-shirts': 'Футболки',
        'suits': 'Костюми',
        'trousers': 'Штани',
        'travel-bags': 'Дорожні сумки',
        'backpacks': 'Рюкзаки',
        'business-and-laptop-bags': 'Бізнес та ноутбуки',
        'sport-and-active-bags': 'Спорт та актив',
        'accessories': 'Аксесуари'
    };

    if (translations[value]) {
        return translations[value];
    }

    // Fallback: capitalize and replace hyphens
    return value
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
