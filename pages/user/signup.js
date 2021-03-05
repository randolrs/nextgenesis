import React from 'react';
import {useState} from 'react';
import axios from 'axios';

export default function Signup() {
    const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		console.log({email, password});
	function handleSignup() {
		console.log({email, password});
		axios.post('https://comedy.auth0.com/dbconnections/signup', {
			"client_id": "svj4B2yH44IKctWJUi6jXmMxGrj4JJZG",
			email,
  			password,
  			"connection": "Username-Password-Authentication",
		});
	}
		
    return (
    <div>
        <h1>Signup</h1>
				<div>
					<input 
						value={email}
						onChange={e => {
							console.log({e})
							setEmail(e.target.value);
							e.preventDefault();
						}}
					/>
				</div>
				<div>
					<input 
						value={password}
						onChange={e => {
							setPassword(e.target.value)
							e.preventDefault();
						}}
						type='password'
					/>
				</div>
				<button onClick={handleSignup}>Signup</button>
    </div>
  );
}