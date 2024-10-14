import { IProject } from '@/api/projects';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

export default function ProjectCard({ project }: { project: IProject }) {

    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle className='flex'>
                    <span className='w-4 h-4 inline-block rounded mr-4' style={{ background: project.color }}></span>
                    {project.name}
                </CardTitle>
                <CardDescription className='text-wrap'>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Deadline: {project.deadline}</p>
                <p>Budget: {project.budget}</p>
            </CardContent>
        </Card>
    )
}