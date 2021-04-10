import React from 'react';
import Link from 'next/Link';

export default function Nav() {
  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <Link href="/user/profile">Profile</Link>
      <Link href="/user/signup">Signup</Link>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
