
export function swipe(from, to){
    device.touchPerform([
        {
            action: 'press',
            options: from,
        },
        {
            action: 'moveTo',
            options: to,
        },
        {
            action: 'release'
        },
    ]);
    device.pause(1000);
}

export function swipeOnElement(element, direction, percentage) {
    let elementDimension = element.getElementSize();
    let elementPosition = element.getLocation();
}

function getDeviceScreenCoordinates(screenSize, coordinates) {
    return {
        x: Math.round(screenSize.width * (coordinates.x / 100)),
        y: Math.round(screenSize.height * (coordinates.y / 100)),
    }
}