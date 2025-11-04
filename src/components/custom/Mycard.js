import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mydialog } from './Mydialog'
import { Alert } from './Alert'

function MyCard({ blog }) {
    return (
        <div className='w-full '>

            <Card>
                <CardHeader>
                    <CardTitle>{blog}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>That’s totally doable — and I’ll show you how
                         to set up an AI model locally so it works
                          without an internet connection, plus how to
                           connect it to your website frontend.</p>
                </CardContent>
                <CardFooter>
                    <Mydialog 
                     name="Edit"
                     edit="Edit Blog?"
                    />
                    <Alert />
                </CardFooter>
            </Card>
        </div>
    )
}

export default MyCard