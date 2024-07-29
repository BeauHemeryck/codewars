function updateLight(current) {
    const trafficLightColors = ["green", "yellow", "red"];
    let index = trafficLightColors.indexOf(current)
    if (trafficLightColors.indexOf(current) + 1 == trafficLightColors.length) {
        index = 0;
    } else {
        index++;
    }

    return trafficLightColors[index]
  }