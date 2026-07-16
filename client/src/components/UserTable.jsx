function UserTable() {
  const users = [
    {
      id: 1,
      name: "Taher",
      email: "taher@gmail.com",
      role: "Admin"
    },
    {
      id: 2,
      name: "John",
      email: "john@gmail.com",
      role: "User"
    }
  ];

  return (
    <table className="table table-striped shadow">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;