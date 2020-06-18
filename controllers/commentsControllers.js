const CommentsService = require('../services/commentsService');

class Comments {
    async index(req, res) {
        res.render("index");
    }

    async getAll(req, res) {
        try {
            const ret = await CommentsService.getAll();
            return res.status(200).json(ret)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async store(req, res) {
        try {
            const textBody = req.body
            let comment = {
                text: textBody.text
            }

            const result = await CommentsService.store(comment);

            const { id, text } = result.dataValues

            if (id) await CommentsService.textAudio(text, id);

            res.render("index");
        } catch (e) {
            return res.status(500).json(e);
        }
    }


}

module.exports = new Comments;