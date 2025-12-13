export default function AuthLayout({ title, children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
                {children}
            </div>
        </div>
    );
}
