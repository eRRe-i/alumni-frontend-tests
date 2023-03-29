export interface User {
    id: number;
    username: string;
    name: string;
    email: string;
    job: string;
    city: string;
    estado: string;
    country: string;
    isAdmin: boolean;
    avatarUrl: string | null;
}

export const loggedUser: User = {
    id: 0,
    username: 'leandro',
    name: 'Leandro Bataglia',
    email: 'leandro@bataglia.com',
    job: 'Software Developer',
    city: 'Rio de Janeiro',
    estado: 'RJ',
    country: 'Brazil',
    isAdmin: true,
    avatarUrl: './public/leandro.jpg',
}

export const workExperience: any[] = [
    {
        company: 'Caelum',
        userId: 0,
        current: true,
        jobList: [ 
            {
                id: 0,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: true,
                startDate: '2019-01-01',
                endDate: '',
            },
            {
                id: 1,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: false,
                startDate: '2019-01-01',
                endDate: '2020-01-01',
            },
            {
                id: 2,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: false,
                startDate: '2019-01-01',
                endDate: '2020-01-01',
        
            },
        ]
    },
    {
        company: 'Lorem Ipsum',
        userId: 0,
        current: false,
        jobList: [ 
            {
                id: 0,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: false,
                startDate: '2019-01-01',
                endDate: '2020-01-01',
            },
            {
                id: 1,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: false,
                startDate: '2019-01-01',
                endDate: '2020-01-01',
            },
            {
                id: 2,
                job: 'Software Developer',
                jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.',
                city: 'Rio de Janeiro',
                type: 'Full Time',
                currentJob: false,
                startDate: '2019-01-01',
                endDate: '2020-01-01',
        
            },
        ]
    }
]
    

export const users: User[] = [
    {
        id: 0,
        username: 'leandro',
        name: 'Leandro Bataglia',
        email: 'leandro@bataglia.com.br',
        job: 'Software Developer',
        isAdmin: true,
        city: 'Rio de Janeiro',
        estado: 'RJ',
        country: 'Brazil',
        avatarUrl: './public/leandro.jpg',
    },
    {
        id: 1,
        username: 'joao',
        name: 'João Pedro Ribeiro',
        email: 'joaopedro@ribeiro.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        country: 'Brazil',
        isAdmin: false,
        avatarUrl: './public/jp.png',
    },
    {
        id: 2,
        username: 'rita',
        name: 'Rita Chen',
        email: 'rita@chen.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        country: 'Brazil',
        isAdmin: false,
        avatarUrl: null,
    },
    {
        id: 3,
        username: 'pedro',
        name: 'Pedro Henrique Farolfi',
        email: 'pedrohenrique@farolfi.com.br',
        job: 'Software Developer',
        city: 'Rio de Janeiro',
        estado: 'RJ',
        country: 'Brazil',
        isAdmin: false,
        avatarUrl: null,
    }
]

export interface Links {
    name: string;
    link: string
}

export interface UserLinks {
    userId: number;
    profileLinks: Links[]
}

export const userLinks: UserLinks = {
    
    userId: 0,
    profileLinks: [
        {
            name: "mail",
            link: "https://www.linkedin.com/in/leandro-bataglia-bb23b321/"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/leandro-bataglia-bb23b321/"
        },
        {
            name: "lattes",
            link: "https://www.linkedin.com/in/leandro-bataglia-bb23b321/"
        },
        {
            name: "github",
            link: "https://www.linkedin.com/in/leandro-bataglia-bb23b321/"
        }
    ]
}