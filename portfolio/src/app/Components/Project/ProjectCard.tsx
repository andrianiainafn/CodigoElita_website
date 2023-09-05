import Button from "@/app/Element/Button"
import Image from "next/image"

type ProjectCardProps = {
      title:string,
      url : string,
      projectPhoto: string,
      alt: string,
      projectType: string
}

export default function ProjectCard(props:ProjectCardProps){
    return (
        <div className="flex-1 flex flex-col ">
            <div>
                <Image 
                    src={props.projectPhoto}
                    alt={props.alt}
                    width={400}
                    height={200}
                />
            </div>
            <h3 className="text-medium">{props.title}</h3>
            <div className=" w-full flex items-center justify-between">
                <p>{props.projectType}</p>
                <Button label="View demo" to={props.url} type="primary" />
            </div>
        </div>
    )
}