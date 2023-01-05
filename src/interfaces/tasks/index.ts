export interface iCreateTask {
    title: string,
    description: string
}

export interface iReturnCreateTask extends iCreateTask {
    id: string,
    its_complete: boolean
}

export interface iUpdateTask {
    title?: string,
    description?: string
}