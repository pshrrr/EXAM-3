import { useRouter } from "next/router";

function LogoutButton() {
  const router = useRouter();
  return (
    <div>
      <button
        className="btn-2"
        onClick={() => localStorage.clear(router.push("/"))}
      >
        Logout Admin
      </button>
    </div>
  );
}

export default LogoutButton;
