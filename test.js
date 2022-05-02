

// update
app.put('/product/:id', async(req, res) =>{
    const id = req.params.id;
    const updateQuantity = req.body;
    const filter = {_id: ObjectId(id)};
    const options = {upsert: true};
    const updatedDoc = {
        $set: {
            quantity: updateQuantity.quantity
        }
    };
    const result = await productCollection.updateOne(filter, updatedDoc, options);
    res.send(result);
})

// Delete item
app.delete('/product/:id', async (req, res) =>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await productCollection.deleteOne(query);
    res.send(result);
})