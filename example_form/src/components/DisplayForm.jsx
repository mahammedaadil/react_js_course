function DisplayForm({ userArr }) {
  return (
    <div className="bg-gray-300 p-8 border border-red-200 flex justify-center">
      {userArr.length === 0 ? (
        <p className="text-lg font-semibold text-gray-600">
          No users added yet
        </p>
      ) : (
        <table className="table-auto border border-yellow-600 bg-white shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-6 py-2 text-left">Name</th>
              <th className="border px-6 py-2 text-left">Surname</th>
            </tr>
          </thead>

          <tbody>
            {userArr.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100 transition">
                <td className="border px-6 py-2">{user.name}</td>
                <td className="border px-6 py-2">{user.surName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DisplayForm;
