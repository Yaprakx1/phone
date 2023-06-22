import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux';
import { setJobs } from '../redux/jobSlice';

const JobList = () => {
    const dispatch = useDispatch();

  const state =  useSelector((store) => store.jobReducer);
  


    useEffect(()=>{
        axios
        .get('http://localhost:3060/jobs')
        .then((res)=>dispatch(setJobs(res.data)));
    },[]);


  console.log(state);
  return (
    <div>
      <h3>{state.jobs.lenght} :iş bulundu </h3>
    </div>
  )
}

export default JobList
