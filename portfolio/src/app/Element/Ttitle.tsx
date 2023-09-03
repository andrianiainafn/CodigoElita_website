export default function Title({name, id}:{name: string, id:string}){
     return (
        <div id={id} className="w-full flex justify-start title ">
            <div className="title-line"/> 
            <h3>{name}</h3>
        </div>
     )
}