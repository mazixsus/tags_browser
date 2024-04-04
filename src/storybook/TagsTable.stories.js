import { TagsTable } from '../componets/TagsTable';


export default {
    title: 'TagsTable',
    component: TagsTable,
    parameters: {
        layout: 'padded',
        
      },
    tags: ['autodocs'],
}

export const DefaultTable = {
    args: {
        tags: [
            {name: "Python", count: 500},
            {name: "JavaScript", count: 400},
            {name: "Java", count: 300},
            {name: "C++", count: 200},
            {name: "C#", count: 100},
        ]
    }
}

export const EmptyTable = {
    args: {
        tags: []
    }
}

export const MoreTagsTable = {
    args: {
        tags: [
            {name: "Python", count: 1000},
            {name: "JavaScript", count: 900},
            {name: "Java", count: 800},
            {name: "C++", count: 700},
            {name: "C#", count: 600},
            {name: "Ruby", count: 500},
            {name: "Go", count: 400},
            {name: "Rust", count: 300},
            {name: "Dart", count: 200},
            {name: "Kotlin", count: 100},
        ]
    }
}

export const AscOrderTable = {
    args: {
        tags: [
            {name: "Python", count: 100},
            {name: "JavaScript", count: 200},
            {name: "Java", count: 300},
            {name: "C++", count: 400},
            {name: "C#", count: 500},
        ]
    }
}
        
export const SortByNameTable = {
    args: {
        tags: [
            {name: "C#", count: 400},
            {name: "C++", count: 200},
            {name: "Java", count: 300},
            {name: "JavaScript", count: 800},
            {name: "Python", count: 500},
        ]
    }
}
        