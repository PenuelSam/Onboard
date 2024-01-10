
"use client"
import { useState } from 'react';

const ContactForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [ssn, setSsn] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [homePhone, setHomePhone] = useState('');
  const [emergency, setEmergency] = useState('');
  const [email, setEmail] = useState('');
  //const [message, setMessage] = useState('');
  //const [selectedOptions, setSelectedOptions] = useState([]);
  //const [isSubmitted, setIsSubmitted] = useState(false);

  /*const handleOptionChange = (value) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions.includes(value)) {
      // Remove the option if already selected
      updatedOptions.splice(updatedOptions.indexOf(value), 1);
    } else {
      // Add the option if not selected
      updatedOptions.push(value);
    }
    setSelectedOptions(updatedOptions);
  };*/




  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Name:', firstname);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Selected Option:', selectedOption);

    // Reset form fields
    setFirstname('');
    setLastname('');
    setAddress('');
    setProvince('');
    setCity('');
    setPostal('');
    setSsn('');
    setMobilePhone('');
    setHomePhone('');
    setEmergency('');
    setEmail('');
    //setMessage('');
    //setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />
      <label>
        Address Line 2:
        <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Province:
        <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
      </label>
      <br />
      <label>
        Postal Code:
        <input type="text" value={postal} onChange={(e) => setPostal(e.target.value)} />
      </label>
      <br />
      <label>
        SSN:
        <input type="text" value={ssn} onChange={(e) => setSsn(e.target.value)} />
      </label>
      <br />
      <label>
        Mobile Phone:
        <input type="text" value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} />
      </label>
      <br />
      <label>
        Home Phone:
        <input type="text" value={homePhone} onChange={(e) => setHomePhone(e.target.value)} />
      </label>
      <br />
      <label>
        Emergency Contact:
        <input type="text" value={emergency} onChange={(e) => setEmergency(e.target.value)} />
      </label>
      <br />
      <label>
      { /*<p>Question: What are the primary colors?</p>
        <div>
          <label>
            <input
              type="checkbox"
              value="red"
              checked={selectedOptions.includes('red')}
              onChange={() => handleOptionChange('red')}
            />
            Red
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="blue"
              checked={selectedOptions.includes('blue')}
              onChange={() => handleOptionChange('blue')}
            />
            Blue
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="yellow"
              checked={selectedOptions.includes('yellow')}
              onChange={() => handleOptionChange('yellow')}
            />
            Yellow
          </label>
  </div>*/}
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
