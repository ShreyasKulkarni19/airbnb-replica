export default function loginPage(){
    return (
        <div className="mt-4">
        <h1 className="text-4xl text-center">Login</h1>
            <form className="max-w-md mx-auto border">
                <input type="email" placeholder="your email address"/>
                <input type="password" placeholder="your password"/>
                <button>Login</button>
            </form>
        </div>
    );
}