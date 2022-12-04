import axios from 'axios';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap/';
// import DisplayPets from './DisplayPets';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const API = process.env.REACT_APP_API_URL;

function PetEditForm() {
    let { id, petId } = useParams();
    const navigate = useNavigate()

    const [petInfo, setPetInfo] = useState({
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
    });

    useEffect(() => {
        axios.get(`${API}/pets/${petId}`).then(
            (response) => setPetInfo(response.data),
            (error) => navigate(`*`)
        );
    }, [petId, navigate]);




    const updatePetInfo = (updatedPet, petId) => {
        axios
            .put(`${API}/pets/${petId}`, updatedPet)
            .then(
                () => {
                    navigate(`/pets/${petId}`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };


    const handleTextChange = (event) => {
        setPetInfo({ ...petInfo, [event.target.id]: event.target.value });
    };
    
    const handleBooleanChange = (event) => {
        console.log(event.target.value == 'true')
        event.target.value == 'true' ? 
            setPetInfo({ ...petInfo, [event.target.id]: event.target.value === 'true' }) :
            setPetInfo({ ...petInfo, [event.target.id]: false });
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        updatePetInfo(petInfo, petId);
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                {/* Name */}
                <Form.Group className="m-3 petName" >
                    <Form.Label>Pet's Name</Form.Label>
                    <Form.Control
                        id="name"
                        placeholder="Enter Pet's Name"
                        onChange={handleTextChange}
                        value={petInfo['name']}
                    // required
                    />
                </Form.Group>

                {/* Type */}
                <div className="m-3 petType">
                    <Form.Group controlId="type">
                        <Form.Label>Type of Pet</Form.Label>
                        <Form.Control
                            as="select"
                            value={petInfo['type']}
                            onChange={handleTextChange}
                        >
                            <option value="">Please select</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                {/* Breed */}
                <Form.Group className="m-3 petBreed" >
                    <Form.Label>Breed</Form.Label>
                    <Form.Control
                        id="breed"
                        placeholder="Enter Pet's Breed"
                        onChange={handleTextChange}
                        value={petInfo['breed']}
                    // required
                    />
                </Form.Group>

                {/* Size */}
                <div className="m-3 petSize">
                    <Form.Group controlId="size">
                        <Form.Label>Pet Size</Form.Label>
                        <Form.Control
                            as="select"
                            value={petInfo['size']}
                            onChange={handleTextChange}
                        >
                            <option value="">Please select</option>
                            <option value="Small">Small Size (22lbs or less)</option>
                            <option value="Medium">Medium Size (23lbs to 55lbs)</option>
                            <option value="Large">Larger Size (56lbs and over)</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                {/* Maintence */}
                <div className="m-3 petMaintenanceLevel">
                    <Form.Group controlId="maintenance_level">
                        <Form.Label>Pet Maintenance Level</Form.Label>
                        <Form.Control
                            as="select"
                            value={petInfo['maintenance_level'] || 'Low'}
                            onChange={handleTextChange}
                        >
                            <option value="">Please select</option>
                            <option value="Low">Low</option>
                            <option value="Mid">Mid</option>
                            <option value="High">High</option>
                        </Form.Control>
                    </Form.Group>
                </div>


                {/* Type */}
                <Form.Group className="m-3 form-control" controlId="gender" onChange={handleTextChange}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Check
                        label='Female'
                        name="gender"
                        type="radio"
                        value="Female"
                        defaultChecked={petInfo['gender'] === 'Female' ? 'true' : 'false'}
                    />
                    <Form.Check
                        label='Male'
                        name="gender"
                        type="radio"
                        value="Male"
                        defaultChecked={petInfo['gender'] === 'Male' ? 'true' : 'false'}
                    />
                </Form.Group>

                <div className="m-3 petAge">
                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            as="select"
                            value={petInfo['age']}
                            onChange={handleTextChange}
                        >
                            <option value="">Please select</option>
                            <option value="Baby">Baby</option>
                            <option value="Adult">Adult</option>
                        </Form.Control>
                    </Form.Group>
                </div>

                <Form.Group className="m-3 petColor" >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        id="color"
                        placeholder="Describe Pet's Color"
                        onChange={handleTextChange}
                        value={petInfo['color'] || 'none provided'}
                    />
                </Form.Group>

                <Form.Group className="m-3 petDescription" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        id="description"
                        placeholder="Enter Brief Description"
                        onChange={handleTextChange}
                        value={petInfo['description'] || ' ~ none provided ~ '}
                    // required
                    />
                </Form.Group>

                {/* Spayed / Neutered */}
                <Form.Group className="m-3 form-control" onChange={handleBooleanChange}>
                    <Form.Label>Spayed / Neutered</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="spayed_neutered"
                        id="spayed_neutered"
                        type="radio"
                        value='true'
                        defaultChecked={ petInfo['spayed_neutered'] }
                    />

                    {console.log(!petInfo['spayed_neutered'])}

                    <Form.Check
                        label='No'
                        name="spayed_neutered"
                        id="spayed_neutered"
                        type="radio"
                        value='false'
                        defaultChecked={ petInfo['spayed_neutered'] == 'false' }
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" onChange={handleBooleanChange}>
                    <Form.Label>House Trained</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="house_trained"
                        id="house_trained"
                        type="radio"
                        value='true'
                        defaultChecked={ petInfo['house_trained']  }
                    />

                    <Form.Check
                        label='No'
                        name="house_trained"
                        id="house_trained"
                        type="radio"
                        value='false'
                        defaultChecked={ !petInfo['house_trained'] }
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" onChange={handleBooleanChange}>
                    <Form.Label>Declawed</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="declawed"
                        id="declawed"
                        type="radio"
                        value="true"
                        defaultChecked={ petInfo['declawed'] }
                    />
                    <Form.Check
                        label='No / Not Applicable'
                        name="declawed"
                        id="declawed"
                        type="radio"
                        value="false"
                        defaultChecked={!petInfo['declawed']}
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" onChange={handleBooleanChange}>
                    <Form.Label>Do they have special needs?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="special_needs"
                        id="special_needs"
                        type="radio"
                        value="true"
                        defaultChecked={petInfo['special_needs']}
                    />

                    <Form.Check
                        label='No'
                        name="special_needs"
                        id="special_needs"
                        type="radio"
                        value="false"
                        defaultChecked={ !petInfo['special_needs'] }
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" onChange={handleBooleanChange}>
                    <Form.Label>Are they up to date with their shots?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="shots_current"
                        id="shots_current" 
                        type="radio"
                        value='true'
                        defaultChecked={petInfo['shots_current']}
                    />
                    <Form.Check
                        label='No'
                        name="shots_current"
                        id="shots_current" 
                        type="radio"
                        value='false'
                        defaultChecked={ !petInfo['shots_current']}
                    />
                </Form.Group>

                <Form.Group className="m-3 form-control" controlId="status" onChange={handleTextChange}>
                    <Form.Label>Are they up for adoption?</Form.Label>
                    <Form.Check
                        label='Yes'
                        name="status"
                        type="radio"
                        value="adoptable"
                        defaultChecked={petInfo['status'] === 'adoptable' ? 'true' : 'false'}
                    />

                    <Form.Check
                        label='No'
                        name="status"
                        type="radio"
                        value={null}
                        defaultChecked={!petInfo['status'] ? false : true}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" id="userForm-btn">
                    Submit
                </Button>
                <Link to={`/shelter/${id}`}>
                    <Button>Nevermind!</Button>
                </Link>
            </Form>
        </>
    )
}

export default PetEditForm