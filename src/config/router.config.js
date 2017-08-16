// 前端相对路径
const root = '/';

export default {
    relativePath: root,
    home: root + '',
    post: {
        index: root + 'post',
        detail: root + 'post/:id',
    },
}