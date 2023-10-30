export const Message = ({label,placeholder})=>{
    return(
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 border border-border rounded text-blacky"
            placeholder={placeholder}></textarea>
        </div>
    );
};

export const Select=({label,options,onChange})=>{
    return(
        <>
        <label className="text-border font-semibold">{label}</label>
        <select className="w-full mt-2 px-6 py-4 text-sky border border-border rounded" onChange={onChange}>
            {options.map((o,i)=>(
                <option key={i} value={o.value}>
                    {o.title}
                </option>
            ))}
        </select>
        </>
    )
}
export const Input=({label,placeholder,type,bg})=>{
    return(
        <>
        <div className="text-sm w-full my-5">
        <label className=" text-white font-semibold">{label}</label>
       <input
       required
        type={type}
        placeholder={placeholder}
        className={`w-full text-sm mt-2 p-4 border border-white rounded text-border placeholder:text-border ${
            bg?"bg-drygray":"bg:blacky"
        }`}
    />
        </div>
        </>
    )
}