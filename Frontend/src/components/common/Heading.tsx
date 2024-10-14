import BreadCrumb from "./Breadcrumb";

export default function Heading ({title}: {title: string}){
    return (
        <div>
            <h1 className="text-3xl mt-3 mb-2">{title}</h1>
            <BreadCrumb />
        </div>
    )   
}