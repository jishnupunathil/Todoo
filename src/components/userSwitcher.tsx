import { useState } from "react";
import type { AdminUser, UserProfile } from "../types";
import { users } from "../mockUser";

export default function UserSwitcher() {

 const [current, setCurrent] =useState<UserProfile>(users[0])
    const superAdmin: AdminUser = {
  id: 99,
  name: 'Root',
  email: 'root@system.com',
  isAdmin: true,
  permissions: ['delete-users', 'view-logs']
}
 return (
    <section>
      <h2>Active user:</h2>
      <p>
        {current.name} – {current.email}{' '}
        {current.isAdmin && <strong>(Admin)</strong>}
      </p>

      <h3>Switch user:</h3>
      {users.map(u => (
        <button
          key={u.id}
          onClick={() => setCurrent(u)}
          disabled={u.id === current.id}
        >
          {u.name}
        </button>
      ))}
    </section>
  )
}
