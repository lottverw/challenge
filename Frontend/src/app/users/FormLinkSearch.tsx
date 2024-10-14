import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { ProjectSelect } from "@/app/projects/ProjectSelect";

import {  useToast } from "@/hooks/use-toast";

export default function FormLinkSearch({emailFilter, handleEmailChange}: {emailFilter: String, handleEmailChange:Function}) {

    let selectedProject = "";

    const { toast } = useToast()
  function onSubmit() {
    console.log('submit clikc', selectedProject);
        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-50 p-4">
              <code className="text-white">{emailFilter + " " + selectedProject}</code>
            </pre>
        ),
        })
    }

    function handleSelect () {

    }
    return (
        <Card className="w-full pt-6">
            <CardContent className="flex">
                <Input className="w-64" type="email" placeholder="Search by email" value={emailFilter} onChange={handleEmailChange} />
                <ProjectSelect handleSelect={handleSelect} defaultValue={selectedProject} />
                <Button onClick={onSubmit}>Save</Button>
            </CardContent>
        </Card>
    )
}