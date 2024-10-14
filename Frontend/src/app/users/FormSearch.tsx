import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProjectSelect } from "../projects/ProjectSelect";
import { Button } from "@/components/ui/button";
import { ChangeEventHandler, MouseEventHandler } from "react";

interface ISearchFormProps {
    emailFilter: string | any, 
    handleEmailChange: ChangeEventHandler<HTMLInputElement>, 
    projectFilter:any, 
    handleProjectSelect:Function,
    clearFilter: MouseEventHandler<HTMLButtonElement>
}

export default function FormSearch({emailFilter, handleEmailChange, projectFilter, handleProjectSelect, clearFilter}: ISearchFormProps ) {
    return (
        <Card className="w-full pt-6">
        <CardContent className="flex">
            <Input className="w-full" type="email" placeholder="Search users email" value={emailFilter} onChange={handleEmailChange} />
            <ProjectSelect defaultValue={projectFilter} handleSelect={handleProjectSelect} userId={undefined} />
            <Button onClick={clearFilter}>Clear</Button>
        </CardContent>
    </Card>
    );
}