const Cluck =  require("../models").Cluck;

module.exports =  {
    create(req,res) {
        const { image_url, content } = req.body;
        return Cluck
            .create({
                content: content,
                image_url: image_url
            })
            .then(cluck => res.status(201).send(cluck))
            .catch(error => res.status(400).send(error));
    }
}