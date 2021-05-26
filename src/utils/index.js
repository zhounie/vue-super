
export const getCurrentApp = (path) => {
    let urlArr = path.replace(/^\//, '').split('/')
    let app = urlArr[1]
    return app
}