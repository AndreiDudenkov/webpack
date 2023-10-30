const createAnanlytics = () =>{
    let counter = 0
    let isDestroued = false
    const listener = () => counter++
    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroued = false
        },
        getClicks() {
            if (isDestroued){
                return 'Analytics is destroyed '
            }
            return counter
        }
    }
}

window.analytics = createAnanlytics()