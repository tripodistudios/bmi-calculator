let isNumber = (number) => {
    return !!number.match(/^[0-9]+$/)///[0-9]+/);
};

export function calculateBMI(weight, height) {
    console.log(isNumber(weight));
    console.log(isNumber(height));
    if(isNumber(weight) && isNumber(height)) {
        height = height / 100;
        var bmi = weight / (height * height);
        return bmi.toFixed(2);
    } else {
        return "(Ensure Height and Weight are Numbers)"
    }
}
