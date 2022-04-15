import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar,carForUpdate,setUpdatedCar,setCarForUpdate}) => {
    // const [formError, setFormError] = useState({});
    const {reset, handleSubmit, register,setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(()=>{
        if(carForUpdate){
            const {model,price,year} = carForUpdate;
            setValue("model",model);
            setValue("price",price);
            setValue("year",year);
        }

    },[carForUpdate])

    const submit = async (car) => {
        try {
            if(carForUpdate){
                const {data}=await carService.update(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(null);
                //setNewCar(data);
            }else {
                const {data} = await carService.create(car);
                setNewCar(data);
            }

            reset();

        } catch (e) {
            // setFormError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text"{...register("model")}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            <div><label>Price: <input type="number"{...register("price", {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            <div><label>Year: <input type="number"{...register("year", {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            <button>{carForUpdate?"update":"create"}</button>
        </form>
    );
};

export {CarForm};
