/**
 * @description 微博数据模型
 * @author 阿白
 */

const seq = require('../seq')
const { INTEGER, STRING, TEXT } = require('../types')


const Blog = seq.define('blog', {
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '用户 ID'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '微博内容'
    },
    Image: {
        type: STRING,
        comment: '图片地址'
    }
})

module.exports = Blog