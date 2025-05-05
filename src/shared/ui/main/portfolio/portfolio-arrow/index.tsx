export default function PortfolioArrow({inverted = false}){
    if(inverted){
        return (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2102_42720)">
                <path d="M14.1989 14L10.8984 10.7006L12.5481 9.0498L17.4983 14L12.5481 18.9501L10.8984 17.2993L14.1989 14Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2102_42720">
                <rect width="28" height="28" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        )
    }

    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7993 14L17.0998 17.2993L15.4502 18.9501L10.5 14L15.4502 9.0498L17.0998 10.7006L13.7993 14Z" fill="white"/>
        </svg>

    )
}