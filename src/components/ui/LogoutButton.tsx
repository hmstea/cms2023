function LogoutButton({logout}:{logout:()=>void}) {
    return (
        <button className='' onClick={logout}>logout</button>
    );
}

export default LogoutButton;