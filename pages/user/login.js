import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import auth0 from 'auth0-js';

export default function Login() {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	console.log({email, password});
	function handleSignup() {
		console.log({email, password});
		const webAuth = new auth0.WebAuth({
			domain: 'comedy.auth0.com',
			clientID: 'svj4B2yH44IKctWJUi6jXmMxGrj4JJZG'
		});
		
		webAuth.login({
			connection: 'Username-Password-Authentication',
			responseType: 'token',
			redirectUri: 'https://google.com',
			email,
  		password,
		}, function(err, authResult){
			if(err){
			  console.log("errorrr-->", err);
			}
			else{
			  console.log("sucess-->", authResult);
			}
		});

		// axios.get('https://comedy.auth0.com/authorize', {
		// 	"client_id": "svj4B2yH44IKctWJUi6jXmMxGrj4JJZG",
		// 	email,
  	// 	password,
		// 	"connection": "Username-Password-Authentication",
		// 	token
		// });

		// axios.post('/api/auth/login', {
		// 	email,
  	// 	password,
		// });
	}
		
  return (
    <div>
        <h1>Login</h1>
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