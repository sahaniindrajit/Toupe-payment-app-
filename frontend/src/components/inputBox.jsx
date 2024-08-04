export default function InputBox({ label, placeholder, onChange }) {
    return (
        <div>
            <div className="text-left text-sm font-medium py-2">{label}</div>

            <input placeholder={placeholder} onChange={onChange} className="w-full px-2 py-2 border rounded border-slate-200" />

        </div>
    )
}