function cartesianToSpherical(cartesian) {
    return [
        Math.atan2(cartesian[1], cartesian[0]), // theta: arctangent of y/x
        Math.asin(cartesian[2])                  // phi: arcsine of z
    ];
}
