function myLanguages(results) {
    return Object.keys(results).filter(key => results[key] >= 60);

}
