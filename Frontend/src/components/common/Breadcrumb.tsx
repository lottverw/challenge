'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { usePathname } from 'next/navigation';

export default function BreadCrumb() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    const seperator = <BreadcrumbSeparator />


    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    pathNames.length > 1 &&
                        pathNames.map((link, index) => {
                            let href = '/' + pathNames.slice(0, index +1  ).join('/');
                            
                            return (
                                <div>
                                    <BreadcrumbItem >
                                        <BreadcrumbLink href={ href }>{link}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {pathNames.length !== index + 1 && seperator}
                                </div>
                            )
                        })
                }
                <BreadcrumbPage/>
            </BreadcrumbList>
        </Breadcrumb>

    )
}