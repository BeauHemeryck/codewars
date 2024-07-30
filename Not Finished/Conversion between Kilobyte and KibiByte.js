function memorysizeConversion(memorysize) {
    let [value, unit] = memorysize.split(" ");
    const converter = {
        kB: "KiB",
        MB: "MiB",
        GB: "GiB",
        TB: "TiB",
        KiB: "kB",
        MiB: "MB",
        GiB: "GB",
        TiB: "TB",
    };
    const convertedUnit = converter[unit];
    let convertedValue;
    if (unit.endsWith("iB")) {
        convertedValue = value * 1.024;
    } else {
        convertedValue = value * 0.977;
    }
    return `${parseFloat(convertedValue.toFixed(3))} ${convertedUnit}`
}
