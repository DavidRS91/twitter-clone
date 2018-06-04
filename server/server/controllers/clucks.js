import Cluck from "../models/cluck";

export default (req, res) => {
    const { image_url, content } = req.body;
    return Cluck
        .create({
            content,
            image_url
        })
        .then(cluck => res.status(201).send(cluck))
        .catch(error => res.status(400).send(error));
}