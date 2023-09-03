import Image from "next/image";
import Button from "./Button";
import { MdArrowForward } from "react-icons/md";
type CardProps = {
    title: string,
    description:string,
    isPriority: boolean
}
export default function Card(props: CardProps){
    return (
        <div className="serv flex-1 flex flex-col space-y-4 justify-around  h-auto bg-white py-6 px-8  rounded-lg  ">
            <div className="flex flex-col gap-3 items-start">
                <Image src='/serv.png' alt='service icons' width={30} height={30}/>
                <h5 className=' text-title'>{props.title}</h5>
            </div>
            <p className=' flex-1 my-auto opacity-70 text-body'>
                 {props.description}
            </p>
            <div className="flex justify-start ">
                <Button label="Explore"  icon={<MdArrowForward/>} to="/"/>
            </div>
            
        </div>  
    )
}