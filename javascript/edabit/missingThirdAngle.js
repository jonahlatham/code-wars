function missingAngle(angle1, angle2) {
	console.log(angle1,angle2)
    if (angle1 + angle2 > 90) {
        return 'obtuse'
    } else if (angle1 + angle2 < 90) {
        return 'acute'
    } else {
        return 'right'
    }
}

console.log(missingAngle(27,59))