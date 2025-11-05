function roundUp(numToRound, multiple)
{
    if (multiple == 0)
        return numToRound;

    remainder = numToRound % multiple;
    if (remainder == 0)
        return numToRound;

    return numToRound + multiple - remainder;
}

function determineWeights(theWeight)
{
    const sizes = [55, 45, 35, 25, 10, 5];
    let weights = [];
    let weight = theWeight;

    for (const size of sizes)
    {
        while (weight / size >= 1)
        {
            weights.push(size);
            weight -= size;
        }
    }

    // push remainder
    weights.push(weight);

    return weights;
}

function calcOrmPercentage(orm, percentage, barWeight)
{
    const newWeight = (orm * (percentage / 100)) - barWeight;
    const oneSide = newWeight / 2;
    const oneSideWeights = determineWeights(oneSide);

    return {
        WEIGHT: newWeight,
        ONESIDE: oneSide,
        ONESIDEWEIGHTS: oneSideWeights
    }
}

function run()
{
    let orm = document.getElementById("orm").value; 
    let percentage = document.getElementById("percentage").value; 
    let barWeight = document.getElementById("barWeight").value; 

    let result = calcOrmPercentage(orm, percentage, barWeight);
    let weights = result.ONESIDEWEIGHTS;

    document.getElementById('newWeight').innerHTML = result.WEIGHT;
    document.getElementById('oneSide').innerHTML = result.ONESIDE;
    document.getElementById('weights').innerHTML = '';

    for (let i = 0; i < weights.length - 1; i++)
    {
        document.getElementById('weights').innerHTML += weights[i];

        // Don't add comma at end
        if (i != weights.length - 2)
        {
            document.getElementById('weights').innerHTML += ", ";
        }
    }

    document.getElementById("remainder").innerHTML = weights[weights.length - 1];
}
