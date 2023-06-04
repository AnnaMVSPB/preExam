const express = require('express');

const router = express.Router();

const { Flower } = require('../../db/models');

router.post('/', async (req, res) => {
  const {
    name, url,
  } = req.body;

  try {
    if (name && url) {
      const flower = await Flower.create({
        name, url,
      });

      res.status(201).json(flower);
    } else {
      res.status(401).json({ message: 'заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

router.delete('/:idFlower', async (req, res) => {
  try {
    const flowerDel = await Flower.destroy({
      where: { id: req.params.idFlower },
    });
    if (flowerDel) {
      res.status(200).json({ id: req.params.idFlower });
    } else {
      res.status(400).json({ message: 'сервер временно не работает', status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const flowers = await Flower.findAll();
    res.json(flowers);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.put('/:idFlower', async (req, res) => {
  const { status } = req.body;
  try {
    const flower = await Flower.findOne({ where: { id: req.params.idFlower } });
    flower.status = status;
    flower.save();
    res.json(flower);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
