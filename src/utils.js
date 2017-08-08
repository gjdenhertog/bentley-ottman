var utils = {
    // points comparator
    comparePoints: function(a, b) {
        if (a[1] > b[1] || (a[1] === b[1] && a[0] < b[0])) {
            return 1;
        } else if (a[1] < b[1] || (a[1] === b[1] && a[0] > b[0])) {
            return -1;
        } else if (a[0] === b[0] && a[1] === b[1]) {
            return 0;
        }
    },

    pointOnLine: function (line, point) {
        var begin = line[0],
            end = line[1],
            x1 = begin[0],
            y1 = begin[1],
            x2 = end[0],
            y2 = end[1],
            x = point[0],
            y = point[1];

        return ((x - x1) * (y2 - y1) - (y - y1) * (x2 - x1) === 0) && ((x > x1 && x < x2) || (x > x2 && x < x1));
    }
}

module.exports = utils;
