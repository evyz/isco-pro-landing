import { PropsType } from "@/shared/types/props"

type HeadShadowProps = PropsType & {}

export default function HeadShadow({className}:HeadShadowProps){
    return (
        <svg width="678" height="484" viewBox="0 0 678 484" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <mask id="mask0_1_981" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="678" height="484">
            <rect width="678" height="484" fill="white"/>
            </mask>
            <g mask="url(#mask0_1_981)">
            <g opacity="0.5" filter="url(#filter0_f_1_981)">
            <path d="M-9 0H691L505.706 518.341V518.341C403.867 577.487 278.133 577.488 176.294 518.341V518.341L-9 0Z" fill="url(#paint0_radial_1_981)"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_f_1_981" x="-128" y="-119" width="938" height="800.701" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="59.5" result="effect1_foregroundBlur_1_981"/>
            </filter>
            <radialGradient id="paint0_radial_1_981" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(341 492.5) rotate(-90) scale(382.38 516.391)">
            <stop stop-color="#BA214F"/>
            <stop offset="1" stop-color="#FF004D" stop-opacity="0"/>
            </radialGradient>
            </defs>
        </svg>
    )
}