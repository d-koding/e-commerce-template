'use client';

import { signout } from '@/actions/auth';
import React, { useState } from 'react';

const Logout = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoading(true)

        await signout()
        
        setLoading(false)
  };

  return (
    <div>
      <form onSubmit={handleLogout}>
        <button type="submit" disabled={loading}>{loading ? 'Logout' : 'Logging Out...'}</button>
      </form>
    </div>
  );
};

export default Logout;