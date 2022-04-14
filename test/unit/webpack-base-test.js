const assert = require("assert")
describe("webpack.base.js test case", () => {
    const baseConfig = require("../../lib/webpack.base.js");

    it("entry", () => {
        assert.equal(baseConfig.entry.index, '/Users/shibo/Desktop/我的文件/学习/web-work/webpack/builder-webpack-pub/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, '/Users/shibo/Desktop/我的文件/学习/web-work/webpack/builder-webpack-pub/test/smoke/template/src/search/index.js')
        
    })
})