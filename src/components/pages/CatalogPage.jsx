import React, {useEffect} from "react";
import { Cards } from './../card/Cards';
import { useSelector, useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/operations";


const CatalogPage = () => {

  const dispatch = useDispatch();
    const cars = useSelector(state => state.adverts.cars);

    useEffect(() => {
    dispatch(fetchAdverts());
    }, [dispatch]);
    
    return (
        <Cards cars={cars} />
    );
};

export default CatalogPage;
