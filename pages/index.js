import { useAuth } from "../utils/auth";

export default function Index() {
    const auth = useAuth();

    return auth.user ? (
        <div>
            <p>Email: {auth.user.email}</p>
            <button onClick={(e) => auth.signout()}>Sign Out</button>
        </div>
    ) : (
        <div>
            <button onClick={(e) => auth.signinWithGitHub()}>Sign In With GitHub</button>
            <button onClick={(e) => auth.signinWithGoogle()}>Sign In With Google</button>
        </div>
    );
}