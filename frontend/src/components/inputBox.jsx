export default function InputBox({ label, placeholder }) {
    return (
        <div>
            <div className="text-left text-sm font-medium py-2">{label}</div>

            <input placeholder={placeholder} className="w-full px-2 py-2 border rounded border-slate-200" />

        </div>
    )
}