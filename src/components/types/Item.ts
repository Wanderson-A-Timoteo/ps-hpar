export type Item = {
    id?: number;
    description: string;
    done: boolean;
}

export type EditingTaskProps = {
    editingTask: Item | null;
    setEditingTask: (task: Item | null) => void;
}
