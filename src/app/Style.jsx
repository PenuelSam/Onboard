"use client";
import { useState } from "react";
import axios from 'axios';


const Style = () => {
  const [firstname, setFirstname] = useState("");
  const [firstname2, setFirstname2] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastname2, setLastname2] = useState("");
  const [address, setAddress] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [streetAddressLine2, setStreetAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [ssn, setSsn] = useState("");
  const [email, setEmail] = useState("");
  const [emergency, setEmergency] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Name:', firstname);
    console.log('Email:', email);

     // Prepare form data
    

    // Make a POST request to the serverless function
    try {
      const formData = {
        firstname,
        lastname,
        address,
        addressLine2,
        city,
        province,
        postal,
        ssn,
        emergency,
      };
      const response = await axios.post('/app/api/submitForm', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    // Reset form fields
    setFirstname('');
    setFirstname2('');
    setLastname('');
    setLastname2('');
    setAddress('');
    setStreetAddress('');
    setAddressLine2('');
    setStreetAddressLine2('');
    setProvince('');
    setCity('');
    setPostal('');
    setSsn('');
    setEmergency('');
    setEmail('');
    //setMessage('');
    //setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full border flex flex-col gap-10 max-w-[1000px] mx-auto">
      <div className="flex flex-col gap-10">
        <h1>Personal Information</h1>
        <div className="flex flex-col">
          <div className="w-full flex items-center justify-between">
            <label className="flex flex-col-reverse items-start gap-3">
              Firstname
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border  w-[400px] h-[40px]"
              />
            </label>
            <label className="flex flex-col-reverse items-start gap-3">
              Lastname
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border w-[400px] h-[40px]"
              />
            </label>
          </div>
          <div className=" w-full flex flex-col mt-5 items-start gap-5">
            <h1>Address</h1>
            <label className="w-full flex flex-col-reverse items-start gap-3">
              Address
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border  w-[100%] h-[40px]"
              />
            </label>
            <label className="w-full flex flex-col-reverse items-start gap-3">
              AddressLine2
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                className="border  w-[100%] h-[40px]"
              />
            </label>
          </div>
          <div className="w-full flex items-center justify-between mt-5">
            <label className="flex flex-col-reverse items-start gap-3">
              City:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border  w-[400px] h-[40px]"
              />
            </label>

            <label className="flex flex-col-reverse items-start gap-3">
              Province:
              <input
                type="text"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="border  w-[400px] h-[40px]"
              />
            </label>
          </div>
          <div className="mt-5">
            <label className="flex flex-col-reverse items-start gap-3">
              Postal/Zip Code:
              <input
                type="text"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                className="border  w-[100%] h-[40px]"
              />
            </label>
          </div>
          <div className=" w-full mt-5 flex justify-between items-center ">
           <div className="flex flex-col items-start gap-5">
           <h1>SSN</h1>
            <label>
              <input
                type="text"
                value={ssn}
                onChange={(e) => setSsn(e.target.value)}
                className=" border w-[400px] h-[40px]"
              />
            </label>
           </div>
           <div className="flex flex-col items-start gap-5">
           <h1>Email</h1>
            <label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border w-[400px] h-[40px]"
              />
            </label>
           </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
          <h1>Emergency Contact</h1>
          <div className="flex flex-col">
          <div className="w-full flex items-center justify-between">
            <label className="flex flex-col-reverse items-start gap-3">
              Firstname
              <input
                type="text"
                value={firstname2}
                onChange={(e) => setFirstname2(e.target.value)}
                className="border  w-[400px] h-[40px]"
              />
            </label>
            <label className="flex flex-col-reverse items-start gap-3">
              Lastname
              <input
                type="text"
                value={lastname2}
                onChange={(e) => setLastname2(e.target.value)}
                className="border w-[400px] h-[40px]"
              />
            </label>
          </div>
          <div className="w-full flex flex-col items-start gap-3" >
            <h1>Emergency Contact Information</h1>
            <label  className="flex flex-col-reverse items-start gap-2">
              <p>please enter a valid phone number</p>
            <input type="text" value={emergency} onChange={(e) => setEmergency(e.target.value)} className=" border w-[400px] h-[40px]" placeholder="(000) 000-0000" />
            </label>
          </div>
          <div className=" w-full flex flex-col mt-5 items-start gap-5">
            <h1>Emergency Contact Address</h1>
            <label className="w-full flex flex-col-reverse items-start gap-3">
              Street Address
              <input
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className="border  w-[100%] h-[40px]"
              />
            </label>
            <label className="w-full flex flex-col-reverse items-start gap-3">
              Street Address Line 2
              <input
                type="text"
                value={streetAddressLine2}
                onChange={(e) => setStreetAddressLine2(e.target.value)}
                className="border  w-[100%] h-[40px]"
              />
            </label>
          </div>
          </div>
      </div>

      <button type="submit" className="border">Submit</button>
    </form>
  );
};

export default Style;
