class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];

        if (asteroids[0] > 0 && asteroids[1] < 0) {
            if (Math.abs(asteroids[0]) > Math.abs(asteroids[1])) {
                stack.push(asteroids[0]);
            } else if (Math.abs(asteroids[0]) < Math.abs(asteroids[1])) {
                stack.push(asteroids[1]);
            }
        } else {
            stack.push(asteroids[0], asteroids[1]);
        }

        let direction = stack[stack.length - 1] > 0 ? 1 : -1;

        for (let i = 2; i < asteroids.length; i += 1) {
            if (direction === 1 && asteroids[i] < 0) {
                let bothCollide = false;
                while (
                    stack.length &&
                    stack[stack.length - 1] > 0 &&
                    Math.abs(asteroids[i]) >= stack[stack.length - 1]
                ) {
                    if (Math.abs(asteroids[i]) === stack[stack.length - 1]) {
                        bothCollide = true;
                        stack.pop();
                        break;
                    }
                    stack.pop();
                }
                if (!bothCollide && (stack.length === 0 || stack[stack.length - 1] < 0)) {
                    stack.push(asteroids[i]);
                }
            } else {
                stack.push(asteroids[i]);
            }
            direction = stack[stack.length - 1] > 0 ? 1 : -1;
        }

        return stack;
    }
}
