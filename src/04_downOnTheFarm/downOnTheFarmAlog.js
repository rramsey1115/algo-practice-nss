
export const DownOnTheFarmAlgo = (animal1Legs, animal1Percent, animal2Legs, animal2Percent, totalLegs) => {
    // convert percentages to decimals
    const p1 = animal1Percent / 100;
    const p2 = animal2Percent / 100;

    // contribution of legs form each animal
    // in this case, we don't care how many of each animal, so just add them together
    const animalLegs = (p1 * animal1Legs + p2 * animal2Legs);

    // calculate total number of animals by dividing the provided totalLegs by combined leg count
    // could be a decimal, which we handle on the UI
    const numOfAnimals = totalLegs / animalLegs;

    return numOfAnimals;
}

export const DownOnTheFarmAlgoString = `
const DownOnTheFarmAlgo = (animal1Legs, animal1Percent, animal2Legs, animal2Percent, totalLegs) => {
    // convert percentages to decimals
    const p1 = animal1Percent / 100;
    const p2 = animal2Percent / 100;

    // contribution of legs form each animal
    // in this case, we don't care how many of each animal, so just add them together
    const animalLegs = (p1 * animal1Legs + p2 * animal2Legs);

    // calculate total number of animals by dividing the provided totalLegs by combined leg count
    // could be a decimal, which we handle on the UI
    const numOfAnimals = totalLegs / animalLegs;

    return numOfAnimals;
}
`