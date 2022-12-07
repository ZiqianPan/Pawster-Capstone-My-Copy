import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { Stack } from '@mui/material';
import Controls from './controls/Controls';
import { useForm, Form } from './Form.js';
// import { useParams, useNavigate } from 'react-router-dom';

import { getPetType, getPetSize, getPetMaintenance, getPetAge, getGenderItems, getYesOrNo, getDeclawedItems, getAdoptionStatus } from "./petsSelect/petsSelect"


export default function PetForm() {
    // let { id } = useParams();
    // console.log(id)
    // const navigate = useNavigate()

    const initialFValues = {
        name: "",
        breed: "",
        gender: "",
        age: "",
        color: "",
        size: "",
        type: '',
        maintenance_level: '',
        spayed_neutered: null,
        house_trained: null,
        description: null,
        declawed: null,
        special_needs: null,
        shots_current: null,
        status: null,
        shelter_id: 1,
    }

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true);

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        // if (validate()){
        //     // employeeService.insertEmployee(values)
        //     resetForm()
        // }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Stack
                direction="column"
                alignItems="center"
                sx={{ py: 4 }}
                >
                <Grid item xs={6}>
                    <Controls.Input
                        name="name"
                        label="Pet's Name"
                        value={values.name}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Breed"
                        name="breed"
                        value={values.breed}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Color"
                        name="color"
                        value={values.color}
                        onChange={handleInputChange}

                    />
                    <Controls.Input
                        label="Description"
                        name="description"
                        value={values.description}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="status"
                        label="Are they up for adoption?"
                        value={values.status}
                        onChange={handleInputChange}
                        items={getAdoptionStatus}
                    />
                    <Controls.RadioGroup
                        name="type"
                        label="Type of Pet"
                        value={values.type}
                        onChange={handleInputChange}
                        items={getPetType}
                    />
                    <Controls.RadioGroup
                        name="size"
                        label="Pet Size"
                        value={values.size}
                        onChange={handleInputChange}
                        items={getPetSize}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={getGenderItems}
                    />
                    <Controls.Select
                        name="maintenance_level"
                        label="Pet Maintenance Level"
                        value={values.maintenance_level}
                        onChange={handleInputChange}
                        options={getPetMaintenance}
                    />
                    <Controls.Select
                        name="age"
                        label="Pet's Age"
                        value={values.age}
                        onChange={handleInputChange}
                        options={getPetAge}
                    />
                
                
                    <Controls.Select
                        name="spayed_neutered"
                        label="Has the pet been spayed / neutered?"
                        value={values.spayed_neutered}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />

                    <Controls.Select
                        name="house_trained"
                        label="Is the Pet House Trained?"
                        value={values.house_trained}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                    <Controls.Select
                        name="declawed"
                        label="Has the pet been declawed?"
                        value={values.declawed}
                        onChange={handleInputChange}
                        options={getDeclawedItems}
                    />
                    <Controls.Select
                        name="special_needs"
                        label="Does the pet have special needs?"
                        value={values.special_needs}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                    <Controls.Select
                        name="shots_current"
                        label="Are they up to date with their shots?"
                        value={values.shots_current}
                        onChange={handleInputChange}
                        options={getYesOrNo}
                    />
                </Grid>
                <div>
                    <Controls.Button
                        type="submit"
                        text="Submit" />
                    <Controls.Button
                        text="Reset"
                        color="default"
                        onClick={resetForm} />
                </div>

            </Stack>
        </Form>
    )
}