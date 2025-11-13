export default function SigninLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="flex justify-center border-b">20% off for the next three days</div>
            {children}
        </div>
    )
}   