const express = require("express");
import { Request, Response } from 'express'
import edge from 'edge.js'
import { join } from 'path'

import { loggedUser, users, userLinks, workExperience } from './Users'
import { pathList } from './Paths';


const app = express();
const router = express.Router();

edge.mount(join(__dirname, 'views'))

app.use(express.static(join(__dirname, '')))

app.get(['/', '/welcome'], async (req: Request, res: Response) => {
    const data = await edge.render('base/welcome', {
        pathList: pathList
    })
    res.send(data)
})
app.get('/test-user', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/test-user', {
        loggedUser: loggedUser,
        user: users[0],
        userLinks: userLinks
    })
    res.send(data)
})
app.get('/user-details', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/user-details', {
        loggedUser: users[0],
        user: users[0],
        userLinks: userLinks,
        workExperience: workExperience
    })
    res.send(data)
})
app.get('/admin-user-details', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/admin-user-details', {
        loggedUser: users[1],
        user: users[0],
        userLinks: userLinks
    })
    res.send(data)
})
app.get('*', async (req: Request, res: Response) => {
    const data = await edge.render('base/error', {
        pathList: pathList
    })
    res.send(data)
});


app.listen(8080, () => {
    console.log('~~ Listening on port 8080 ~~')
})

// module.exports.handler = serverless(app)