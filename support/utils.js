export function swipe(start, by){
    device.touchPerform([
        {
            action: 'press',
            options: start,
        },
        /* Appium documentation is so misleading, this moveTo is actually moveBy
           It is not the destination coordinate that the action move to, but the
           relative value of increments.
           This works as Appium 1.7.2
         */
        {
            action: 'moveTo',
            options: by,
        },
        {
            action: 'release'
        },
    ]);
    device.pause(1000);
}

export function swipeOnElement(element, direction, percentage = 0.5) {
    let elementDimension = element.getElementSize();
    let elementPosition = element.getLocation();
    let start = {};
    let by = {};
    switch (direction) {
        case 'left':
            start = {
                x: Math.round(elementPosition.x + elementDimension.width * 0.8),
                y: Math.round(elementDimension.y + elementDimension.height * 0.5),
            };
            by = {
                x: Math.round(- elementDimension.width * percentage),
                y: 0,
            };
            break;
        case 'up':
            start = {
                x: Math.round(elementPosition.x + elementDimension.width * 0.5),
                y: Math.round(elementPosition.y + elementDimension.height * 0.8),
            };
            by = {
                x: 0,
                y: Math.round(- elementDimension.height * percentage),
            };
            break;

    }
    swipe(start, by);
}