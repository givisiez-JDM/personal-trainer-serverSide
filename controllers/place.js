import PlaceModel from '../models/Place.js';

export const createPlace = async (req, res) => {
    try {
        const newPlace = new PlaceModel(req.body);

        await newPlace.save();
        res.status(200).send(`Place created successfully`)
    } catch (err) {
        res.status(409).send({ message: err.message });
    }
}

export const getAllPlaces = async (req, res) => {
    try {
        const places = await PlaceModel.find();

        res.status(200).send(places)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const getPlace = async (req, res) => {
    try {
        const place = await PlaceModel.findById(req.params.id);

        res.status(200).send(place)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const updatePlace = async (req, res) => {
    try {
        const place = await PlaceModel.findOneAndUpdate({_id: req.params.id}, req.body);

        await place.save()
        res.status(200).send(place)
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}

export const deletePlace = async (req, res) => {
    try {
        const place = await PlaceModel.findById(req.params.id);

        place.deleteOne(place)
        res.status(200).send("Place deleted successfully")
    } catch (err) {
        res.status(404).send({ message: err.message });
    }
}