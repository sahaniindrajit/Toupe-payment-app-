import { Link } from 'react-router-dom'
export default function BottomWarning({ label, buttonText, to }) {
    return (
        <div className='text-md py-2 flex justify-center'>
            <div>{label}</div>

            <Link className='underline pl-1 cursor-pointer' to={to}>{buttonText}
            </Link>

        </div>

    )

}