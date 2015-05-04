import fs from 'fs'
import path from 'path'
import config from '../../config/config'

export default {
    setPageScriptURL: function *(next){
        var script_url = this.url === '/' ? '/app.js' : this.url + '.js'
        var script_path = path.join(config.publicPath,'/build',script_url)
        var _exists = fs.existsSync(script_path)
        if(_exists) {
            this.state.SCRIPT_EXIST = _exists
            this.state.SCRIPT_URL = script_url
        }
        yield next
    }
}