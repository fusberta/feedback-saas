import React from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Plus } from 'lucide-react'
import { createProject } from '@/actions/createProject'
import SubmitButton from './submit-btn'

const NewProjectBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'}>
          <Plus size={20}/>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] rounded-md'>
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started.
          </DialogDescription>
        </DialogHeader>
        <form className='flex flex-col gap-4' action={createProject}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor='name'>Name</Label>
              <Input id='name' name='name' placeholder='Project name' />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor='url'>URL</Label>
              <Input id='url' name='url' placeholder='http://example.com' />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor='description'>Description</Label>
            <Textarea id='description' name='description' placeholder='Project description (optional)' className='max-h-48' />
          </div>
        <DialogFooter>
          <Button variant={'outline'}>Cancel</Button>
          <SubmitButton />
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

  )
}

export default NewProjectBtn