export class Component {
    constructor (config) {
        this.template = config.template
        this.selector = config.selector
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector)
        console.log('this.template')
        console.log(this.template)
        console.log('this.el')
        console.log(this.el)
        console.log('this.selector')
        console.log(this.selector)
        console.log(document)
        if (!this.el) throw new Error(`Component with selector ${this.selector} wasn't found`)
        // document.el.innerHtml = this.template
        document.querySelector(this.selector).innerHTML = this.template
    }
}
