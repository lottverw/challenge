import { IUser } from '@/api/users';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '../../components/ui/badge'
import UserFormDialog from './UserLinkProjectDialog';

export default function UserCard({ user }: { user: IUser }) {
    return (
        <Card className='w-full'>
            <CardHeader className='flex'>

                <Avatar>
                    <AvatarImage src={user.image} alt={user.name} />
                </Avatar>

                <CardTitle>
                    {user.name}
                </CardTitle>

                <CardDescription>
                    {user.jobTitle}
                </CardDescription>
            </CardHeader>

            <CardContent>
             <p>Email: <a href={'mailto:' + user.email} className='mb-0 cursor-pointer'>{user.email}</a></p>   
            
                {
                     user.projects?.map((project, index) => {
                        return <Badge className="mr-2" style={{background: project.color}} key={user.id + "_" + project.id + '_'+index}>{project.name}</Badge>
                    })
                }
                    
                <UserFormDialog user={user} />
            
            </CardContent>
        </Card>
    )
}