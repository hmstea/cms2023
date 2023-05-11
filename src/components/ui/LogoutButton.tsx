function LogoutButton({logout}:{logout:()=>void}) {
    return (
        <button onClick={logout}>logout</button>
    );
}

export default LogoutButton;