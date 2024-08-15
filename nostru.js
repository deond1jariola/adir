function positionAndSize(fieldDef, channel, model) {
    // Initialize variables for position and size
    let position = {};
    let size = {};

    // Determine position based on field definition and channel
    if (channel === 'x') {
        position.x = model.scale('x').apply(fieldDef.field);
        size.width = model.scale('x').bandwidth ? model.scale('x').bandwidth() : undefined;
    } else if (channel === 'y') {
        position.y = model.scale('y').apply(fieldDef.field);
        size.height = model.scale('y').bandwidth ? model.scale('y').bandwidth() : undefined;
    }

    // Further calculations based on model properties
    if (model.hasField('size')) {
        size.sizeValue = model.field('size').value;
    }

    // Return an object containing both position and size
    return { position, size };
}
