import edge from 'edge.js'
import { join } from 'path'
import { loggedUser, users, userLinks, workExperience } from './Users'
import { pathList, netlifyBasePathList } from './Paths'
import fs from 'fs'

edge.mount(join(__dirname, 'views'))

const paths = pathList.map(item => ({ ...item, path: item.view.replace("/", "") + '.html' }))
const pathsToBuild = [...paths, ...netlifyBasePathList]

pathsToBuild.map(item => {
    edge.render(join(item.folder, item.view), {
        pathList: pathList,
        loggedUser: users[0],
        user: users[0],
        userLinks: userLinks,
        workExperience: workExperience,
    }).then((data) => {
        const file = new Blob([data], { type: 'text/plain' })
        fs.writeFile(join(__dirname, "build", item.path), data, err => {
            if (err) {
                console.error(err);
            }
        })
    })
})

console.log("~~~ build files created ~~~")


