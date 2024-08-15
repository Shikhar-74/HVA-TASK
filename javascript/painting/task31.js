function areaOfRectangle(length,widhth){
    area = length*widhth
    return area
}

function calculatePaintingCost(dimension1,dimension2,calculatearea){
    calculatearea(dimension1,dimension2)
    const costPerUnit = 2
    const totalcose = costPerUnit*area
    return totalcose
}

console.log(calculatePaintingCost(5,10,areaOfRectangle))