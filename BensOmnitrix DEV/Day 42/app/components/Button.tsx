export const Button = (props:any) => {
    return (
        <div className="flex justify-center ">
            <button onClick={props.onclick} className="w-full m-5 mt-2 bg-black text-gray-50 rounded-md h-8 cursor-pointer">{props.label}</button>
        </div>
    )
}