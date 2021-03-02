import React from 'react';
import {useState} from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		console.log({email, password});
		function handleSignup() {
			console.log({email, password});
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