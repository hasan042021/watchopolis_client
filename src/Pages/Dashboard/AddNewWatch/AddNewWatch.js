import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

const AddNewWatch = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: 5 }} onSubmit={handleSubmit(onSubmit)}>
            <TextField variant="standard" placeholder="Image Url" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("img")} />
            <TextField variant="standard" placeholder="Title" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} {...register("title")} />
            <TextField variant="standard" placeholder="price" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("price")} />
            <TextField variant="standard" placeholder="specification1" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec1")} />
            <TextField variant="standard" placeholder="specification2" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec2")} />
            <TextField variant="standard" placeholder="specification3" sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2 }} type="text" {...register("spec3")} />
            <TextField variant="standard" placeholder="Description" rows={3} multiline sx={{ width: { lg: '45%', md: '65%', xs: '80%' }, my: 2, resize: 'vertical' }} type="number" {...register("age", { min: 18, max: 99 })} />
            <Button variant="contained" type="submit" >ADD WATCH</Button>
        </Box>
    );
};

export default AddNewWatch;