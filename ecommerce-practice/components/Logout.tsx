'use client';

import { signout } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Logout = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const [error, setError] = useState<string | null>(null)

    const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoading(true)


        const result = await signout()

        if (result.status === 'success') {
            router.push('/login');
          } else {
            setError(result.status || 'Logout failed');
          }
        
        setLoading(false)
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <button type="submit" >{loading ? 'Logging Out...' : 'Log Out'}</button>
      </form>
    </div>
  );
};

export default Logout;