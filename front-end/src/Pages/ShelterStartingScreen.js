import { Routes, Route } from "react-router-dom";
import PetForm from "../Components/Forms/PetForm";
import HomeScreen from "../Pages/ShelterPages/HomeScreen"
import { useState, useEffect } from "react";
import axios from 'axios';

import EditPetForm from "../Components/Forms/EditPetForm";
import ShowPage from "./ShelterPages/ShowPage";


export default function ShelterStartingScreen() {
    const [pets, setPets] = useState([]);
    const [shelterInfo, setShelterInfo ] = useState([]);

    useEffect(() => {
      getPets();
      getShelters();
    }, []);
  
    const getPets = async () => {
      await axios.get(`https://pawster.onrender.com/pets`).then((res) => {
        const data = res.data
        console.log(data)
        setPets(data)
      }).catch((c) => console.warn("catch", c));
    }

    const getShelters = async () => {
      await axios.get(`https://pawster.onrender.com/shelters`).then((res) => {
        const data = res.data
        console.log(data)
        setShelterInfo(data)
      }).catch((c) => console.warn("catch", c));
    }


    return (
        <>
                <Routes>
                    <Route path="/" />
                    <Route path="/:id" element={<HomeScreen pets={pets} shelterInfo={shelterInfo}/>} />
                    <Route path="/:id/new" element={ <PetForm />} />
                    <Route path="/:id/edit/:petId" element={ <EditPetForm />} />
                    <Route path="/:id/show/:petId" element={ <ShowPage />} />
                    <Route path="/:id/settings" element={ "<Settings />"} />
                </Routes>
        </ >
    )

}






