import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const MyOrder = (props) => {

    const { order = [], promocode = "", promocodes = {} } = props;
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [postNumber, setPostnumber] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [coment, setComent] = useState('');

    const getDiscount = () => {
        if (promocode !== "") {
            for (const [promo, discount] of Object.entries(promocodes)) {
                if (promocode === promo) {
                    return discount / 100;
                }
            }
        }
        return 0;
    };

    const sumWithoutDisc = order.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    const discount = getDiscount();
    const sumWithDisc = parseInt(sumWithoutDisc * (1 - discount), 10);

    const send = async () => {
        const orderData = {
            customer: {
                name,
                city,
                postNumber,
                phone,
                email,
                comment: coment
            },
            items: order,
            totalWithoutPromo: sumWithoutDisc,
            appliedPromo: promocode,
            totalWithPromo: sumWithDisc
        };

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                alert('Замовлення успішно відправлено!');
                // Optionally clear form or redirect
            } else {
                alert('Помилка при відправці замовлення.');
            }
        } catch (error) {
            console.error('Error sending order:', error);
            alert('Сталася помилка при з\'єднанні з сервером.');
        }
    };


    const TakeOrder = () => {
        send()
    };

    return (
        // <Box
        //     component="form"
        //     sx={{
        //         '& .MuiTextField-root': { m: 1, width: '25ch' },
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        <><h1>Оформлення заявки на замовленя</h1>
            <h3>Доставка здійснюється Новою поштою</h3>
            <Box //sx={{ maxWidth: "1900px" }}
            >
                <Grid container spacing={3} >

                    <Grid item md={12} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            id="surname"
                            label="ПІБ"
                            type="text"
                            value={name} onChange={e => setName(e.target.value)}
                        />
                    </Grid>

                    <Grid item md={9} xs={7}>
                        <TextField
                            required
                            id="outlined-search"
                            label="Місто"
                            type="text"
                            sx={{ width: '100%' }}
                            value={city} onChange={e => setCity(e.target.value)}
                        />
                    </Grid>
                    <Grid item md={3} xs={5}>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            id="outlined-number"
                            label="№ відділення"
                            type="number"
                            value={postNumber} onChange={e => setPostnumber(e.target.value)}
                        //type="search"
                        />
                    </Grid>


                    <Grid item md={12} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            required
                            id="outlined-number"
                            label="Ваш номер телефону"
                            type="tel"
                            value={phone} onChange={e => setPhone(e.target.value)}
                        // InputLabelProps={{
                        //     shrink: true,
                        // }}
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="surname"
                            label="Email"
                            type="email"
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField
                            id="outlined-search"
                            label="Коментар чи побажання"
                            type="search"
                            sx={{ width: '100%' }}
                            multiline
                            rows={2}
                            value={coment} onChange={e => setComent(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button sx={{
                    width: '70%', margin: '0 auto', display: 'flex', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    borderRadius: 3,
                    color: 'white',
                    height: 48,
                    //padding: '0 30px',
                    boxShadow: '0 3px 3px 3px rgba(255, 105, 135, .3)',
                    //top: '50px',
                    marginTop: 3,
                    marginBottom: 3,
                }}
                    variant="contained"
                    onClick={TakeOrder}
                >
                    ЗАМОВИТИ
                </Button>
            </Box></>
        //</Box>
    );
}

export default MyOrder;