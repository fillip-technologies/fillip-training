export default function InputField({ label, type = "text", value, onChange }) {
    return (
        <div className="mb-4">
            <label className="block font-medium mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>
    );
}
