import { useAppStore } from "../store/appStore.js";

function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const login = useAppStore((state) => state.login);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  return (
    <nav>
      <span>Theme:{theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <h1>Welcome,{user.name}</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Guest</h1>
          <button onClick={() => login({ name: "aadil" })}>LogIn</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
