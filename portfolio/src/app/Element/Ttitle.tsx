export default function Title({name, id , custumnClass}:{name: string, id:string ,  custumnClass?:string}){
     return (
        <div id={id} className={`w-full flex title ${custumnClass}`}>
            <div className="title-line"/> 
            <h3>{name}</h3>
        </div>
     )
}