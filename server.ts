const express = require("express");
import { Request, Response } from 'express'
import edge from 'edge.js'
import { join } from 'path'

import { loggedUser, users, userLinks } from './Users'
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
        loggedUser: users[1],
        user: users[0],
        userLinks: userLinks
    })
    res.send(data)
})
app.get('/user-details-2', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/user-details-2', {
        loggedUser: users[1],
        user: users[0],
        userLinks: userLinks
    })
    res.send(data)
})
app.get('/test', async (req: Request, res: Response) => {
    const data = await edge.render('alumni/bar', {
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