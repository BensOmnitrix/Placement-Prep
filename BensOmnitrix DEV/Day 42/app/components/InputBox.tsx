export const InputBox = (props: any) => {
    return (
        <div className="m-5">
            <label className="block font-semibold">{props.label}</label>
            <div className="border-2 border-gray-300 rounded-md h-8 flex items-center focus-within:border-gray-600">
                <input onChange={props.onChange} type={props.type} placeholder={props.placeholder} className="h-full w-full focus:outline-none bg-gray-50 rounded-md pl-2"/>
            </div>
        </div>
    )
}